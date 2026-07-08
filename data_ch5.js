// بيانات الفصل الخامس: Design and Implementation
window.courseData.chapters.push({
    id: "ch5",
    title: { en: "Chapter 5: Design and Implementation", ar: "الفصل 5: التصميم والتنفيذ" },
    overview: { en: "Software design processes, object-oriented design using UML models, and critical implementation issues.", ar: "عمليات تصميم البرمجيات، التصميم كائني التوجه باستخدام نماذج UML، وقضايا التنفيذ الحاسمة." },
    content: [
        // --- TRUE / FALSE ---
        { id: "ch5_tf1", type: "tf", isExpected: false, 
          question: { en: "For all software systems, regardless of their size, software design and implementation are the only software engineering processes involved.", ar: "بالنسبة لجميع أنظمة البرمجيات، بغض النظر عن حجمها، فإن تصميم البرمجيات وتنفيذها هما العمليتان الوحيدتان المعنيتان بهندسة البرمجيات." },
          answer: false, 
          explanation: { en: "This is only true for some simple systems. For large systems, software design and implementation are only one part of a broader set of processes that include requirements engineering, verification, and validation.", ar: "هذا صحيح فقط بالنسبة لبعض الأنظمة البسيطة. أما بالنسبة للأنظمة الكبيرة، فإن تصميم البرمجيات وتنفيذها ليس سوى جزء واحد من مجموعة أوسع من العمليات التي تشمل هندسة المتطلبات، والتحقق، والتحقق من الصحة." },
          correction: { en: "For some simple systems, software design and implementation are software engineering, but for large systems, they are only one of a set of processes involved in software engineering.", ar: "بالنسبة لبعض الأنظمة البسيطة، يكون تصميم البرمجيات وتنفيذها هما هندسة البرمجيات بأكملها، ولكن بالنسبة للأنظمة الكبيرة، فهما مجرد عملية واحدة من مجموعة عمليات تشتمل عليها هندسة البرمجيات." }
        },
        { id: "ch5_tf2", type: "tf", isExpected: false, 
          question: { en: "Software design and implementation activities are typically sequential and are never interleaved.", ar: "أنشطة تصميم البرمجيات وتنفيذها تكون عادة متتالية (متسلسلة) ولا تتداخل أبداً فيما بينها." },
          answer: false, 
          explanation: { en: "The design and implementation stages overlap and feed back into each other constantly.", ar: "مراحل التصميم والتنفيذ تتداخل وتغذي بعضها البعض بشكل مستمر طوال فترة التطوير." },
          correction: { en: "Software design and implementation activities are invariably interleaved, with constant backtracking to correct earlier designs.", ar: "أنشطة تصميم البرمجيات وتنفيذها متداخلة دائماً وثابتة التداخل (interleaved)، مع تراجع مستمر للخلف لتصحيح التصميمات السابقة." }
        },
        { id: "ch5_tf3", type: "tf", isExpected: false, 
          question: { en: "A precise and unambiguous interface specification allows a component to be used without other components needing to know how it is implemented.", ar: "تسمح مواصفات الواجهة الدقيقة وغير الغامضة باستخدام المكون دون حاجة المكونات الأخرى لمعرفة كيفية تنفيذه داخلياً." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch5_tf4", type: "tf", isExpected: false, 
          question: { en: "The primary aim of configuration management is to ensure that everyone can access the most up-to-date versions of software components and to coordinate team changes.", ar: "الهدف الأساسي لإدارة التكوين هو ضمان إمكانية وصول الجميع إلى أحدث الإصدارات من مكونات البرمجيات وتنسيق التغييرات التي يجريها الفريق." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch5_tf5", type: "tf", isExpected: false, 
          question: { en: "In Host-target development, production software usually executes on the exact same computer used for its development.", ar: "في بيئة تطوير المضيف والهدف (Host-target)، فإن برمجيات الإنتاج النهائية تعمل عادةً على نفس الكمبيوتر المستخدم لتطويرها تماماً." },
          answer: false, 
          explanation: { en: "The development computer is different from the execution computer.", ar: "الكمبيوتر المستخدم في التطوير يختلف عن الكمبيوتر المخصص لتشغيل النظام الفعلي." },
          correction: { en: "Production software does not usually execute on the same computer as the software development environment; it is developed on a host system and executed on a separate target system.", ar: "البرمجيات النهائية لا تعمل عادةً على نفس جهاز بيئة تطوير البرمجيات؛ بل يتم تطويرها على نظام مضيف (host system) وتشغيلها وتنفيذها على نظام هدف منفصل (target system)." }
        },
        { id: "ch5_tf6", type: "tf", isExpected: false, 
          question: { en: "A context model is used to describe the dynamic behavior of an executing system.", ar: "يُستخدم نموذج السياق (Context model) لوصف السلوك الديناميكي للنظام أثناء التشغيل والتنفيذ." },
          answer: false, 
          explanation: { en: "Behavioral models describe dynamic behavior, while context models show how the system relates to its environment.", ar: "النماذج السلوكية هي التي تصف السلوك الديناميكي، بينما تظهر نماذج السياق كيفية ارتباط النظام ببيئته المحيطة." },
          correction: { en: "A context model shows how a system being modeled is positioned in an environment with other systems and processes, while a behavioral model describes the dynamic behavior of an executing system.", ar: "يظهر نموذج السياق كيفية وضع وتحديد موقع النظام المراد نمذجته في بيئة تحتوي على أنظمة وعمليات أخرى، بينما يصف النموذج السلوكي السلوك الديناميكي للنظام أثناء التنفيذ." }
        },
        { id: "ch5_tf7", type: "tf", isExpected: false, 
          question: { en: "Use cases describe interactions between a system and external actors.", ar: "تصف حالات الاستخدام (Use cases) التفاعلات والاتصالات التي تتم بين النظام والجهات الفاعلة الخارجية (external actors)." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },

        // --- MCQ ---
        { id: "ch5_mcq1", type: "mcq", isExpected: false,
          question: { en: "The process of realizing a software design as a program is called:", ar: "عملية تحويل وتجسيد تصميم البرمجيات إلى برنامج فعلي تُسمى:" },
          options: [
              { en: "A) Requirements Engineering", ar: "A) هندسة المتطلبات" },
              { en: "B) Architectural Design", ar: "B) التصميم المعماري" },
              { en: "C) Implementation", ar: "C) التنفيذ (Implementation)" },
              { en: "D) Validation", ar: "D) التحقق من الصحة" }
          ], correctIndex: 2, explanation: { en: "Implementation is the phase where code is written to materialize the designs.", ar: "التنفيذ هو المرحلة التي يتم فيها كتابة الكود البرمجي لتحويل التصاميم إلى نظام حقيقي." }
        },
        { id: "ch5_mcq2", type: "mcq", isExpected: true,
          question: { en: "Which design activity involves identifying the overall structure of the system, its principal sub-systems, and how they are distributed?", ar: "أي نشاط تصميم يتضمن تحديد الهيكل الإجمالي العام للنظام، والأنظمة الفرعية الرئيسية له، وكيفية توزيعها؟" },
          options: [
              { en: "A) Interface design", ar: "A) تصميم الواجهات" },
              { en: "B) Architectural design", ar: "B) التصميم المعماري (Architectural design)" },
              { en: "C) Database design", ar: "C) تصميم قواعد البيانات" },
              { en: "D) Component design", ar: "D) تصميم المكونات" }
          ], correctIndex: 1, explanation: { en: "Architectural design defines the high-level infrastructure and major components.", ar: "يحدد التصميم المعماري البنية التحتية والمكونات الرئيسية عالية المستوى للنظام." }
        },
        { id: "ch5_mcq3", type: "mcq", isExpected: true,
          question: { en: "According to the general model of the design process, which of the following is an INPUT to the design process?", ar: "وفقاً للنموذج العام لعملية التصميم، أي مما يلي يُعتبر مُدخلاً (INPUT) لعملية التصميم؟" },
          options: [
              { en: "A) System Architecture", ar: "A) بنية النظام" },
              { en: "B) Component Specification", ar: "B) مواصفات المكونات" },
              { en: "C) Platform Information", ar: "C) معلومات المنصة (Platform Information)" },
              { en: "D) Interface Specification", ar: "D) مواصفات الواجهات" }
          ], correctIndex: 2, explanation: { en: "Platform information, along with SRS and data description, are structural inputs to design.", ar: "معلومات المنصة، إلى جانب وثيقة SRS ووصف البيانات، تعد مدخلات هيكلية للتصميم." }
        },
        { id: "ch5_mcq4", type: "mcq", isExpected: true,
          question: { en: "Which of the following is NOT considered one of the three main implementation issues highlighted in the chapter?", ar: "أي مما يلي لا يُعتبر واحداً من قضايا التنفيذ الثلاث الرئيسية التي تم تسليط الضوء عليها في هذا الفصل؟" },
          options: [
              { en: "A) Reuse", ar: "A) إعادة الاستخدام" },
              { en: "B) Configuration management", ar: "B) إدارة التكوين" },
              { en: "C) Database normalization", ar: "C) تسوية قاعدة البيانات (Database normalization)" },
              { en: "D) Host-target development", ar: "D) تطوير المضيف والهدف" }
          ], correctIndex: 2, explanation: { en: "The three critical implementation issues are Reuse, Configuration Management, and Host-Target Development.", ar: "قضايا التنفيذ الثلاثة الحاسمة هي إعادة الاستخدام، وإدارة التكوين، وتطوير المضيف والهدف." }
        },
        { id: "ch5_mcq5", type: "mcq", isExpected: false,
          question: { en: "In software implementation, managing a changing software system to prevent developers from overwriting each other's work is known as:", ar: "في تنفيذ البرمجيات، تُعرف إدارة النظام البرمجي المتغير لمنع المطورين من الكتابة فوق عمل بعضهم البعض باسم:" },
          options: [
              { en: "A) Host-target development", ar: "A) تطوير المضيف والهدف" },
              { en: "B) Component design", ar: "B) تصميم المكونات" },
              { en: "C) Activity modeling", ar: "C) نمذجة الأنشطة" },
              { en: "D) Configuration management", ar: "D) إدارة التكوين (Configuration management)" }
          ], correctIndex: 3, explanation: { en: "Configuration management coordinates changes and tracks versions among team members.", ar: "تنسق إدارة التكوين التغييرات وتتتبع الإصدارات المختلفة بين أعضاء الفريق وضمن عملية التكامل." }
        },
        { id: "ch5_mcq6", type: "mcq", isExpected: true,
          question: { en: "What type of UML diagrams are specifically used to document decisions on how software components are distributed across hardware platforms?", ar: "ما هو نوع مخططات UML المستخدمة خصيصاً لتوثيق القرارات المتعلقة بكيفية توزيع مكونات البرمجيات عبر المنصات العتادية (Hardware)؟" },
          options: [
              { en: "A) Use case diagrams", ar: "A) مخططات حالة الاستخدام" },
              { en: "B) Deployment diagrams", ar: "B) مخططات النشر (Deployment diagrams)" },
              { en: "C) Class diagrams", ar: "C) مخططات الفئات" },
              { en: "D) Sequence diagrams", ar: "D) مخططات التسلسل" }
          ], correctIndex: 1, explanation: { en: "Deployment diagrams show the physical allocation of software items to hardware nodes.", ar: "تظهر مخططات النشر التوزيع المادي لعناصر البرمجيات على العقد والأجهزة العتادية." }
        },
        { id: "ch5_mcq7", type: "mcq", isExpected: false,
          question: { en: "Which structural model is used to define the static structure of a system and the associations between its parts?", ar: "أي نموذج هيكلي يُستخدم لتحديد الهيكل الثابت والمستقر (الاستاتيكي) للنظام والارتباطات بين أجزائه؟" },
          options: [
              { en: "A) Class diagrams", ar: "A) مخططات الفئات (Class diagrams)" },
              { en: "B) Activity diagrams", ar: "B) مخططات الأنشطة" },
              { en: "C) Sequence diagrams", ar: "C) مخططات التسلسل" },
              { en: "D) Context models", ar: "D) نماذج السياق" }
          ], correctIndex: 0, explanation: { en: "Class diagrams represent the static object-oriented structure of a system.", ar: "تمثل مخططات الفئات الهيكل الاستاتيكي الثابت كائني التوجه للنظام والعلاقات بين الفئات." }
        },
        { id: "ch5_mcq8", type: "mcq", isExpected: false,
          question: { en: "The software platform, which acts as the environment where the software will execute, includes:", ar: "تتضمن منصة البرمجيات (Software platform)، والتي تعمل كبيئة يتم فيها تنفيذ وتشغيل البرامج، ما يلي:" },
          options: [
              { en: "A) Only the hardware", ar: "A) الأجهزة العتادية فقط" },
              { en: "B) Only the interactive development environment", ar: "B) بيئة التطوير التفاعلية فقط" },
              { en: "C) The hardware, installed operating system, and supporting software like databases", ar: "C) الأجهزة، نظام التشغيل المثبت، والبرمجيات الداعمة مثل أنظمة قواعد البيانات" },
              { en: "D) The sequence and activity diagrams", ar: "D) مخططات التسلسل والأنشطة" }
          ], correctIndex: 2, explanation: { en: "A platform comprises everything required natively to execute the application code.", ar: "تتكون المنصة من كل ما هو مطلوب محلياً لتشغيل وتنفيذ الكود التطبيقي (عتاد + نظام تشغيل + برمجيات مساعدة)." }
        },

        // --- DEFINITIONS ---
        { id: "ch5_def1", type: "definition", isExpected: false, term: { en: "Software Design", ar: "تصميم البرمجيات" }, definition: { en: "A description of the structure of the software to be implemented, the data models and structures used by the system, the interfaces between system components, and sometimes the algorithms used.", ar: "وصف لهيكل البرمجيات المراد تنفيذها، ونماذج البيانات والهياكل المستخدمة في النظام، والواجهات بين مكونات النظام، وفي بعض الأحيان الخوارزميات المستخدمة." } },
        { id: "ch5_def2", type: "definition", isExpected: false, term: { en: "Implementation", ar: "التنفيذ (Implementation)" }, definition: { en: "The process of converting a system specification into an executable system by realizing the design as a program.", ar: "عملية تحويل مواصفات النظام إلى نظام قابل للتنفيذ عن طريق تجسيد وصياغة التصميم كبرنامج كمبيوتر." } },
        { id: "ch5_def3", type: "definition", isExpected: false, term: { en: "Configuration Management", ar: "إدارة التكوين" }, definition: { en: "The general process of managing a changing software system to support the system integration process, coordinate team changes, and track versions.", ar: "العملية العامة لإدارة النظام البرمجي المتغير لدعم عملية تكامل النظام، وتنسيق التغييرات التي يجريها الفريق، وتتبع الإصدارات المختلفة." } },
        { id: "ch5_def4", type: "definition", isExpected: false, term: { en: "Software Platform", ar: "منصة البرمجيات" }, definition: { en: "The environment in which the software will execute, which includes the hardware, the installed operating system, and other supporting software (like a database management system).", ar: "البيئة التي سيتم تنفيذ وتشغيل البرنامج فيها، وتشتمل على الأجهزة العتادية، ونظام التشغيل المثبت، والبرمجيات الداعمة الأخرى (مثل نظام إدارة قواعد البيانات)." } },
        { id: "ch5_def5", type: "definition", isExpected: false, term: { en: "Host-Target Development", ar: "تطوير المضيف والهدف" }, definition: { en: "A development model where software is developed on one computer (the host system) and executed on a separate computer (the target system).", ar: "نموذج تطوير يتم فيه تطوير البرمجيات وبنائها على جهاز كمبيوتر معين (النظام المضيف) وتشغيلها وتنفيذها على جهاز كمبيوتر منفصل آخر (النظام الهدف)." } },
        { id: "ch5_def6", type: "definition", isExpected: false, term: { en: "Model", ar: "النموذج (Model)" }, definition: { en: "An abstract view of a system that ignores some system details to show the system’s context, interactions, structure, or behavior.", ar: "رؤية تجريدية للنظام تتجاهل بعض تفاصيل النظام الداخلية لإظهار سياق النظام، أو تفاعلاته، أو هيكله، أو سلوكه الخارجي." } },

        // --- EXPLAIN ---
        { id: "ch5_exp1", type: "explain", isExpected: true,
          question: { en: "Explain the four main activities that are part of the design process for information systems.", ar: "اشرح الأنشطة الأربعة الرئيسية التي تشكل جزءاً من عملية تصميم أنظمة المعلومات." },
          answer: { en: "1. Architectural design: Identifying the overall structure of the system, its principal components (modules), their relationships, and how they are distributed.\n2. Interface design: Defining unambiguous interfaces between system components so they can be developed concurrently and used without knowing their internal implementation.\n3. Component design: Designing how each specific system component will operate, which may range from a simple functional statement to a detailed design model.\n4. Database design: Designing the system's data structures and deciding how they will be represented in a new or existing database.", ar: "1. التصميم المعماري (Architectural design): تحديد الهيكل الإجمالي العام للنظام، ومكوناته الأساسية (الوحدات البرمجية)، والعلاقات والروابط فيما بينها، وكيفية توزيعها.\n2. تصميم الواجهات (Interface design): تحديد واجهات دقيقة وغير غامضة بين مكونات النظام المختلفة بحيث يمكن تطويرها بالتوازي واستخدامها دون الحاجة لمعرفة تفاصيل تنفيذها الداخلية.\n3. تصميم المكونات (Component design): تصميم كيفية عمل كل مكون محدد من مكونات النظام، والذي قد يتراوح من مجرد عبارة وظيفية بسيطة إلى نموذج تصميمي تفصيلي معقد.\n4. تصميم قاعدة البيانات (Database design): تصميم هياكل وبنى البيانات الخاصة بالنظام وتحديد كيفية تمثيلها وصياغتها في قاعدة بيانات جديدة أو قائمة بالفعل." }
        },
        { id: "ch5_exp2", type: "explain", isExpected: true,
          question: { en: "Explain the importance of Configuration Management during the software implementation phase.", ar: "اشرح أهمية إدارة التكوين (Configuration Management) أثناء مرحلة تنفيذ البرمجيات." },
          answer: { en: "In software development, change happens constantly. Configuration management is essential when a team is developing software to ensure developers do not interfere with or overwrite each other's work. It ensures everyone can access the most up-to-date versions of components to avoid redoing work. Furthermore, if a new version fails, it allows the team to roll back to a previously working version of the system.", ar: "في تطوير البرمجيات، يحدث التغيير باستمرار وبشكل متكرر. تُعد إدارة التكوين أمراً ضرورياً وحيوياً عندما يعمل فريق على تطوير البرمجيات لضمان عدم تداخل المطورين أو قيامهم بالكتابة فوق عمل بعضهم البعض عن طريق الخطأ. إنها تضمن إمكانية وصول الجميع إلى أحدث الإصدارات من المكونات لتجنب إعادة تكرار العمل المبذول سابقاً. علاوة على ذلك، في حالة فشل إصدار جديد أو ظهور مشاكل خطيرة فيه، فإنها تتيح للفريق إمكانية التراجع والعودة (Roll back) إلى إصدار سابق كان يعمل بشكل سليم ومستقر في النظام." }
        },
        { id: "ch5_exp3", type: "explain", isExpected: true,
          question: { en: "Explain the difference between Context models, Structural models, and Behavioral models.", ar: "اشرح الفرق بين نماذج السياق (Context models)، والنماذج الهيكلية (Structural models)، والنماذج السلوكية (Behavioral models)." },
          answer: { en: "- Context models define the boundaries of the system by showing how it is positioned in an environment with other external systems and processes.\n- Structural models show the organization and architecture of a system, such as using class diagrams to define the static structure of classes.\n- Behavioral models describe the dynamic behavior of an executing system, either from the perspective of data processing or events that stimulate responses.", ar: "- نماذج السياق (Context models): تحدد وتبرز حدود ونطاق النظام من خلال إظهار كيفية تموضعه وتواجده في بيئة محيطة تحتوي على أنظمة وعمليات خارجية أخرى ترتبط به.\n- النماذج الهيكلية (Structural models): تعرض التنظيم الداخلي والبنوي وبنية النظام، مثل استخدام مخططات الفئات (class diagrams) لتحديد الهيكل الاستاتيكي الثابت للفئات والعلاقات بينها.\n- النماذج السلوكية (Behavioral models): تصف وتشرح السلوك الديناميكي التفاعلي للنظام أثناء تشغيله وتنفيذه، سواء كان ذلك من منظور معالجة وتدفق البيانات أو من منظور الأحداث والمثيرات (Events) التي تحفز استجابات النظام." }
        },

        // --- LISTS ---
        { id: "ch5_list1", type: "list", isExpected: true,
          question: { en: "List the main inputs to the design process.", ar: "اذكر المدخلات الرئيسية (Inputs) لعملية التصميم." },
          points: [
              { en: "1. Platform Information.", ar: "1. معلومات المنصة (Platform Information)." },
              { en: "2. Requirements Specification.", ar: "2. مواصفات المتطلبات (Requirements Specification / SRS)." },
              { en: "3. Data Description.", ar: "3. وصف البيانات وصياغتها (Data Description)." }
          ]
        },
        { id: "ch5_list2", type: "list", isExpected: true,
          question: { en: "List the main outputs produced from the design process.", ar: "اذكر المخرجات الرئيسية (Outputs) الناتجة عن عملية التصميم." },
          points: [
              { en: "1. System Architecture.", ar: "1. بنية وهيكلية النظام العامة (System Architecture)." },
              { en: "2. Database Specification.", ar: "2. مواصفات ومخططات قاعدة البيانات (Database Specification)." },
              { en: "3. Interface Specification.", ar: "3. مواصفات تفصيلية للواجهات (Interface Specification)." },
              { en: "4. Component Specification.", ar: "4. مواصفات وتفاصيل عمل المكونات (Component Specification)." }
          ]
        },
        { id: "ch5_list3", type: "list", isExpected: true,
          question: { en: "Enumerate the three critical aspects of implementation issues that are particularly important to software engineering.", ar: "عدد الجوانب الثلاثة الحاسمة لقضايا ومواضيع التنفيذ والتي تحظى بأهمية بالغة خاصة في هندسة البرمجيات." },
          points: [
              { en: "1. Reuse.", ar: "1. إعادة استخدام البرمجيات (Reuse)." },
              { en: "2. Configuration management.", ar: "2. إدارة التكوين ضبط المتغيرات (Configuration management)." },
              { en: "3. Host-target development.", ar: "3. بيئة تطوير المضيف والهدف (Host-target development)." }
          ]
        },
        { id: "ch5_list4", type: "list", isExpected: false,
          question: { en: "Mention the different types of system models used to document an object-oriented design.", ar: "اذكر الأنواع المختلفة لنماذج النظام المستخدمة لتوثيق وتوضيح التصميم كائني التوجه (Object-Oriented Design)." },
          points: [
              { en: "1. Context models.", ar: "1. نماذج السياق والحدود المحيطة (Context models)." },
              { en: "2. Use case diagrams.", ar: "2. مخططات حالات الاستخدام والتفاعلات الخارجية (Use case diagrams)." },
              { en: "3. Sequence diagrams.", ar: "3. مخططات التسلسل لتفاعلات الكائنات (Sequence diagrams)." },
              { en: "4. Structural models (Class diagrams).", ar: "4. النماذج الهيكلية الاستاتيكية مثل مخططات الفئات (Class diagrams)." },
              { en: "5. Behavioral models.", ar: "5. النماذج السلوكية الديناميكية للنظام (Behavioral models)." },
              { en: "6. Activity diagrams.", ar: "6. مخططات الأنشطة وخطوات العمليات وتدفق البيانات (Activity diagrams)." }
          ]
        },

        // --- MUST MEMORIZE ---
        { id: "ch5_mem1", type: "memorize", isExpected: false,
          points: [
              { en: "Design Activities (4): Architectural design, Interface design, Component design, Database design.", ar: "أنشطة التصميم الـ4 الأساسية: التصميم المعماري، تصميم الواجهات، تصميم المكونات، وتصميم قواعد البيانات." },
              { en: "Design Inputs: Platform Information, Requirements Specification, Data Description.", ar: "مدخلات التصميم: معلومات المنصة، وثيقة مواصفات المتطلبات، ووصف وتوصيف البيانات المستعملة." },
              { en: "Design Outputs: System Architecture, Database Specification, Interface Specification, Component Specification.", ar: "مخرجات التصميم: بنية النظام، مواصفات قواعد البيانات، مواصفات الواجهات بين المكونات، ومواصفات المكونات الفردية." },
              { en: "Implementation Issues (3): Reuse, Configuration management, Host-target development.", ar: "قضايا ومواضيع التنفيذ الـ3 المهمة: إعادة الاستخدام، إدارة التكوين، وتطوير المضيف والهدف المتباعدين." },
              { en: "Platform Definition: Hardware + Operating System + Supporting Software (e.g. DBMS).", ar: "تعريف المنصة البرمجية: العتاد المادي (Hardware) + نظام التشغيل المثبت + البرمجيات المساعدة والداعمة كأنظمة قواعد البيانات." },
              { en: "UML Models & Diagrams: Deployment diagrams (Hardware and software distribution), Context models (System boundaries and external environment), Use cases (System + external actors interactions), Sequence diagrams (Interactions between system objects), Class diagrams (Static structure and associations), Activity diagrams (Processing of data where each activity = process step), Behavioral models (Dynamic behavior of executing system).", ar: "نماذج ومخططات لغة UML: مخططات النشر (توزيع الأجهزة والبرمجيات)، نماذج السياق (حدود النظام والبيئة الخارجية)، حالات الاستخدام (تفاعلات النظام والجهات الفاعلة)، مخططات التسلسل (التفاعل الزمني بين كائنات النظام)، مخططات الفئات (الهيكل الثابت والارتباطات الهيكلية)، مخططات الأنشطة (معالجة البيانات حيث يمثل كل نشاط خطوة عملية)، والنماذج السلوكية (السلوك الديناميكي للنظام النشط)." }
          ]
        }
    ]
});