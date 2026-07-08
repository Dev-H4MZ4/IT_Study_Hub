// --- DYNAMIC APPLICATION STATE ---
let currentLang = localStorage.getItem('se_lang') || 'both'; // الخيارات: 'en', 'ar', 'both'
let currentTheme = localStorage.getItem('se_theme') || 'dark';
let userProgress = JSON.parse(localStorage.getItem('se_progress')) || { memorized: [], scores: {} };
let currentChapterId = null;

const langs = ['en', 'ar', 'both'];
const langLabels = { en: 'EN', ar: 'AR', both: 'EN+AR' };

// نصوص واجهة المستخدم الثابتة للمحرك البرمجي
const ui = {
    dashTitle: { en: 'Exam Study Dashboard', ar: 'لوحة دراسة الامتحان', both: 'Exam Study Dashboard / لوحة دراسة الامتحان' },
    backDash: { en: 'Back to Dashboard', ar: 'العودة للوحة الرئيسية', both: 'Back to Dashboard / العودة للرئيسية' },
    flashcards: { en: 'Flashcards Mode', ar: 'وضع البطاقات التعليمية', both: 'Flashcards / البطاقات التعليمية' },
    quiz: { en: 'Quiz Mode', ar: 'وضع الاختبار التفاعلي', both: 'Quiz Mode / الاختبار التفاعلي' },
    showAnswer: { en: 'Show Answer', ar: 'إظهار الإجابة', both: 'Show Answer / إظهار الإجابة' },
    reveal: { en: 'Reveal Definition', ar: 'إظهار التعريف', both: 'Reveal Definition / إظهار التعريف' },
    showPoints: { en: 'Show Points', ar: 'إظهار النقاط', both: 'Show Points / إظهار النقاط' },
    correct: { en: 'Correct Answer:', ar: 'الإجابة الصحيحة:', both: 'Correct Answer / الإجابة الصحيحة:' },
    markMem: { en: 'Mark as Memorized', ar: 'تحديد كمحفوظ', both: 'Mark as Memorized / تحديد كمحفوظ' },
    mustMem: { en: 'Must Memorize Points', ar: 'نقاط يجب حفظها', both: 'Must Memorize Points / نقاط يجب حفظها' },
    trueWord: { en: 'True', ar: 'صح', both: 'True / صح' },
    falseWord: { en: 'False', ar: 'خطأ', both: 'False / خطأ' },
    noItems: { en: 'No items found for this filter.', ar: 'لا توجد عناصر مطابقة لهذا الفلتر.', both: 'No items found / لا توجد عناصر' }
};

// --- BILINGUAL TEXT ENGINE ---
function getText(dataObj) {
    if (!dataObj) return '';
    if (currentLang === 'en') return `<div class="text-en" style="color:var(--text-primary);">${dataObj.en}</div>`;
    if (currentLang === 'ar') return `<div class="text-ar" style="color:var(--text-primary); border:none; padding:0;">${dataObj.ar}</div>`;
    
    // حالة العرض المزدوج (الإنجليزي فوق والعربي تحته مباشرة)
    return `
        <div class="bilingual-text">
            <div class="text-en">${dataObj.en}</div>
            <div class="text-ar">${dataObj.ar}</div>
        </div>
    `;
}

// --- INITIALIZATION ---
const htmlRoot = document.getElementById('html-root');
const appContainer = document.getElementById('app-container');
const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const searchInput = document.getElementById('global-search');
const navHome = document.getElementById('nav-home');
const navStats = document.getElementById('nav-stats');

function init() {
    // تطبيق السمة الافتراضية
    if (currentTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
    themeToggle.innerHTML = document.body.classList.contains('dark-theme') ? '<i class="ph ph-sun"></i><span class="action-text">Theme</span>' : '<i class="ph ph-moon"></i><span class="action-text">Theme</span>';
    
    // تطبيق اللغة والاتجاهات
    document.getElementById('lang-label').innerText = langLabels[currentLang];
    htmlRoot.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    
    setupEventListeners();
    updateUIText();
    renderDashboard();
}

function setupEventListeners() {
    // تبديل اللغة الثلاثي النظيف
    langToggle.addEventListener('click', () => {
        let idx = langs.indexOf(currentLang);
        currentLang = langs[(idx + 1) % 3];
        localStorage.setItem('se_lang', currentLang);
        
        htmlRoot.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        document.getElementById('lang-label').innerText = langLabels[currentLang];
        
        updateUIText();
        if (currentChapterId) renderChapter(currentChapterId, document.querySelector('.filter-btn.active')?.innerText.toLowerCase().split('/')[0].trim() || 'all');
        else renderDashboard();
    });

    // تبديل المظهر (مظلم / مضيء)
    themeToggle.addEventListener('click', () => {
        if(document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            currentTheme = 'light';
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            currentTheme = 'dark';
        }
        localStorage.setItem('se_theme', currentTheme);
        themeToggle.innerHTML = currentTheme === 'dark' ? '<i class="ph ph-sun"></i><span class="action-text">Theme</span>' : '<i class="ph ph-moon"></i><span class="action-text">Theme</span>';
    });

    // مربع البحث الفوري الفعال
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value.toLowerCase());
    });

    // أزرار القائمة الجانبية والسفلية
    navHome.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        navHome.classList.add('active');
        renderDashboard();
    });

    navStats.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        navStats.classList.add('active');
        renderGlobalStats();
    });

    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('study-modal').classList.add('hidden');
    });
    document.getElementById('close-modal-backdrop').addEventListener('click', () => {
        document.getElementById('study-modal').classList.add('hidden');
    });

    // دعم اختصارات لوحة المفاتيح الاحترافية (Spacebar للقلب، والأسهم للتنقل)
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('study-modal');
        if (!modal.classList.contains('hidden')) {
            if (e.key === 'ArrowRight') if(window.nextCard) window.nextCard();
            if (e.key === 'ArrowLeft') if(window.prevCard) window.prevCard();
            if (e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                const card = document.querySelector('.flashcard');
                if (card) card.classList.toggle('is-flipped');
            }
        }
        // اختصار ⌘K أو Ctrl+K للتركيز على مربع البحث سريعاً
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

function updateUIText() {
    document.querySelectorAll('[data-en]').forEach(el => {
        if(el.tagName === 'INPUT') {
            el.placeholder = currentLang === 'both' ? el.getAttribute('data-en-placeholder') + ' / ' + el.getAttribute('data-ar-placeholder') : el.getAttribute(`data-${currentLang}-placeholder`);
        } else {
            el.innerHTML = getText({ en: el.getAttribute('data-en'), ar: el.getAttribute('data-ar') });
        }
    });
}

// --- CORE RENDERING ENGINES ---
function renderDashboard() {
    currentChapterId = null;
    let html = `
        <div class="dashboard-header">
            <h2 style="font-size:2rem; font-weight:700; margin-bottom:1.5rem;">${ui.dashTitle[currentLang]}</h2>
        </div>
    `;

    if(!window.courseData || window.courseData.chapters.length === 0) {
        html += `<div style="text-align:center; padding: 3rem; color:var(--text-secondary);">No study chapters loaded yet. Check your script tags.</div>`;
        appContainer.innerHTML = html;
        return;
    }

    html += `<div class="grid-cards">`;
    window.courseData.chapters.forEach(chap => {
        const totalItems = chap.content.length;
        const memorizedItems = chap.content.filter(item => userProgress.memorized.includes(item.id)).length;
        const progress = totalItems > 0 ? Math.round((memorizedItems / totalItems) * 100) : 0;

        html += `
            <div class="chapter-card" onclick="renderChapter('${chap.id}')">
                <div>
                    <h3>${getText(chap.title)}</h3>
                    <p>${getText(chap.overview)}</p>
                </div>
                <div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-top:0.6rem; font-size:0.8rem; color:var(--text-muted); font-weight:600;">
                        <span>${progress}% Done</span>
                        <span>${memorizedItems}/${totalItems} Units</span>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    appContainer.innerHTML = html;
}

function renderChapter(chapterId, filterType = 'all') {
    currentChapterId = chapterId;
    const chapter = window.courseData.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    let html = `
        <button class="btn btn-outline" onclick="renderDashboard()" style="margin-bottom: 2rem;">
            <i class="ph ph-arrow-left"></i> ${ui.backDash[currentLang]}
        </button>
        
        <div class="glass-panel" style="padding: 2rem; margin-bottom: 2rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1.5rem;">
            <div>
                <h2 style="font-size:1.6rem; font-weight:700; letter-spacing:-0.5px;">${getText(chapter.title)}</h2>
                <p style="color:var(--text-secondary); margin-top:0.3rem;">${getText(chapter.overview)}</p>
            </div>
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; width:100%; max-width:400px;">
                <button class="btn" style="flex:1;" onclick="startFlashcards('${chapterId}')"><i class="ph-fill ph-cards"></i> ${ui.flashcards[currentLang]}</button>
                <button class="btn" style="flex:1; background:var(--accent-gradient);" onclick="startQuiz('${chapterId}')"><i class="ph-fill ph-game-controller"></i> ${ui.quiz[currentLang]}</button>
            </div>
        </div>
        
        <div class="filters">
            <button class="filter-btn ${filterType==='all'?'active':''}" onclick="renderChapter('${chapterId}', 'all')">All / الكل</button>
            <button class="filter-btn ${filterType==='tf'?'active':''}" onclick="renderChapter('${chapterId}', 'tf')">True & False</button>
            <button class="filter-btn ${filterType==='mcq'?'active':''}" onclick="renderChapter('${chapterId}', 'mcq')">MCQs</button>
            <button class="filter-btn ${filterType==='definition'?'active':''}" onclick="renderChapter('${chapterId}', 'definition')">Definitions</button>
            <button class="filter-btn ${filterType==='explain'?'active':''}" onclick="renderChapter('${chapterId}', 'explain')">Explain Questions</button>
            <button class="filter-btn ${filterType==='list'?'active':''}" onclick="renderChapter('${chapterId}', 'list')">Lists & Mention</button>
            <button class="filter-btn ${filterType==='memorize'?'active':''}" onclick="renderChapter('${chapterId}', 'memorize')">Must Memorize</button>
        </div>
    `;

    const filteredContent = chapter.content.filter(item => filterType === 'all' || item.type === filterType);

    if(filteredContent.length === 0) {
        html += `<p style="text-align:center; padding: 4rem; color:var(--text-secondary); font-weight:500;">${ui.noItems[currentLang]}</p>`;
    } else {
        filteredContent.forEach(item => { html += renderItemCard(item); });
    }

    appContainer.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderItemCard(item) {
    const isMemorized = userProgress.memorized.includes(item.id);
    let html = `<div class="qa-card" id="card-${item.id}">`;
    
    html += `<span class="badge ${item.type}">${item.type === 'tf' ? 'True / False' : item.type}</span> `;
    if (item.isExpected) html += `<span class="badge expected"><i class="ph-fill ph-star"></i> Most Expected</span>`;
    
    if (item.type === 'tf') {
        html += `<h3 style="font-weight:600;">${getText(item.question)}</h3>
                 <button class="btn btn-outline" onclick="document.getElementById('ans-${item.id}').classList.toggle('hidden')">${ui.showAnswer[currentLang]}</button>
                 <div class="answer-section hidden" id="ans-${item.id}">
                    <p style="font-size:1.1rem; margin-bottom:0.6rem;"><span class="badge ${item.answer?'mcq':'expected'}">${item.answer ? ui.trueWord[currentLang] : ui.falseWord[currentLang]}</span></p>
                    <div style="color:var(--text-secondary); font-weight:500; margin-bottom:0.5rem;">${getText(item.explanation)}</div>
                    ${item.correction && (item.correction.en || item.correction.ar) ? `<div style="background:rgba(245,158,11,0.06); border-left:4px solid #f59e0b; padding:0.8rem; border-radius:8px; margin-top:0.8rem;"><strong>Correction / التصحيح:</strong> ${getText(item.correction)}</div>` : ''}
                 </div>`;
    } else if (item.type === 'mcq') {
        html += `<h3 style="font-weight:600;">${getText(item.question)}</h3>
                 <ul style="list-style:none; margin: 1.2rem 0; display:flex; flex-direction:column; gap:0.5rem;">
                    ${item.options.map((opt, i) => `<li style="padding: 0.8rem 1rem; border:1px solid var(--border-color); background:rgba(128,128,128,0.03); border-radius:12px; font-weight:500;"><span style="color:var(--primary); font-weight:700; margin-right:0.5rem;">${String.fromCharCode(65 + i)})</span> ${getText(opt)}</li>`).join('')}
                 </ul>
                 <button class="btn btn-outline" onclick="document.getElementById('ans-${item.id}').classList.toggle('hidden')">${ui.showAnswer[currentLang]}</button>
                 <div class="answer-section hidden" id="ans-${item.id}">
                    <p style="font-size:1rem; font-weight:700; color:#10b981; margin-bottom:0.5rem;"><i class="ph-fill ph-check-circle"></i> ${ui.correct[currentLang]} ${getText(item.options[item.correctIndex])}</p>
                    <div style="color:var(--text-secondary); margin-top:0.5rem;">${getText(item.explanation)}</div>
                 </div>`;
    } else if (item.type === 'definition') {
        html += `<h3 style="font-size:1.3rem; font-weight:700; color:var(--primary);">${getText(item.term)}</h3>
                 <button class="btn btn-outline" onclick="document.getElementById('ans-${item.id}').classList.toggle('hidden')">${ui.reveal[currentLang]}</button>
                 <div class="answer-section hidden" id="ans-${item.id}"><div style="font-size:1.05rem; line-height:1.6;">${getText(item.definition)}</div></div>`;
    } else if (item.type === 'explain') {
        html += `<h3 style="font-weight:600; color:#38bdf8;">${getText(item.question)}</h3>
                 <button class="btn btn-outline" onclick="document.getElementById('ans-${item.id}').classList.toggle('hidden')">${ui.showAnswer[currentLang]}</button>
                 <div class="answer-section hidden" id="ans-${item.id}"><div style="font-size:1.05rem; line-height:1.6; color:var(--text-secondary);">${getText(item.answer)}</div></div>`;
    } else if (item.type === 'list') {
        html += `<h3 style="font-weight:600;">${getText(item.question)}</h3>
                 <button class="btn btn-outline" onclick="document.getElementById('ans-${item.id}').classList.toggle('hidden')">${ui.showPoints[currentLang]}</button>
                 <div class="answer-section hidden" id="ans-${item.id}">
                    <ul style="margin-left: 1.2rem; margin-right: 1.2rem; display:flex; flex-direction:column; gap:0.6rem;">
                        ${item.points.map(p => `<li style="font-size:1.05rem; line-height:1.5;">${getText(p)}</li>`).join('')}
                    </ul>
                 </div>`;
    } else if (item.type === 'memorize') {
        html += `<h3 style="color:#f59e0b; font-weight:700; margin-bottom:1rem;"><i class="ph-fill ph-lightbulb"></i> ${ui.mustMem[currentLang]}</h3>
                 <ul style="margin-left: 1.2rem; margin-right: 1.2rem; display:flex; flex-direction:column; gap:0.6rem; border-left:3px solid #f59e0b; padding-left:1rem;">
                     ${item.points.map(p => `<li style="font-size:1.05rem; line-height:1.5; color:var(--text-secondary);">${getText(p)}</li>`).join('')}
                 </ul>`;
    }

    html += `
        <div style="margin-top:1.5rem; display:flex; justify-content:flex-end;">
            <div class="memorized-check" onclick="toggleMemorized('${item.id}')" style="${isMemorized ? 'background:rgba(16,185,129,0.15); border-color:#10b981;' : ''}">
                <i class="${isMemorized ? 'ph-fill ph-check-circle' : 'ph ph-circle'}" style="font-size:1.3rem;"></i> 
                <span>${ui.markMem[currentLang]}</span>
            </div>
        </div>
    </div>`;
    return html;
}

// --- GLOBAL LIVE SEARCH ---
function handleSearch(query) {
    if (!query) {
        if(currentChapterId) renderChapter(currentChapterId); else renderDashboard();
        return;
    }
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    let resultsHtml = `<h2 style="font-size:1.5rem; font-weight:700; margin-bottom:1.5rem;"><i class="ph ph-magnifying-glass"></i> Search Results / نتائج البحث</h2>`;
    let count = 0;

    window.courseData.chapters.forEach(chap => {
        chap.content.forEach(item => {
            const matchStr = JSON.stringify(item).toLowerCase();
            if (matchStr.includes(query)) {
                resultsHtml += renderItemCard(item);
                count++;
            }
        });
    });

    if (count === 0) resultsHtml += `<p style="text-align:center; padding:4rem; color:var(--text-secondary);">No matches found for "${query}"</p>`;
    appContainer.innerHTML = resultsHtml;
}

// --- PROGRESS & STATISTICS VIEW ---
function renderGlobalStats() {
    currentChapterId = null;
    let totalItems = 0; let totalMemorized = 0;
    
    window.courseData.chapters.forEach(c => {
        totalItems += c.content.length;
        totalMemorized += c.content.filter(i => userProgress.memorized.includes(i.id)).length;
    });
    
    const totalPercent = totalItems > 0 ? Math.round((totalMemorized / totalItems) * 100) : 0;

    let html = `
        <div class="dashboard-header">
            <h2 style="font-size:2rem; font-weight:700; margin-bottom:1.5rem;">Overall Analytics / مستوى تقدمك العام</h2>
        </div>
        <div class="glass-panel" style="padding:2.5rem; text-align:center; margin-bottom:2rem;">
            <div style="font-size:4rem; font-weight:800; color:var(--primary); line-height:1;">${totalPercent}%</div>
            <p style="color:var(--text-secondary); font-weight:600; margin-top:0.5rem; font-size:1.1rem;">Total Syllabus Mastered / إجمالي مادة المنهج المحفوظة</p>
            <div class="progress-bar" style="margin-top:1.5rem; height:12px;">
                <div class="progress-fill" style="width: ${totalPercent}%"></div>
            </div>
            <p style="margin-top:1rem; color:var(--text-muted); font-weight:500;">${totalMemorized} out of ${totalItems} total learning structures completed.</p>
        </div>
    `;
    appContainer.innerHTML = html;
}

function toggleMemorized(itemId) {
    if (userProgress.memorized.includes(itemId)) {
        userProgress.memorized = userProgress.memorized.filter(id => id !== itemId);
    } else {
        userProgress.memorized.push(itemId);
    }
    localStorage.setItem('se_progress', JSON.stringify(userProgress));
    
    // تحديث بصرى سريع للكارت دون هدم الصفحة
    const card = document.getElementById(`card-${itemId}`);
    if (card) {
        const checkIcon = card.querySelector('.memorized-check i');
        const checkDiv = card.querySelector('.memorized-check');
        if(userProgress.memorized.includes(itemId)) {
            checkIcon.className = 'ph-fill ph-check-circle';
            checkDiv.style.background = 'rgba(16,185,129,0.15)';
            checkDiv.style.borderColor = '#10b981';
        } else {
            checkIcon.className = 'ph ph-circle';
            checkDiv.style.background = '';
            checkDiv.style.borderColor = '';
        }
    }
}

// --- STUDY MODE: IMMERSIVE FLASHCARDS (DEFINITIONS & LISTS ONLY) ---
function startFlashcards(chapterId) {
    const chapter = window.courseData.chapters.find(c => c.id === chapterId);
    
    // التعديل الهندسي: جلب التعاريف (definition) والقوائم (list) فقط وإهمال البقية
    const cards = chapter.content.filter(item => ['definition', 'list'].includes(item.type));
    
    if(cards.length === 0) {
        return alert(currentLang === 'ar' ? 'لا توجد تعاريف أو أسئلة اذكر/عدد في هذا الفصل.' : 'No definitions or list items available for Flashcards in this chapter.');
    }
    
    let currentIndex = 0;
    window.nextCard = () => { if(currentIndex < cards.length-1) { currentIndex++; render(); } };
    window.prevCard = () => { if(currentIndex > 0) { currentIndex--; render(); } };

    const render = () => {
        const item = cards[currentIndex];
        let front = item.type === 'definition' ? item.term : item.question;
        
        let back;
        if (item.type === 'definition') {
            back = item.definition;
        } else if (item.type === 'list') {
            // تحويل مصفوفة النقاط ديناميكياً إلى HTML منسق لظهر البطاقة بما يدعم اللغات الثلاثة
            back = {
                en: `<ul style="text-align:left; margin-left:1.2rem; list-style-type:disc;">${item.points.map(p => `<li style="margin-bottom:0.4rem;">${p.en}</li>`).join('')}</ul>`,
                ar: `<ul style="text-align:right; margin-right:1.2rem; list-style-type:disc; direction:rtl;">${item.points.map(p => `<li style="margin-bottom:0.4rem;">${p.ar}</li>`).join('')}</ul>`
            };
        }

        document.getElementById('modal-body').innerHTML = `
            <div style="text-align:center; margin-bottom:1rem; color:var(--text-muted); font-weight:600; font-size:0.85rem;">
                Card ${currentIndex + 1} of ${cards.length} <br>
                <small style="opacity:0.7;">(Tap Card to Flip / Spacebar to Flip / Arrows to Move)</small>
            </div>
            <div class="flashcard-container" onclick="this.querySelector('.flashcard').classList.toggle('is-flipped')">
                <div class="flashcard">
                    <div class="flashcard-face flashcard-front">
                        <span class="badge" style="background:rgba(255,255,255,0.1); color:white;">
                            ${item.type === 'definition' ? (currentLang === 'ar' ? 'تعريف مصطلح' : 'Definition') : (currentLang === 'ar' ? 'سؤال تعداد ذكر' : 'List / Mention')}
                        </span>
                        <div style="font-size:1.25rem; font-weight:600; width:100%; padding:0 0.5rem;">${getText(front)}</div>
                    </div>
                    <div class="flashcard-face flashcard-back">
                        <div style="font-size:1.1rem; line-height:1.6; width:100%; overflow-y:auto; max-height:100%; padding:0 0.5rem;">${getText(back)}</div>
                    </div>
                </div>
            </div>
            <div style="display:flex; justify-content:space-between; margin-top:1.5rem; gap:1rem;">
                <button class="btn btn-outline" style="flex:1;" onclick="window.prevCard()" ${currentIndex === 0 ? 'disabled' : ''}><i class="ph ph-arrow-left"></i> Prev</button>
                <button class="btn" style="flex:1;" onclick="window.nextCard()" ${currentIndex === cards.length-1 ? 'disabled' : ''}>Next <i class="ph ph-arrow-right"></i></button>
            </div>
        `;
    };
    render();
    document.getElementById('study-modal').classList.remove('hidden');
}
// --- STUDY MODE: QUIZ MODE WITH VISUAL TOUCH FEEDBACK ---
function startQuiz(chapterId) {
    const chapter = window.courseData.chapters.find(c => c.id === chapterId);
    const questions = chapter.content.filter(item => ['tf', 'mcq'].includes(item.type));
    if(questions.length === 0) return alert('No objective questions (MCQ/TF) available for this chapter.');
    
    // خلط ترتيب الأسئلة عشوائياً لضمان اختبار حقيقي
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    let currentIndex = 0; let score = 0;

    const renderQ = () => {
        if(currentIndex >= shuffled.length) {
            document.getElementById('modal-body').innerHTML = `
                <div style="text-align:center; padding: 2rem 1rem;">
                    <div style="font-size:4rem; color:var(--primary);"><i class="ph-fill ph-trophy"></i></div>
                    <h2 style="font-size:1.8rem; font-weight:700; margin-top:1rem;">Quiz Complete!</h2>
                    <p style="font-size:1.5rem; margin:1rem 0; font-weight:700; color:var(--text-secondary);">${score} / ${shuffled.length}</p>
                    <button class="btn" style="width:100%; max-width:200px; margin-top:1rem;" onclick="document.getElementById('study-modal').classList.add('hidden')">Finish</button>
                </div>
            `;
            return;
        }

        const q = shuffled[currentIndex];
        let html = `
            <div style="margin-bottom:1rem; color:var(--text-muted); font-weight:600; font-size:0.85rem;">Question ${currentIndex + 1} of ${shuffled.length}</div>
            <h3 style="font-size:1.25rem; font-weight:600; line-height:1.5; margin-bottom:2rem;">${getText(q.question)}</h3>
            <div class="quiz-options-container">
        `;

        if (q.type === 'tf') {
            html += `
                <button class="btn btn-outline quiz-btn" style="justify-content:flex-start; padding:1rem;" onclick="window.evalAns(${q.answer === true}, this)">${ui.trueWord[currentLang]}</button>
                <button class="btn btn-outline quiz-btn" style="justify-content:flex-start; padding:1rem;" onclick="window.evalAns(${q.answer === false}, this)">${ui.falseWord[currentLang]}</button>
            `;
        } else if (q.type === 'mcq') {
            q.options.forEach((opt, index) => {
                html += `
                    <button class="btn btn-outline quiz-btn" style="justify-content:flex-start; padding:1rem; text-align:left;" onclick="window.evalAns(${index === q.correctIndex}, this)">
                        <span style="font-weight:700; margin-right:0.5rem; color:var(--primary);">${String.fromCharCode(65+index)})</span> ${getText(opt)}
                    </button>
                `;
            });
        }

        html += `</div>`;
        document.getElementById('modal-body').innerHTML = html;
    };

    window.evalAns = (isCorrect, btn) => {
        // حظر الأزرار مباشرة لمنع النقر المتعدد المزدوج
        document.querySelectorAll('.quiz-btn').forEach(b => b.disabled = true);
        
        // مؤثر لوني فوري (أخضر للصح / أحمر للخطأ)
        if(isCorrect) {
            btn.style.background = 'var(--success-gradient)';
            btn.style.borderColor = 'transparent';
            btn.style.color = 'white';
            score++;
        } else {
            btn.style.background = 'var(--danger-gradient)';
            btn.style.borderColor = 'transparent';
            btn.style.color = 'white';
        }
        
        // الانتقال التلقائي بعد نصف ثانية لرؤية نتيجة اللمس
        setTimeout(() => {
            currentIndex++;
            renderQ();
        }, 650);
    };

    renderQ();
    document.getElementById('study-modal').classList.remove('hidden');
}

// إطلاق محرك النظام فور تحميل الملفات
window.addEventListener('DOMContentLoaded', init);