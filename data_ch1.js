// بيانات الفصل الأول: Introduction to Software Engineering
window.courseData.chapters.push({
    id: "ch1",
    title: { en: "Chapter 1: Introduction to Software Engineering", ar: "الفصل 1: مقدمة في هندسة البرمجيات" },
    overview: { en: "Basic concepts, products, and software processes.", ar: "المفاهيم الأساسية، المنتجات، وعمليات البرمجيات." },
    content: [
        // --- TRUE / FALSE ---
        { id: "ch1_tf1", type: "tf", isExpected: false, 
          question: { en: "Software engineering is intended to support individual programming rather than professional software development.", ar: "تهدف هندسة البرمجيات إلى دعم البرمجة الفردية بدلاً من تطوير البرمجيات الاحترافي." },
          answer: false, 
          explanation: { en: "Software engineering is specifically designed for professional activities, not for personal or hobbyist development.", ar: "هندسة البرمجيات مصممة خصيصًا للأنشطة الاحترافية، وليس للتطوير الشخصي أو للهواة." },
          correction: { en: "Software engineering is intended to support professional software development, rather than individual programming.", ar: "تهدف هندسة البرمجيات إلى دعم تطوير البرمجيات الاحترافي، بدلاً من البرمجة الفردية." }
        },
        { id: "ch1_tf2", type: "tf", isExpected: false, 
          question: { en: "Software is defined as just the computer programs themselves.", ar: "تُعرّف البرمجيات بأنها مجرد برامج الكمبيوتر نفسها." },
          answer: false, 
          explanation: { en: "It ignores the supplementary data and documents required for the software to run correctly.", ar: "يتجاهل هذا التعريف البيانات والوثائق التكميلية المطلوبة لتشغيل البرنامج بشكل صحيح." },
          correction: { en: "Software is not just the programs themselves but also all associated documentation and configuration data that is required to make these programs operate correctly.", ar: "البرمجيات ليست مجرد البرامج نفسها بل جميع الوثائق وبيانات التكوين المرتبطة بها المطلوبة لجعل هذه البرامج تعمل بشكل صحيح." }
        },
        { id: "ch1_tf3", type: "tf", isExpected: false, 
          question: { en: "Generic products are systems commissioned by a particular customer.", ar: "المنتجات العامة هي أنظمة يتم تكليفها من قبل عميل معين." },
          answer: false, 
          explanation: { en: "Generic products are sold on the open market, whereas customized products are commissioned.", ar: "المنتجات العامة تباع في السوق المفتوحة، بينما المنتجات المخصصة يتم تكليفها." },
          correction: { en: "Generic products are stand-alone systems produced by a development organization and sold on the open market, while customized products are commissioned by a particular customer.", ar: "المنتجات العامة هي أنظمة مستقلة تنتجها منظمة تطوير وتباع في السوق المفتوحة، بينما المنتجات المخصصة يتم تكليفها من قبل عميل معين." }
        },
        { id: "ch1_tf4", type: "tf", isExpected: false, 
          question: { en: "An information system is a system whose primary purpose is to collect data from a set of sensors and process that data in some way.", ar: "نظام المعلومات هو نظام غرضه الأساسي جمع البيانات من مجموعة من المستشعرات ومعالجة تلك البيانات بطريقة ما." },
          answer: false, 
          explanation: { en: "This is the definition of a sensor-based data collection system, not an information system.", ar: "هذا تعريف نظام جمع البيانات القائم على المستشعرات، وليس نظام المعلومات." },
          correction: { en: "An information system is a system whose primary purpose is to manage and provide access to a database of information.", ar: "نظام المعلومات هو نظام غرضه الأساسي إدارة وتوفير الوصول إلى قاعدة بيانات من المعلومات." }
        },
        { id: "ch1_tf5", type: "tf", isExpected: false, 
          question: { en: "An error is a wrong decision or mistake made by a human being during one of the stages of software development.", ar: "الخطأ (Error) هو قرار خاطئ أو زلة يرتكبها إنسان خلال إحدى مراحل تطوير البرمجيات." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch1_tf6", type: "tf", isExpected: false, 
          question: { en: "A fault is the exact same thing as a failure in software terminology.", ar: "الخلل (Fault) هو نفس الشيء تمامًا مثل الفشل (Failure) في مصطلحات البرمجيات." },
          answer: false, 
          explanation: { en: "A fault is the problem itself (the bug), whereas a failure is the event that occurs because of the fault.", ar: "الخلل هو المشكلة نفسها (البق)، بينما الفشل هو الحدث الذي يقع بسبب هذا الخلل." },
          correction: { en: "A fault is a problem that may cause software to depart from its intended behavior, whereas a failure is an event when software actually departs from its intended behavior.", ar: "الخلل هو مشكلة قد تتسبب في انحراف البرنامج عن سلوكه المقصود، بينما الفشل هو حدث عندما ينحرف البرنامج فعليًا عن سلوكه المقصود." }
        },
        { id: "ch1_tf7", type: "tf", isExpected: false, 
          question: { en: "Remedial maintenance is modifying software because the users' needs have changed or the operating system has changed.", ar: "الصيانة العلاجية هي تعديل البرمجيات لأن احتياجات المستخدمين قد تغيرت أو نظام التشغيل قد تغير." },
          answer: false, 
          explanation: { en: "Modifying software due to changing needs or environments is called adaptive maintenance.", ar: "تعديل البرمجيات بسبب تغير الاحتياجات أو البيئات يسمى الصيانة التكيفية." },
          correction: { en: "Remedial maintenance is the time spent correcting faults in the software (fixing bugs).", ar: "الصيانة العلاجية هي الوقت الذي يقضى في تصحيح العيوب في البرمجيات (إصلاح الأخطاء)." }
        },
        { id: "ch1_tf8", type: "tf", isExpected: false, 
          question: { en: "In the software process, validation is where the software is checked to ensure that it is what the customer requires.", ar: "في عملية البرمجيات، التحقق من الصحة (validation) هو فحص البرنامج للتأكد من أنه ما يتطلبه العميل." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch1_tf9", type: "tf", isExpected: false, 
          question: { en: "The goal of the Problem Analysis and Requirement Specification phase is to produce the requirements document (SRS).", ar: "الهدف من مرحلة تحليل المشكلة وتحديد المتطلبات هو إنتاج وثيقة المتطلبات (SRS)." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch1_tf10", type: "tf", isExpected: false, 
          question: { en: "According to software engineering ethics, using technical skills to play games on an employer’s machine is considered a relatively trivial form of computer misuse, but it is still a breach of professional behavior.", ar: "وفقًا لأخلاقيات هندسة البرمجيات، يُعتبر استخدام المهارات التقنية للعب الألعاب على جهاز صاحب العمل شكلاً تافهًا نسبيًا من أشكال إساءة استخدام الكمبيوتر، ولكنه لا يزال خرقًا للسلوك المهني." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        
        // --- MCQ ---
        { id: "ch1_mcq1", type: "mcq", isExpected: false,
          question: { en: "What is the most accurate definition of software?", ar: "ما هو التعريف الأكثر دقة للبرمجيات؟" },
          options: [
              { en: "Only the executable code of a computer program", ar: "فقط الكود القابل للتنفيذ لبرنامج كمبيوتر" },
              { en: "Computer programs and associated documentation", ar: "برامج الكمبيوتر والوثائق المرتبطة بها" },
              { en: "The hardware and operating system platforms", ar: "منصات الأجهزة ونظام التشغيل" },
              { en: "Personal applications developed by hobbyists", ar: "التطبيقات الشخصية التي طورها الهواة" }
          ], correctIndex: 1, explanation: { en: "Software includes both the programs and the documentation required to operate them.", ar: "البرمجيات تشمل كلاً من البرامج والوثائق المطلوبة لتشغيلها." }
        },
        { id: "ch1_mcq2", type: "mcq", isExpected: false,
          question: { en: "Which type of software product is a stand-alone system produced and sold on the open market to any customer?", ar: "أي نوع من منتجات البرمجيات هو نظام مستقل يتم إنتاجه وبيعه في السوق المفتوحة لأي عميل؟" },
          options: [
              { en: "Customized product", ar: "منتج مخصص" },
              { en: "Scientific software", ar: "برمجيات علمية" },
              { en: "Embedded control system", ar: "نظام تحكم مدمج" },
              { en: "Generic product", ar: "منتج عام" }
          ], correctIndex: 3, explanation: { en: "Generic products are developed to be sold openly.", ar: "يتم تطوير المنتجات العامة لتباع علنًا." }
        },
        { id: "ch1_mcq3", type: "mcq", isExpected: false,
          question: { en: "Software that controls a hardware device and is embedded in that device is called:", ar: "البرمجيات التي تتحكم في جهاز الأجهزة وتكون مدمجة في هذا الجهاز تسمى:" },
          options: [
              { en: "An information system", ar: "نظام معلومات" },
              { en: "A generic product", ar: "منتج عام" },
              { en: "An embedded control system", ar: "نظام تحكم مدمج" },
              { en: "A sensor-based data collection system", ar: "نظام جمع بيانات قائم على المستشعرات" }
          ], correctIndex: 2, explanation: { en: "Embedded systems control hardware devices.", ar: "الأنظمة المدمجة تتحكم في أجهزة الهاردوير." }
        },
        { id: "ch1_mcq4", type: "mcq", isExpected: false,
          question: { en: "In software terminology, a problem that may cause software to depart from its intended behavior is known as:", ar: "في مصطلحات البرمجيات، المشكلة التي قد تتسبب في انحراف البرنامج عن سلوكه المقصود تُعرف باسم:" },
          options: [
              { en: "An error", ar: "خطأ (Error)" },
              { en: "A failure", ar: "فشل (Failure)" },
              { en: "A fault", ar: "خلل (Fault/Bug)" },
              { en: "A verification", ar: "تحقق (Verification)" }
          ], correctIndex: 2, explanation: { en: "A fault is the bug inside the system.", ar: "الخلل هو الخطأ البرمجي (bug) داخل النظام." }
        },
        { id: "ch1_mcq5", type: "mcq", isExpected: false,
          question: { en: "The effort put into modifying software because the users' needs have changed or the programming language has changed is called:", ar: "الجهد المبذول في تعديل البرمجيات لأن احتياجات المستخدمين قد تغيرت أو لغة البرمجة قد تغيرت يسمى:" },
          options: [
              { en: "Remedial maintenance", ar: "صيانة علاجية" },
              { en: "Adaptive maintenance", ar: "صيانة تكيفية" },
              { en: "Verification", ar: "تحقق" },
              { en: "System development", ar: "تطوير النظام" }
          ], correctIndex: 1, explanation: { en: "Adapting to new environments or needs is adaptive maintenance.", ar: "التكيف مع بيئات أو احتياجات جديدة هو الصيانة التكيفية." }
        },
        { id: "ch1_mcq6", type: "mcq", isExpected: false,
          question: { en: "Which of the following is NOT an essential attribute of good software?", ar: "أي مما يلي ليس سمة أساسية للبرمجيات الجيدة؟" },
          options: [
              { en: "Maintainability", ar: "قابلية الصيانة" },
              { en: "Dependability and security", ar: "الاعتمادية والأمان" },
              { en: "High cost of production", ar: "تكلفة إنتاج عالية" },
              { en: "Acceptability", ar: "القبول" }
          ], correctIndex: 2, explanation: { en: "High cost is generally an undesirable trait, not an attribute of good software.", ar: "التكلفة العالية عمومًا سمة غير مرغوب فيها، وليست من سمات البرمجيات الجيدة." }
        },
        { id: "ch1_mcq7", type: "mcq", isExpected: false,
          question: { en: "The fundamental software process activity where customers and engineers define the software that is to be produced and its operational constraints is:", ar: "نشاط عملية البرمجيات الأساسي حيث يحدد العملاء والمهندسون البرمجيات التي سيتم إنتاجها وقيود تشغيلها هو:" },
          options: [
              { en: "Software specification", ar: "مواصفات البرمجيات" },
              { en: "Software development", ar: "تطوير البرمجيات" },
              { en: "Software validation", ar: "التحقق من البرمجيات" },
              { en: "Software evolution", ar: "تطور البرمجيات" }
          ], correctIndex: 0, explanation: { en: "Specification defines what the system should do.", ar: "المواصفات تحدد ما يجب أن يفعله النظام." }
        },
        { id: "ch1_mcq8", type: "mcq", isExpected: false,
          question: { en: "Which software development phase aims to translate the design of the system into code in a given programming language?", ar: "أي مرحلة من مراحل تطوير البرمجيات تهدف إلى ترجمة تصميم النظام إلى كود بلغة برمجة معينة؟" },
          options: [
              { en: "Phase 1: Problem Analysis and Requirement Specification", ar: "المرحلة 1: تحليل المشكلة وتحديد المتطلبات" },
              { en: "Phase 2: Solution Design", ar: "المرحلة 2: تصميم الحل" },
              { en: "Phase 3: Coding", ar: "المرحلة 3: الترميز (البرمجة)" },
              { en: "Phase 4: Testing and Integration", ar: "المرحلة 4: الاختبار والتكامل" }
          ], correctIndex: 2, explanation: { en: "Coding is the translation of design to executable code.", ar: "الترميز هو ترجمة التصميم إلى كود قابل للتنفيذ." }
        },
        { id: "ch1_mcq9", type: "mcq", isExpected: false,
          question: { en: "Respecting the local laws governing patents and copyright falls under which software engineering ethics category?", ar: "احترام القوانين المحلية التي تحكم براءات الاختراع وحقوق النشر يندرج تحت أي فئة من أخلاقيات هندسة البرمجيات؟" },
          options: [
              { en: "Confidentiality", ar: "السرية" },
              { en: "Competence", ar: "الكفاءة" },
              { en: "Computer misuse", ar: "إساءة استخدام الكمبيوتر" },
              { en: "Intellectual property rights", ar: "حقوق الملكية الفكرية" }
          ], correctIndex: 3, explanation: { en: "Patents and copyright protect intellectual property.", ar: "براءات الاختراع وحقوق النشر تحمي الملكية الفكرية." }
        },
        { id: "ch1_mcq10", type: "mcq", isExpected: false,
          question: { en: "What is the primary purpose of the MHC-PMS (Mental Health Care-Patient Management System) case study mentioned in the chapter?", ar: "ما هو الغرض الأساسي من دراسة الحالة MHC-PMS (نظام إدارة مرضى الرعاية الصحية النفسية) المذكورة في الفصل؟" },
          options: [
              { en: "To completely replace all medical records systems in the hospital", ar: "استبدال جميع أنظمة السجلات الطبية في المستشفى بالكامل" },
              { en: "To control the hardware devices in a clinical laboratory", ar: "التحكم في أجهزة الهاردوير في مختبر سريري" },
              { en: "To maintain information about patients suffering from mental health problems and their treatments", ar: "الاحتفاظ بمعلومات عن المرضى الذين يعانون من مشاكل الصحة النفسية وعلاجاتهم" },
              { en: "To predict weather forecasting for hospital environments", ar: "التنبؤ بالطقس لبيئات المستشفيات" }
          ], correctIndex: 2, explanation: { en: "It manages data specifically for mental health patients.", ar: "إنه يدير البيانات الخاصة بمرضى الصحة النفسية تحديدًا." }
        },

        // --- DEFINITIONS ---
        { id: "ch1_def1", type: "definition", isExpected: false, term: { en: "Software", ar: "البرمجيات" }, definition: { en: "Computer programs and associated documentation.", ar: "برامج الكمبيوتر والوثائق المرتبطة بها." } },
        { id: "ch1_def2", type: "definition", isExpected: false, term: { en: "Software Engineering", ar: "هندسة البرمجيات" }, definition: { en: "An engineering discipline that is concerned with all aspects of software production from the early stages of system specification through to maintaining the system after it has gone into use.", ar: "فرع هندسي يهتم بجميع جوانب إنتاج البرمجيات من المراحل المبكرة لمواصفات النظام وحتى صيانة النظام بعد دخوله حيز الاستخدام." } },
        { id: "ch1_def3", type: "definition", isExpected: false, term: { en: "Generic Products (System Software)", ar: "المنتجات العامة (برمجيات النظام)" }, definition: { en: "Stand-alone systems that are produced by a development organization and sold on the open market to any customer who is able to buy them.", ar: "أنظمة مستقلة يتم إنتاجها بواسطة منظمة تطوير وتباع في السوق المفتوحة لأي عميل قادر على شرائها." } },
        { id: "ch1_def4", type: "definition", isExpected: false, term: { en: "Customized Products (Application Software)", ar: "المنتجات المخصصة (برمجيات التطبيقات)" }, definition: { en: "Systems that are commissioned by a particular customer and developed specifically for that customer by a software contractor.", ar: "أنظمة يتم تكليفها من قبل عميل معين ويتم تطويرها خصيصًا لذلك العميل بواسطة مقاول برمجيات." } },
        { id: "ch1_def5", type: "definition", isExpected: false, term: { en: "Error", ar: "خطأ (Error)" }, definition: { en: "A wrong decision made by a human being during one of the stages of software development.", ar: "قرار خاطئ يتخذه إنسان خلال إحدى مراحل تطوير البرمجيات." } },
        { id: "ch1_def6", type: "definition", isExpected: false, term: { en: "Fault (Bug)", ar: "خلل (Fault/Bug)" }, definition: { en: "A problem that may cause software to depart from its intended behavior.", ar: "مشكلة قد تتسبب في انحراف البرنامج عن سلوكه المقصود." } },
        { id: "ch1_def7", type: "definition", isExpected: false, term: { en: "Failure", ar: "فشل (Failure)" }, definition: { en: "An event when software departs from its intended behavior.", ar: "حدث عندما ينحرف البرنامج عن سلوكه المقصود." } },
        { id: "ch1_def8", type: "definition", isExpected: false, term: { en: "Verification", ar: "التحقق (Verification)" }, definition: { en: "The job of removing bugs and trying to ensure reliability.", ar: "مهمة إزالة الأخطاء ومحاولة ضمان الموثوقية." } },
        { id: "ch1_def9", type: "definition", isExpected: false, term: { en: "Maintenance", ar: "الصيانة" }, definition: { en: "Any effort that is put into a piece of software after it has been written and put into operation.", ar: "أي جهد يتم بذله في برنامج ما بعد كتابته ووضعه قيد التشغيل." } },
        { id: "ch1_def10", type: "definition", isExpected: false, term: { en: "Software Process", ar: "عملية البرمجيات" }, definition: { en: "A systematic approach used in software engineering consisting of a sequence of activities that leads to the production of a software product.", ar: "نهج منهجي يُستخدم في هندسة البرمجيات يتكون من تسلسل من الأنشطة يؤدي إلى إنتاج منتج برمجي." } },
        
        // --- EXPLAIN ---
        { id: "ch1_exp1", type: "explain", isExpected: true,
          question: { en: "Explain the difference between Generic products and Customized products.", ar: "اشرح الفرق بين المنتجات العامة والمنتجات المخصصة." },
          answer: { en: "Generic products are stand-alone systems produced by an organization and sold on the open market to anyone (e.g., word processors, databases). The organization that develops the software controls its specification. Customized products are commissioned by a specific customer and developed exclusively for them (e.g., air traffic control systems). For customized products, the buying organization usually develops and controls the specification.", ar: "المنتجات العامة هي أنظمة مستقلة تنتجها منظمة وتباع في السوق المفتوحة لأي شخص (مثل معالجات النصوص، قواعد البيانات). المنظمة التي تطور البرنامج تتحكم في مواصفاته. المنتجات المخصصة يتم تكليفها من قبل عميل معين وتطور حصريًا له (مثل أنظمة مراقبة الحركة الجوية). بالنسبة للمنتجات المخصصة، تقوم المنظمة المشترية عادة بتطوير والتحكم في المواصفات." }
        },
        { id: "ch1_exp2", type: "explain", isExpected: true,
          question: { en: "Explain the relationship between an Error, a Fault, and a Failure.", ar: "اشرح العلاقة بين الخطأ (Error) والخلل (Fault) والفشل (Failure)." },
          answer: { en: "An error is a mistake made by a human being during the software development stages. This error causes one or more faults (bugs) within the software code, specification, or documentation. Consequently, a fault can cause one or more failures, which are the actual events where the software departs from its intended behavior during testing or active use.", ar: "الخطأ هو زلة يرتكبها إنسان خلال مراحل تطوير البرمجيات. يتسبب هذا الخطأ في حدوث خلل (bug) أو أكثر داخل كود البرنامج أو المواصفات أو الوثائق. وبالتالي، يمكن أن يتسبب الخلل في حدوث فشل واحد أو أكثر، وهي الأحداث الفعلية التي ينحرف فيها البرنامج عن سلوكه المقصود أثناء الاختبار أو الاستخدام النشط." }
        },
        { id: "ch1_exp3", type: "explain", isExpected: false,
          question: { en: "Explain the 'Software Crisis' and mention its characteristics.", ar: "اشرح 'أزمة البرمجيات' واذكر خصائصها." },
          answer: { en: "The Software Crisis refers to the persistent difficulties and conflicts in reaching software engineering goals. Its main characteristics include software failing to do what users want, being expensive, lacking speed, lacking portability, being expensive to maintain, being unreliable, being delivered late, and being difficult to use.", ar: "تشير أزمة البرمجيات إلى الصعوبات والصراعات المستمرة في الوصول إلى أهداف هندسة البرمجيات. تشمل خصائصها الرئيسية فشل البرامج في القيام بما يريده المستخدمون، كونها باهظة الثمن، تفتقر إلى السرعة، تفتقر إلى قابلية النقل، مكلفة في صيانتها، غير موثوقة، يتم تسليمها في وقت متأخر، وصعبة الاستخدام." }
        },
        { id: "ch1_exp4", type: "explain", isExpected: true,
          question: { en: "Explain the concept of Software Engineering Ethics.", ar: "اشرح مفهوم أخلاقيات هندسة البرمجيات." },
          answer: { en: "Software engineering ethics means that engineers must accept responsibilities wider than just technical skills and behave in an ethical and morally responsible way within a social and legal framework. It includes respecting client confidentiality, not misrepresenting one's level of competence, protecting intellectual property rights, and refraining from computer misuse (such as disseminating viruses or unauthorized access).", ar: "تعني أخلاقيات هندسة البرمجيات أن المهندسين يجب أن يقبلوا مسؤوليات أوسع من مجرد المهارات التقنية ويتصرفوا بطريقة أخلاقية ومسؤولة أخلاقياً ضمن إطار اجتماعي وقانوني. ويشمل ذلك احترام سرية العميل، وعدم تحريف مستوى الكفاءة، وحماية حقوق الملكية الفكرية، والامتناع عن إساءة استخدام الكمبيوتر (مثل نشر الفيروسات أو الوصول غير المصرح به)." }
        },
        
        // --- LISTS ---
        { id: "ch1_list1", type: "list", isExpected: false,
          question: { en: "List the five categories of application software.", ar: "اذكر الفئات الخمس لبرمجيات التطبيقات." },
          points: [
              { en: "1. Embedded control systems.", ar: "1. أنظمة التحكم المدمجة." },
              { en: "2. Information systems.", ar: "2. أنظمة المعلومات." },
              { en: "3. Sensor-based data collection systems.", ar: "3. أنظمة جمع البيانات القائمة على المستشعرات." },
              { en: "4. Scientific software.", ar: "4. البرمجيات العلمية." },
              { en: "5. Games.", ar: "5. الألعاب." }
          ]
        },
        { id: "ch1_list2", type: "list", isExpected: true,
          question: { en: "Mention the Main Objectives of Software Engineering.", ar: "اذكر الأهداف الرئيسية لهندسة البرمجيات." },
          points: [
              { en: "1. Meeting users' needs.", ar: "1. تلبية احتياجات المستخدمين." },
              { en: "2. Low cost of production.", ar: "2. تكلفة إنتاج منخفضة." },
              { en: "3. High performance.", ar: "3. أداء عالي." },
              { en: "4. Portability.", ar: "4. قابلية النقل." },
              { en: "5. Low cost of maintenance.", ar: "5. تكلفة صيانة منخفضة." },
              { en: "6. High reliability.", ar: "6. موثوقية عالية." },
              { en: "7. Delivery on time.", ar: "7. التسليم في الوقت المحدد." }
          ]
        },
        { id: "ch1_list3", type: "list", isExpected: true,
          question: { en: "Enumerate the essential attributes of good software.", ar: "عدد السمات الأساسية للبرمجيات الجيدة." },
          points: [
              { en: "1. Maintainability.", ar: "1. قابلية الصيانة." },
              { en: "2. Dependability and security.", ar: "2. الاعتمادية والأمان." },
              { en: "3. Efficiency.", ar: "3. الكفاءة." },
              { en: "4. Acceptability.", ar: "4. القبول." }
          ]
        },
        { id: "ch1_list4", type: "list", isExpected: true,
          question: { en: "State the four fundamental activities that are common to all software processes.", ar: "اذكر الأنشطة الأساسية الأربعة المشتركة في جميع عمليات البرمجيات." },
          points: [
              { en: "1. Software specification.", ar: "1. مواصفات البرمجيات." },
              { en: "2. Software development.", ar: "2. تطوير البرمجيات." },
              { en: "3. Software validation.", ar: "3. التحقق من البرمجيات." },
              { en: "4. Software evolution.", ar: "4. تطور البرمجيات." }
          ]
        },
        { id: "ch1_list5", type: "list", isExpected: true,
          question: { en: "List the four phases of software development activities and briefly state their goals.", ar: "اذكر المراحل الأربع لأنشطة تطوير البرمجيات واذكر أهدافها باختصار." },
          points: [
              { en: "1. Phase 1: Problem Analysis and Requirement Specification: To understand the problem and produce the software requirement specification (SRS) document.", ar: "1. المرحلة 1: تحليل المشكلة وتحديد المتطلبات: لفهم المشكلة وإنتاج وثيقة مواصفات متطلبات البرنامج (SRS)." },
              { en: "2. Phase 2: Solution Design: To plan a solution from the SRS and produce the design document.", ar: "2. المرحلة 2: تصميم الحل: لتخطيط حل من SRS وإنتاج وثيقة التصميم." },
              { en: "3. Phase 3: Coding: To translate the system design into code in a programming language.", ar: "3. المرحلة 3: الترميز: لترجمة تصميم النظام إلى كود بلغة برمجة." },
              { en: "4. Phase 4: Testing and Integration: To discover requirement, design, and coding errors through different levels of testing.", ar: "4. المرحلة 4: الاختبار والتكامل: لاكتشاف أخطاء المتطلبات والتصميم والترميز من خلال مستويات مختلفة من الاختبار." }
          ]
        },
        { id: "ch1_list6", type: "list", isExpected: false,
          question: { en: "Mention the key features of the MHC-PMS (Mental Health Care-Patient Management System).", ar: "اذكر الميزات الرئيسية لنظام MHC-PMS." },
          points: [
              { en: "1. Individual care management.", ar: "1. إدارة الرعاية الفردية." },
              { en: "2. Patient monitoring.", ar: "2. مراقبة المريض." },
              { en: "3. Administrative reporting.", ar: "3. التقارير الإدارية." }
          ]
        },
        
        // --- MUST MEMORIZE ---
        { id: "ch1_mem1", type: "memorize", isExpected: false,
          points: [
              { en: "Software Definition: Computer programs and associated documentation.", ar: "تعريف البرمجيات: برامج الكمبيوتر والوثائق المرتبطة بها." },
              { en: "SE Definition: An engineering discipline concerned with all aspects of software production.", ar: "تعريف هندسة البرمجيات: فرع هندسي يهتم بجميع جوانب إنتاج البرمجيات." },
              { en: "Product Types: Generic (open market, developer controls spec) vs. Customized (specific customer, customer controls spec).", ar: "أنواع المنتجات: عامة (سوق مفتوحة، المطور يتحكم بالمواصفات) مقابل مخصصة (عميل معين، العميل يتحكم بالمواصفات)." },
              { en: "Terminology: Error: Human mistake. Fault (Bug): Problem inside the software. Failure: Event where software behaves incorrectly.", ar: "المصطلحات: الخطأ: زلة بشرية. الخلل: مشكلة داخل البرنامج. الفشل: حدث يتصرف فيه البرنامج بشكل غير صحيح." },
              { en: "Maintenance Types: Remedial: Fixing bugs/faults. Adaptive: Modifying due to changed needs or environments.", ar: "أنواع الصيانة: علاجية: إصلاح الأخطاء/العيوب. تكيفية: تعديل بسبب تغير الاحتياجات أو البيئات." },
              { en: "Essential Attributes (4): Maintainability, Dependability/Security, Efficiency, Acceptability.", ar: "السمات الأساسية (4): قابلية الصيانة، الاعتمادية/الأمان، الكفاءة، القبول." },
              { en: "Fundamental Activities (4): Specification, Development, Validation, Evolution.", ar: "الأنشطة الأساسية (4): المواصفات، التطوير، التحقق، التطور." },
              { en: "Development Phases (4): 1. Problem Analysis & Requirement Specification (Outputs: SRS). 2. Solution Design (Outputs: Design document). 3. Coding. 4. Testing & Integration.", ar: "مراحل التطوير (4): 1. تحليل المشكلة وتحديد المتطلبات. 2. تصميم الحل. 3. الترميز. 4. الاختبار والتكامل." },
              { en: "Ethics (4 Principles): Confidentiality, Competence, Intellectual property rights, Computer misuse.", ar: "الأخلاقيات (4 مبادئ): السرية، الكفاءة، حقوق الملكية الفكرية، إساءة استخدام الكمبيوتر." }
          ]
        }
    ]
});