// بيانات الفصل السادس: Software Testing & Evaluation
window.courseData.chapters.push({
    id: "ch6",
    title: { en: "Chapter 6: Software Testing & Evaluation", ar: "الفصل 6: اختبار وتقييم البرمجيات" },
    overview: { en: "Validation, Verification, development testing levels, user testing, and software maintenance.", ar: "التحقق من الصحة، التحقق من المطابقة، مستويات اختبار التطوير، اختبار المستخدم، وصيانة البرمجيات." },
    content: [
        // --- TRUE / FALSE ---
        { id: "ch6_tf1", type: "tf", isExpected: false, 
          question: { en: "Testing can demonstrate that there are no remaining faults in a program.", ar: "يمكن للاختبار أن يثبت عدم وجود أي عيوب أو أخطاء متبقية في البرنامج." },
          answer: false, 
          explanation: { en: "Testing can only reveal the existence of bugs, it cannot prove that the software is 100% bug-free.", ar: "يمكن للاختبار فقط أن يكشف عن وجود الأخطاء البرمجية (bugs)، لكنه لا يمكنه إثبات خلو البرنامج منها بنسبة 100%." },
          correction: { en: "Testing can only show the presence of errors in a program; it cannot demonstrate that there are no remaining faults.", ar: "يمكن للاختبار فقط إظهار وجود الأخطاء في البرنامج؛ ولا يمكنه إثبات عدم وجود عيوب متبقية." }
        },
        { id: "ch6_tf2", type: "tf", isExpected: true, 
          question: { en: "Verification and validation mean exactly the same thing in software engineering.", ar: "التحقق (Verification) والتحقق من الصحة (Validation) يعنيان نفس الشيء تماماً في هندسة البرمجيات." },
          answer: false, 
          explanation: { en: "They have distinct meanings; verification checks conformance to specifications, while validation checks if it meets the customer's real needs.", ar: "لهما معانٍ مختلفة ومتميزة؛ حيث يفحص التحقق (Verification) مدى مطابقة النظام للمواصفات الفنية المكتوبة، بينما يفحص التحقق من الصحة (Validation) ما إذا كان النظام يلبي احتياجات العميل الفعلية." },
          correction: { en: "Verification is checking that the software meets its stated functional requirements, whereas validation ensures that the software meets the customer’s expectations.", ar: "التحقق هو التأكد من أن البرنامج يلبي متطلباته الوظيفية المذكورة، في حين أن التحقق من الصحة يضمن أن البرنامج يلبي توقعات واحتياجات العميل الفعلي." }
        },
        { id: "ch6_tf3", type: "tf", isExpected: false, 
          question: { en: "Unit testing focuses on testing component interactions.", ar: "يركز اختبار الوحدة (Unit testing) على اختبار التفاعلات والروابط بين المكونات المختلفة." },
          answer: false, 
          explanation: { en: "Component interactions are tested during system testing, not unit testing.", ar: "يتم اختبار تفاعلات المكونات أثناء اختبار النظام (System testing) وليس أثناء اختبار الوحدة." },
          correction: { en: "Unit testing focuses on testing the functionality of individual objects or methods, while system testing focuses on testing component interactions.", ar: "يركز اختبار الوحدة على اختبار وظائف الكائنات الفردية أو الدوال والطرق البرمجية (Methods)، بينما يركز اختبار النظام على اختبار تفاعلات المكونات معاً." }
        },
        { id: "ch6_tf4", type: "tf", isExpected: false, 
          question: { en: "Alpha testing takes place when an early release of the software is made available to users to experiment with in their own environments.", ar: "يحدث اختبار ألفا (Alpha testing) عندما يتم إتاحة نسخة إصدار مبكرة من البرنامج للمستخدمين لتجربتها واختبارها في بيئاتهم التشغيلية الخاصة." },
          answer: false, 
          explanation: { en: "Testing an early release in the user's environment is called Beta testing. Alpha testing happens at the developer's site.", ar: "إن اختبار إصدار مبكر في بيئة المستخدم الخاصة يُسمى اختبار بيتا (Beta testing)، بينما يحدث اختبار ألفا في موقع المطورين." },
          correction: { en: "Alpha testing is where users work with the development team to test the software at the developer’s site.", ar: "اختبار ألفا هو الاختبار الذي يعمل فيه المستخدمون مع فريق التطوير لاختبار البرنامج داخل موقع المطور (developer’s site)." }
        },
        { id: "ch6_tf5", type: "tf", isExpected: false, 
          question: { en: "In software maintenance, repairing system faults is the most expensive activity.", ar: "في صيانة البرمجيات، يُعد إصلاح عيوب وأخطاء النظام النشاط الأعلى تكلفة والأكثر استهلاكاً للميزانية." },
          answer: false, 
          explanation: { en: "Evolving the system to accommodate new requirements (functionality addition) is much more expensive than fixing bugs.", ar: "إن تطوير النظام لتلبية متطلبات جديدة (إضافة وظائف جديدة) هو أكثر تكلفة بكثير من مجرد إصلاح الأخطاء (fixing bugs)." },
          correction: { en: "Universally, repairing system faults is not the most expensive maintenance activity; functionality addition or modification consumes most maintenance effort (approx. 65%).", ar: "عالمياً، لا يُعد إصلاح عيوب النظام نشاط الصيانة الأكثر تكلفة؛ بل إن إضافة الوظائف وتعديلها هو ما يستهلك معظم جهد الصيانة (حوالي 65%)." }
        },
        { id: "ch6_tf6", type: "tf", isExpected: false, 
          question: { en: "Acceptance testing is an inherent part of custom systems development.", ar: "يُعد اختبار القبول (Acceptance testing) جزءاً متأصلاً ولا يتجزأ من عملية تطوير الأنظمة المخصصة (Custom systems)." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch6_tf7", type: "tf", isExpected: false, 
          question: { en: "Defect testing is concerned with rooting out undesirable system behavior, and its test cases can be deliberately obscure.", ar: "يهتم اختبار العيوب (Defect testing) باجتثاث السلوكيات غير المرغوب فيها للنظام، ويمكن أن تكون حالات الاختبار (Test cases) الخاصة به غامضة وغير تقليدية عمداً." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },

        // --- MCQ ---
        { id: "ch6_mcq1", type: "mcq", isExpected: true,
          question: { en: "According to Barry Boehm, which of the following questions defines 'Validation'?", ar: "وفقاً للعالم باري بوهيم، أي من الأسئلة التالية يُعرّف مصطلح 'التحقق من الصحة' (Validation)؟" },
          options: [
              { en: "A) Are we building the product right?", ar: "A) هل نقوم ببناء المنتج بشكل صحيح؟" },
              { en: "B) Are we building the right product?", ar: "B) هل نقوم ببناء المنتج الصحيح؟ (Are we building the right product?)" },
              { en: "C) Are the component interfaces integrated correctly?", ar: "C) هل واجهات المكونات متكاملة بشكل صحيح؟" },
              { en: "D) Are we using the correct programming language?", ar: "D) هل نستخدم لغة البرمجة الصحيحة؟" }
          ], correctIndex: 1, explanation: { en: "Validation ensures that the developed system matches the customer's real needs.", ar: "يضمن التحقق من الصحة (Validation) أن النظام الذي تم تطويره يطابق احتياجات وتوقعات العميل الحقيقية." }
        },
        { id: "ch6_mcq2", type: "mcq", isExpected: true,
          question: { en: "Which level of development testing focuses specifically on testing component interfaces?", ar: "أي مستوى من مستويات اختبار التطوير يركز بشكل خاص على اختبار واجهات المكونات (Component interfaces)؟" },
          options: [
              { en: "A) Unit testing", ar: "A) اختبار الوحدة" },
              { en: "B) System testing", ar: "B) اختبار النظام" },
              { en: "C) Component testing", ar: "C) اختبار المكونات (Component testing)" },
              { en: "D) Acceptance testing", ar: "D) اختبار القبول" }
          ], correctIndex: 2, explanation: { en: "Component testing evaluates how different code packages or objects communicate via interfaces.", ar: "يقيّم اختبار المكونات كيفية تواصل الكائنات أو الحزم البرمجية المختلفة عبر الواجهات البرمجية المصممة لها." }
        },
        { id: "ch6_mcq3", type: "mcq", isExpected: true,
          question: { en: "Which type of user testing involves releasing the software to early adopters to find interaction problems in various different environments?", ar: "أي نوع من أنواع اختبار المستخدم يتضمن إطلاق البرنامج للمتبنين الأوائل (Early adopters) للعثور على مشاكل التفاعل في بيئات مختلفة ومتنوعة؟" },
          options: [
              { en: "A) Alpha testing", ar: "A) اختبار ألفا" },
              { en: "B) Component testing", ar: "B) اختبار المكونات" },
              { en: "C) Acceptance testing", ar: "C) اختبار القبول" },
              { en: "D) Beta testing", ar: "D) اختبار بيتا (Beta testing)" }
          ], correctIndex: 3, explanation: { en: "Beta testing is conducted externally in natural user environments outside the development office.", ar: "يتم إجراء اختبار بيتا خارجياً في بيئات تشغيل طبيعية وحقيقية للمستخدمين خارج مكاتب التطوير." }
        },
        { id: "ch6_mcq4", type: "mcq", isExpected: false,
          question: { en: "According to industry estimates, what percentage of organizational software costs are dedicated to software evolution?", ar: "وفقاً لتقديرات الصناعة البرمجية، ما هي النسبة المئوية لتكاليف برمجيات المؤسسات المخصصة لتطور البرمجيات وتطورها وصيانتها (Software evolution)؟" },
          options: [
              { en: "A) 15-20%", ar: "A) 15-20%" },
              { en: "B) 30-40%", ar: "B) 30-40%" },
              { en: "C) 50-60%", ar: "C) 50-60%" },
              { en: "D) 85-90%", ar: "D) 85-90%" }
          ], correctIndex: 3, explanation: { en: "Evolution and long-term maintenance take up the vast majority (85-90%) of lifetime software expenditures.", ar: "يستحوذ التطور والصيانة طويلة المدى على الغالبية العظمى العظمى (85-90%) من إجمالي نفقات دورة حياة البرمجيات." }
        },
        { id: "ch6_mcq5", type: "mcq", isExpected: false,
          question: { en: "Modifying an application to cope with a newly installed operating system is an example of:", ar: "تعديل تطبيق برمجي ليتوافق ويتعامل مع نظام تشغيل تم تثبيته حديثاً هو مثال على:" },
          options: [
              { en: "A) Fault repair", ar: "A) إصلاح الأعطال والأخطاء" },
              { en: "B) Environmental adaptation", ar: "B) التكيف البيئي (Environmental adaptation)" },
              { en: "C) Functionality addition", ar: "C) إضافة وظائف جديدة" },
              { en: "D) Validation testing", ar: "D) اختبار التحقق من الصحة" }
          ], correctIndex: 1, explanation: { en: "Modifying software to work with altered platforms, hardware, or OS environments constitutes adaptive maintenance.", ar: "إن تعديل البرمجيات للعمل مع منصات أو عتاد أو بيئات أنظمة تشغيل معدلة يمثل نوع الصيانة التكيفية." }
        },
        { id: "ch6_mcq6", type: "mcq", isExpected: true,
          question: { en: "Based on the approximate distribution of maintenance costs, what consumes the largest percentage (about 65%) of the maintenance budget?", ar: "بناءً على التوزيع التقريبي لتكاليف صيانة البرمجيات، ما الذي يستهلك النسبة المئوية الأكبر (حوالي 65%) من ميزانية الصيانة الإجمالية؟" },
          options: [
              { en: "A) Environmental adaptation", ar: "A) التكيف البيئي" },
              { en: "B) Fault repair", ar: "B) إصلاح الأعطال والأخطاء" },
              { en: "C) Functionality addition or modification", ar: "C) إضافة وظائف جديدة أو تعديلها (Functionality addition or modification)" },
              { en: "D) Unit testing", ar: "D) اختبار الوحدة" }
          ], correctIndex: 2, explanation: { en: "Adding new functionality or changing existing functions due to new business requirements is the primary cost driver.", ar: "إن إضافة ميزات جديدة أو تعديل وظائف قائمة تلبية لمتطلبات العمل الجديدة يمثل المحرك الأساسي للتكاليف النقدية والزمنية." }
        },

        // --- DEFINITIONS ---
        { id: "ch6_def1", type: "definition", isExpected: false, term: { en: "Validation", ar: "التحقق من الصحة (Validation)" }, definition: { en: "The process of ensuring that the software meets the customer’s expectations ('Are we building the right product?').", ar: "عملية التأكد من أن البرنامج يلبي توقعات العميل الحقيقية ويجيب على سؤال: ('هل نقوم ببناء المنتج الصحيح؟')." } },
        { id: "ch6_def2", type: "definition", isExpected: false, term: { en: "Verification", ar: "التحقق من المطابقة (Verification)" }, definition: { en: "The process of checking that the software meets its stated functional requirements ('Are we building the product, right?').", ar: "عملية التحقق من أن البرنامج يتوافق مع متطلباته الوظيفية المكتوبة والمحددة مسبقاً ويجيب على سؤال: ('هل نقوم ببناء المنتج بشكل صحيح؟')." } },
        { id: "ch6_def3", type: "definition", isExpected: false, term: { en: "Defect Testing", ar: "اختبار العيوب (Defect Testing)" }, definition: { en: "Testing concerned with rooting out undesirable system behavior, such as crashes, incorrect computations, and data corruption.", ar: "نوع من أنواع الاختبارات يتعلق باكتشاف واجتثاث سلوكيات النظام غير المرغوب فيها، مثل انهيار النظام الكلي، الحسابات غير الصحيحة، وفساد وضياع البيانات." } },
        { id: "ch6_def4", type: "definition", isExpected: false, term: { en: "Alpha Testing", ar: "اختبار ألفا (Alpha Testing)" }, definition: { en: "A user testing process where users of the software work with the development team to test the software at the developer’s site.", ar: "عملية اختبار مستخدم حيث يعمل مستخدمو البرنامج جنباً إلى جنب مع فريق التطوير لاختبار وفحص البرمجيات داخل موقع المطور." } },
        { id: "ch6_def5", type: "definition", isExpected: false, term: { en: "Beta Testing", ar: "اختبار بيتا (Beta Testing)" }, definition: { en: "A user testing process where an early release of the software is made available to users to experiment and to raise problems they discover.", ar: "عملية اختبار مستخدم يتم فيها إتاحة إصدار مبكر وتجريبي من البرنامج للمستخدمين لتجربته في بيئاتهم الواقعية وإرسال المشاكل والشكاوى التي يكتشفونها." } },
        { id: "ch6_def6", type: "definition", isExpected: false, term: { en: "Acceptance Testing", ar: "اختبار القبول (Acceptance Testing)" }, definition: { en: "A user testing process where customers test a system to decide whether or not it is ready to be accepted from the system developers and deployed.", ar: "عملية اختبار مستخدم يقوم فيها العملاء باختبار النظام لاتخاذ قرار نهائي بشأن ما إذا كان جاهزاً للاستلام والقبول من مطوري النظام والبدء في نشره واستعماله فعلياً." } },
        { id: "ch6_def7", type: "definition", isExpected: false, term: { en: "Software Maintenance", ar: "صيانة البرمجيات (Software Maintenance)" }, definition: { en: "The general process of changing a system after it has been delivered.", ar: "العملية الإجمالية العامة لإجراء التعديلات والتحسينات والتغييرات على النظام البرمجي بعد أن يتم تسليمه رسمياً للعميل." } },

        // --- EXPLAIN ---
        { id: "ch6_exp1", type: "explain", isExpected: true,
          question: { en: "Explain the difference between Verification and Validation.", ar: "اشرح الفرق الجوهري بين عملية التحقق (Verification) وعملية التحقق من الصحة (Validation)." },
          answer: { en: "According to Barry Boehm, Validation asks 'Are we building the right product?' meaning it ensures the software meets the customer's actual expectations and needs. Verification asks 'Are we building the product, right?' meaning it checks if the software technically meets its stated functional requirements and specifications.", ar: "وفقاً للعالم باري بوهيم، فإن التحقق من الصحة (Validation) يطرح السؤال التالي: 'هل نبني المنتج الصحيح؟' مما يعني أنه يضمن تلبية البرنامج لتوقعات واحتياجات العميل الحقيقية والعملية. في حين أن التحقق (Verification) يطرح السؤال: 'هل نبني المنتج بشكل صحيح؟' مما يعني أنه يفحص ويتأكد مما إذا كان البرنامج يلبي تقنياً متطلباته الوظيفية المكتوبة والمواصفات المتفق عليها مسبقاً." }
        },
        { id: "ch6_exp2", type: "explain", isExpected: true,
          question: { en: "Explain the two distinct goals of the testing process.", ar: "اشرح الهدفين المميزين والمختلفين لعملية اختبار البرمجيات." },
          answer: { en: "1. To demonstrate to the developer and the customer that the software meets its requirements (Validation testing).\n2. To discover situations in which the behavior of the software is incorrect, undesirable, or does not conform to its specification (Defect testing).", ar: "1. إثبات وإظهار للمطور وللعميل على حد سواء أن البرنامج يلبي متطلباته المحددة (ويُعرف باختبار التحقق من الصحة Validation testing).\n2. اكتشاف الحالات والمواقف التي يكون فيها سلوك البرنامج خاطئاً، أو غير مرغوب فيه، أو غير مطابق للمواصفات الموضوعة له (ويُعرف باختبار العيوب Defect testing)." }
        },
        { id: "ch6_exp3", type: "explain", isExpected: true,
          question: { en: "Explain the three different types of software maintenance.", ar: "اشرح بالتفصيل الأنواع الثلاثة المختلفة لصيانة البرمجيات." },
          answer: { en: "1. Fault repairs: Fixing coding, design, or requirements errors found in the system.\n2. Environmental adaptation: Modifying the software to adapt it to changes in its environment, such as new hardware or operating systems.\n3. Functionality addition: Enhancing the system to accommodate new organizational or business changes, which is usually the largest and most expensive type of maintenance.", ar: "1. إصلاح الأعطال والعيوب (Fault repairs): تصحيح وإصلاح أخطاء الترميز (الكود)، أو التصميم، أو الأخطاء التي تم اكتشافها في المتطلبات داخل النظام.\n2. التكيف البيئي (Environmental adaptation): تعديل وتطوير البرنامج ليتكيف ويتوافق مع التغييرات الحاصلة في بيئته التشغيلية، مثل تحديث الأجهزة العتادية أو تثبيت أنظمة تشغيل جديدة.\n3. إضافة وتعديل الوظائف (Functionality addition): تحسين وتوسيع النظام ليستوعب ويواكب التغيرات التنظيمية الجديدة وتحديثات مجال العمل (Business)، وهو عادةً النوع الأكبر والأعلى تكلفة في الصيانة بقرابة 65%." }
        },

        // --- LISTS ---
        { id: "ch6_list1", type: "list", isExpected: true,
          question: { en: "List the three levels of granularity in development testing and their focus.", ar: "اذكر مستويات الدقة والتفصيل الثلاثة (Granularity) في اختبار التطوير وحدد تركيز كل منها." },
          points: [
              { en: "1. Unit testing: Focuses on testing the functionality of individual objects or methods.", ar: "1. اختبار الوحدة (Unit testing): يركز على اختبار وفحص وظائف الكائنات الفردية أو الأساليب والدوال البرمجية (Methods)." },
              { en: "2. Component testing: Focuses on testing component interfaces when several units are integrated.", ar: "2. اختبار المكونات (Component testing): يركز على اختبار واجهات المكونات (Interfaces) والاتصال بينها عند دمج عدة وحدات معاً." },
              { en: "3. System testing: Focuses on testing component interactions when the system is integrated as a whole.", ar: "3. اختبار النظام (System testing): يركز على اختبار التفاعلات والروابط الكلية للمكونات عند تجميع ودمج النظام ككل متكامل." }
          ]
        },
        { id: "ch6_list2", type: "list", isExpected: true,
          question: { en: "Enumerate the three different types of user testing.", ar: "عدد الأنواع الثلاثة المختلفة لاختبار المستخدم (User testing)." },
          points: [
              { en: "1. Alpha testing.", ar: "1. اختبار ألفا (Alpha testing)." },
              { en: "2. Beta testing.", ar: "2. اختبار بيتا (Beta testing)." },
              { en: "3. Acceptance testing.", ar: "3. اختبار القبول النهائي (Acceptance testing)." }
          ]
        },
        { id: "ch6_list3", type: "list", isExpected: true,
          question: { en: "Mention the three different types of software maintenance.", ar: "اذكر الأنواع الثلاثة المختلفة لصيانة البرمجيات (Software maintenance)." },
          points: [
              { en: "1. Fault repairs.", ar: "1. إصلاح الأعطال والعيوب (Fault repairs)." },
              { en: "2. Environmental adaptation.", ar: "2. التكيف البيئي (Environmental adaptation)." },
              { en: "3. Functionality addition or modification.", ar: "3. إضافة الوظائف أو تعديلها (Functionality addition or modification)." }
          ]
        },

        // --- MUST MEMORIZE ---
        { id: "ch6_mem1", type: "memorize", isExpected: false,
          points: [
              { en: "Barry Boehm's V&V Definitions: Validation asks: 'Are we building the right product?' (customer needs). Verification asks: 'Are we building the product, right?' (technical specs).", ar: "تعريفات باري بوهيم لـ V&V: التحقق من الصحة (Validation): 'هل نبني المنتج الصحيح؟' (احتياجات العميل). التحقق (Verification): 'هل نبني المنتج بشكل صحيح؟' (المواصفات الفنية)." },
              { en: "Testing limitations: Testing can only show the presence of errors, not their absence. It cannot prove a program is 100% bug-free.", ar: "حدود الاختبار: يمكن للاختبار فقط إظهار وجود الأخطاء والعيوب، ولا يمكنه إثبات غيابها أو خلو النظام منها تماماً." },
              { en: "Development Testing Levels: Unit (tests individual objects/methods), Component (tests composite interfaces), System (tests global interactions).", ar: "مستويات اختبار التطوير: الوحدة (يفحص الكائنات/الدوال الفردية)، المكونات (يفحص الواجهات المركبة للوحدات المدمجة)، النظام (يفحص التفاعلات الشاملة للنظام كاملاً)." },
              { en: "User Testing Types: Alpha (at developer's site, with development team), Beta (in user's environment, early release), Acceptance (customer decides if ready to deploy).", ar: "أنواع اختبار المستخدم: ألفا (في موقع المطور ومع الفريق)، بيتا (نسخة تجريبية في بيئة المستخدم)، القبول (يقوم به العميل ليقرر جاهزية النظام للنشر)." },
              { en: "Maintenance Distribution (Figure 6.2): Fault Repair consumes 17%, Environmental Adaptation consumes 18%, and Functionality Addition or Modification consumes 65% (Most expensive/effort-consuming).", ar: "توزيع تكاليف الصيانة (الشكل 6.2): إصلاح الأعطال يأخذ 17%، التكيف البيئي يأخذ 18%، وإضافة وتعديل الوظائف يستهلك 65% (النشاط الأكثر تكلفة واستهلاكاً للجهد عالمياً)." }
          ]
        }
    ]
});