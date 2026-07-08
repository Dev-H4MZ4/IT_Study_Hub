// بيانات الفصل الثالث: Requirements Engineering
window.courseData.chapters.push({
    id: "ch3",
    title: { en: "Chapter 3: Requirements Engineering", ar: "الفصل 3: هندسة المتطلبات" },
    overview: { en: "User requirements, System requirements, and Requirements Engineering processes.", ar: "متطلبات المستخدم، متطلبات النظام، وعمليات هندسة المتطلبات." },
    content: [
        // --- TRUE / FALSE ---
        { id: "ch3_tf1", type: "tf", isExpected: false, 
          question: { en: "The process of finding out, analyzing, documenting, and checking system services and constraints is called requirements engineering.", ar: "إن عملية اكتشاف وتحليل وتوثيق والتحقق من خدمات النظام وقيوده تسمى هندسة المتطلبات." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch3_tf2", type: "tf", isExpected: false, 
          question: { en: "User requirements are detailed descriptions of the software system’s functions and are typically used as a contract between the buyer and developers.", ar: "متطلبات المستخدم هي أوصاف تفصيلية لوظائف نظام البرمجيات وتُستخدم عادةً كعقد بين المشتري والمطورين." },
          answer: false, 
          explanation: { en: "This statement describes system requirements, not user requirements.", ar: "هذه العبارة تصف متطلبات النظام، وليس متطلبات المستخدم." },
          correction: { en: "System requirements are detailed descriptions of the software system's functions and operational constraints (functional specification), whereas user requirements are abstract statements in natural language plus diagrams.", ar: "متطلبات النظام هي أوصاف تفصيلية لوظائف نظام البرمجيات وقيوده التشغيلية (المواصفات الوظيفية)، في حين أن متطلبات المستخدم هي عبارات مجردة بلغة طبيعية بالإضافة إلى رسوم بيانية." }
        },
        { id: "ch3_tf3", type: "tf", isExpected: false, 
          question: { en: "System requirements are meant to provide highly specific information about the services and functions of the system that is to be implemented.", ar: "المقصود من متطلبات النظام هو توفير معلومات محددة للغاية حول خدمات ووظائف النظام الذي سيتم تنفيذه." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch3_tf4", type: "tf", isExpected: false, 
          question: { en: "In functional requirements specification, completeness means that the requirements should not have contradictory definitions.", ar: "في مواصفات المتطلبات الوظيفية، يعني الاكتمال ألا تحتوي المتطلبات على تعريفات متناقضة." },
          answer: false, 
          explanation: { en: "The lack of contradictory definitions is the definition of consistency, not completeness.", ar: "عدم وجود تعريفات متناقضة هو تعريف الاتساق (Consistency)، وليس الاكتمال (Completeness)." },
          correction: { en: "Completeness means that all services required by the user should be defined, while consistency means that requirements should not have contradictory definitions.", ar: "الاكتمال يعني أن جميع الخدمات التي يحتاجها المستخدم يجب أن تكون مُعرفة، بينما الاتساق يعني ألا تحتوي المتطلبات على تعريفات متناقضة." }
        },
        { id: "ch3_tf5", type: "tf", isExpected: false, 
          question: { en: "A feasibility study should be a relatively cheap and quick process to decide whether or not to go ahead with a more detailed analysis.", ar: "يجب أن تكون دراسة الجدوى عملية رخيصة وسريعة نسبياً لاتخاذ قرار بشأن المضي قدماً في تحليل أكثر تفصيلاً أم لا." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch3_tf6", type: "tf", isExpected: false, 
          question: { en: "The four main activities in the requirements engineering process are carried out in a strict, unchangeable sequence.", ar: "الأنشطة الأربعة الرئيسية في عملية هندسة المتطلبات يتم تنفيذها في تسلسل صارم وغير قابل للتغيير." },
          answer: false, 
          explanation: { en: "The activities are not performed strictly one after the other; they overlap as new requirements come to light.", ar: "لا يتم تنفيذ الأنشطة بدقة واحدًا تلو الآخر؛ بل تتداخل وتتكرر مع ظهور متطلبات جديدة." },
          correction: { en: "The activities in the requirements process are not simply carried out in a strict sequence; the activities of analysis, definition, and specification are interleaved.", ar: "الأنشطة في عملية المتطلبات لا تُنفذ ببساطة في تسلسل صارم؛ بل إن أنشطة التحليل والتحديد والمواصفات متداخلة (interleaved)." }
        },
        
        // --- MCQ ---
        { id: "ch3_mcq1", type: "mcq", isExpected: false,
          question: { en: "The descriptions of what the system should do—the services it provides and the constraints on its operation—are called:", ar: "أوصاف ما يجب أن يفعله النظام - الخدمات التي يقدمها والقيود المفروضة على تشغيله - تسمى:" },
          options: [
              { en: "A) System designs", ar: "A) تصميمات النظام" },
              { en: "B) Requirements", ar: "B) المتطلبات" },
              { en: "C) Feasibility reports", ar: "C) تقارير الجدوى" },
              { en: "D) Validation checks", ar: "D) فحوصات التحقق من الصحة" }
          ], correctIndex: 1, explanation: { en: "Requirements describe the functional and non-functional bounds of the system.", ar: "المتطلبات تصف الحدود الوظيفية وغير الوظيفية للنظام." }
        },
        { id: "ch3_mcq2", type: "mcq", isExpected: false,
          question: { en: "Which type of requirements are written in a natural language plus diagrams to explain what services the system is expected to provide?", ar: "أي نوع من المتطلبات يُكتب بلغة طبيعية بالإضافة إلى رسوم بيانية لشرح الخدمات المتوقع أن يقدمها النظام؟" },
          options: [
              { en: "A) System requirements", ar: "A) متطلبات النظام" },
              { en: "B) Component requirements", ar: "B) متطلبات المكونات" },
              { en: "C) User requirements", ar: "C) متطلبات المستخدم" },
              { en: "D) Functional specifications", ar: "D) المواصفات الوظيفية" }
          ], correctIndex: 2, explanation: { en: "User requirements are high-level and written for non-technical stakeholders.", ar: "متطلبات المستخدم تكون عالية المستوى ومكتوبة لأصحاب المصلحة غير التقنيين." }
        },
        { id: "ch3_mcq3", type: "mcq", isExpected: false,
          question: { en: "A system requirements document is sometimes also called a:", ar: "وثيقة متطلبات النظام تُسمى أحياناً أيضاً بـ:" },
          options: [
              { en: "A) Feasibility study", ar: "A) دراسة جدوى" },
              { en: "B) Functional specification", ar: "B) مواصفة وظيفية" },
              { en: "C) Validation report", ar: "C) تقرير التحقق من الصحة" },
              { en: "D) Concept of operation", ar: "D) مفهوم التشغيل" }
          ], correctIndex: 1, explanation: { en: "System requirements serve as a detailed functional specification.", ar: "متطلبات النظام تعمل كمواصفات وظيفية تفصيلية للنظام." }
        },
        { id: "ch3_mcq4", type: "mcq", isExpected: false,
          question: { en: "If a functional requirements specification defines all the services required by the user without missing anything, it is considered:", ar: "إذا كانت مواصفات المتطلبات الوظيفية تُعرف جميع الخدمات التي يطلبها المستخدم دون نقص أي شيء، فإنها تُعتبر:" },
          options: [
              { en: "A) Consistent", ar: "A) متسقة" },
              { en: "B) Complete", ar: "B) كاملة (مكتملة)" },
              { en: "C) Validated", ar: "C) مثرية / مصدقة" },
              { en: "D) Feasible", ar: "D) مجدية" }
          ], correctIndex: 1, explanation: { en: "Completeness implies that no required functionality was left out.", ar: "الاكتمال يعني أنه لم يتم ترك أي وظيفة مطلوبة خارج الوثيقة." }
        },
        { id: "ch3_mcq5", type: "mcq", isExpected: false,
          question: { en: "Which requirements engineering activity evaluates if the proposed system will be cost-effective from a business point of view and if it can be developed within existing budgetary constraints?", ar: "أي من أنشطة هندسة المتطلبات يقيم ما إذا كان النظام المقترح سيكون فعالاً من حيث التكلفة من منظور تجاري وما إذا كان يمكن تطويره ضمن قيود الميزانية القائمة؟" },
          options: [
              { en: "A) Requirements elicitation", ar: "A) استنباط المتطلبات" },
              { en: "B) Requirements specification", ar: "B) مواصفات المتطلبات" },
              { en: "C) Feasibility study", ar: "C) دراسة الجدوى" },
              { en: "D) Requirements validation", ar: "D) التحقق من صحة المتطلبات" }
          ], correctIndex: 2, explanation: { en: "Feasibility studies address business and financial viability.", ar: "تدرس دراسات الجدوى الجدوى التجارية والمالية والفنية للمشروع." }
        },
        { id: "ch3_mcq6", type: "mcq", isExpected: false,
          question: { en: "Deriving system requirements through observation of existing systems, discussions with potential users, and task analysis is known as:", ar: "استخلاص متطلبات النظام من خلال مراقبة الأنظمة الحالية، والمناقشات مع المستخدمين المحتملين، وتحليل المهام يُعرف باسم:" },
          options: [
              { en: "A) Requirements validation", ar: "A) التحقق من صحة المتطلبات" },
              { en: "B) Requirements elicitation and analysis", ar: "B) استنباط المتطلبات وتحليلها" },
              { en: "C) Feasibility study", ar: "C) دراسة الجدوى" },
              { en: "D) Requirements specification", ar: "D) مواصفات المتطلبات" }
          ], correctIndex: 1, explanation: { en: "Elicitation means gathering and discovering requirements from stakeholders.", ar: "الاستنباط يعني جمع واكتشاف المتطلبات من أصحاب المصلحة والأنظمة." }
        },
        { id: "ch3_mcq7", type: "mcq", isExpected: false,
          question: { en: "Which activity checks the finalized requirements for realism, consistency, and completeness?", ar: "أي نشاط يفحص المتطلبات النهائية للتأكد من واقعيتها واتساقها واكتمالها؟" },
          options: [
              { en: "A) Requirements validation", ar: "A) التحقق من صحة المتطلبات" },
              { en: "B) System modeling", ar: "B) نمذجة النظام" },
              { en: "C) Feasibility study", ar: "C) دراسة الجدوى" },
              { en: "D) Elicitation", ar: "D) الاستنباط" }
          ], correctIndex: 0, explanation: { en: "Validation ensures that the defined requirements actually reflect what is correct and realistic.", ar: "التحقق من الصحة يضمن أن المتطلبات المحددة تعكس فعلياً ما هو صحيح وواقعي ومطلوب." }
        },

        // --- DEFINITIONS ---
        { id: "ch3_def1", type: "definition", isExpected: false, term: { en: "Requirements", ar: "المتطلبات" }, definition: { en: "The descriptions of what the system should do—the services that it provides and the constraints on its operation.", ar: "أوصاف ما يجب أن يفعله النظام - الخدمات التي يقدمها والقيود المفروضة على تشغيله." } },
        { id: "ch3_def2", type: "definition", isExpected: false, term: { en: "Requirements Engineering (RE)", ar: "هندسة المتطلبات (RE)" }, definition: { en: "The process of finding out, analyzing, documenting, and checking system services and constraints.", ar: "عملية اكتشاف وتحليل وتوثيق والتحقق من خدمات النظام وقيوده." } },
        { id: "ch3_def3", type: "definition", isExpected: false, term: { en: "User Requirements", ar: "متطلبات المستخدم" }, definition: { en: "Statements, in a natural language plus diagrams, of what services the system is expected to provide to system users and the constraints under which it must operate.", ar: "عبارات، بلغة طبيعية بالإضافة إلى رسوم بيانية، للخدمات المتوقع أن يقدمها النظام لمستخدمي النظام والقيود التي يجب أن يعمل بموجبها." } },
        { id: "ch3_def4", type: "definition", isExpected: false, term: { en: "System Requirements", ar: "متطلبات النظام" }, definition: { en: "More detailed descriptions of the software system’s functions, services, and operational constraints (often called a functional specification).", ar: "أوصاف أكثر تفصيلاً لوظائف نظام البرمجيات وخدماته وقيوده التشغيلية (غالباً ما تسمى بالمواصفات الوظيفية)." } },
        { id: "ch3_def5", type: "definition", isExpected: false, term: { en: "Completeness", ar: "الاكتمال (Completeness)" }, definition: { en: "A principle stating that all services required by the user should be defined in the requirements specification.", ar: "مبدأ ينص على أن جميع الخدمات التي يطلبها المستخدم يجب أن يتم تحديدها وتعريفها في مواصفات المتطلبات." } },
        { id: "ch3_def6", type: "definition", isExpected: false, term: { en: "Consistency", ar: "الاتساق (Consistency)" }, definition: { en: "A principle stating that requirements should not have contradictory definitions.", ar: "مبدأ ينص على أن المتطلبات يجب ألا تحتوي على تعريفات متناقضة أو متعارضة فيما بينها." } },
        { id: "ch3_def7", type: "definition", isExpected: false, term: { en: "Feasibility Study", ar: "دراسة الجدوى" }, definition: { en: "An estimate made to determine whether identified user needs may be satisfied using current technologies, whether the system will be cost-effective, and if it can be developed within existing budgetary constraints.", ar: "تقدير يتم إجراؤه لتحديد ما إذا كان يمكن تلبية احتياجات المستخدم المحددة باستخدام التقنيات الحالية، وما إذا كان النظام سيكون فعالاً من حيث التكلفة، وما إذا كان يمكن تطويره في ظل قيود الميزانية الحالية." } },
        { id: "ch3_def8", type: "definition", isExpected: false, term: { en: "Requirements Elicitation and Analysis", ar: "استنباط المتطلبات وتحليلها" }, definition: { en: "The process of deriving system requirements through observation of existing systems, discussions with potential users, and task analysis.", ar: "عملية استخلاص متطلبات النظام من خلال مراقبة الأنظمة الحالية، والمناقشات مع المستخدمين المحتملين، وتحليل المهام." } },

        // --- EXPLAIN ---
        { id: "ch3_exp1", type: "explain", isExpected: true,
          question: { en: "Explain the distinction between User requirements and System requirements.", ar: "اشرح الفرق بين متطلبات المستخدم ومتطلبات النظام." },
          answer: { en: "User requirements are high-level, abstract statements written in natural language (along with diagrams) meant to be easily understood by the users, outlining the expected services and constraints. System requirements, however, are highly detailed descriptions of the system's specific functions, services, and operational constraints. They serve as a precise functional specification and may form part of the contract between the buyer and the software developers.", ar: "متطلبات المستخدم هي عبارات عالية المستوى ومجردة مكتوبة بلغة طبيعية (جنباً إلى جنب مع الرسوم البيانية) مخصصة لتكون سهلة الفهم من قبل المستخدمين، وتوضح الخدمات والقيود المتوقعة. ومع ذلك، فإن متطلبات النظام هي أوصاف تفصيلية للغاية لوظائف النظام المحددة وخدماته وقيوده التشغيلية. وهي تعمل بمثابة مواصفات وظيفية دقيقة وقد تشكل جزءاً من العقد بين المشتري ومطوري البرمجيات." }
        },
        { id: "ch3_exp2", type: "explain", isExpected: true,
          question: { en: "Explain the two main principles that a functional requirements specification should follow.", ar: "اشرح المبدأين الرئيسيين اللذين يجب أن تتبعهما مواصفات المتطلبات الوظيفية." },
          answer: { en: "A functional requirements specification must be both complete and consistent. Completeness ensures that absolutely all the services required by the user have been identified and defined. Consistency ensures that there are no contradictory definitions or conflicting statements among the specified requirements.", ar: "يجب أن تكون مواصفات المتطلبات الوظيفية كاملة ومتسقة معاً. يضمن الاكتمال (Completeness) تحديد وتعريف جميع الخدمات التي يطلبها المستخدم بدقة وبلا استثناء. بينما يضمن الاتساق (Consistency) عدم وجود تعريفات متناقضة أو عبارات متعارضة بين المتطلبات المحددة." }
        },
        { id: "ch3_exp3", type: "explain", isExpected: false,
          question: { en: "Explain why the requirements engineering process is not a strict sequence.", ar: "اشرح لماذا لا تُعد عملية هندسة المتطلبات تسلسلاً صارماً." },
          answer: { en: "The activities in the requirements process (elicitation, analysis, specification, validation) are interleaved rather than sequential because requirements analysis continues during definition and specification. New requirements constantly come to light throughout the process, forcing developers to loop back and modify earlier analyses and documents.", ar: "الأنشطة في عملية المتطلبات (الاستنباط، التحليل، المواصفات، التحقق من الصحة) متداخلة ومتشابكة (interleaved) وليست متتالية بشكل خطي، لأن تحليل المتطلبات يستمر أثناء التحديد والمواصفات. تظهر متطلبات جديدة باستمرار طوال العملية، مما يجبر المطورين على التراجع وتعديل التحليلات والوثائق السابقة." }
        },

        // --- LISTS ---
        { id: "ch3_list1", type: "list", isExpected: true,
          question: { en: "List the four main activities in the requirements engineering process.", ar: "اذكر الأنشطة الأربعة الرئيسية في عملية هندسة المتطلبات." },
          points: [
              { en: "1. Feasibility study.", ar: "1. دراسة الجدوى." },
              { en: "2. Requirements elicitation and analysis.", ar: "2. استنباط المتطلبات وتحليلها." },
              { en: "3. Requirements specification.", ar: "3. مواصفات المتطلبات." },
              { en: "4. Requirements validation.", ar: "4. التحقق من صحة المتطلبات." }
          ]
        },
        { id: "ch3_list2", type: "list", isExpected: false,
          question: { en: "Mention the criteria considered when conducting a Feasibility study.", ar: "اذكر المعايير التي تؤخذ في الاعتبار عند إجراء دراسة الجدوى." },
          points: [
              { en: "1. Whether user needs can be satisfied using current software and hardware technologies.", ar: "1. ما إذا كان يمكن تلبية احتياجات المستخدم باستخدام تقنيات البرمجيات والأجهزة الحالية." },
              { en: "2. Whether the proposed system will be cost-effective from a business point of view.", ar: "2. ما إذا كان النظام المقترح سيكون فعالاً من حيث التكلفة من وجهة نظر تجارية." },
              { en: "3. Whether it can be developed within existing budgetary constraints.", ar: "3. ما إذا كان يمكن تطويره في ظل قيود الميزانية القائمة." }
          ]
        },
        { id: "ch3_list3", type: "list", isExpected: false,
          question: { en: "Enumerate what the requirements validation activity specifically checks for.", ar: "عدد الأشياء التي يتحقق منها نشاط التحقق من صحة المتطلبات (Requirements validation) على وجه التحديد." },
          points: [
              { en: "1. Realism.", ar: "1. الواقعية (Realism)." },
              { en: "2. Consistency.", ar: "2. الاتساق (Consistency)." },
              { en: "3. Completeness.", ar: "3. الاكتمال (Completeness)." }
          ]
        },

        // --- MUST MEMORIZE ---
        { id: "ch3_mem1", type: "memorize", isExpected: false,
          points: [
              { en: "Requirements Engineering (RE): Finding out, analyzing, documenting, and checking system services/constraints.", ar: "هندسة المتطلبات (RE): اكتشاف وتحليل وتوثيق والتحقق من خدمات النظام وقيوده." },
              { en: "User vs. System Requirements: User: Natural language + diagrams, abstract. System: Detailed functional specification, often acts as a contract.", ar: "متطلبات المستخدم مقابل النظام: المستخدم: لغة طبيعية + رسوم بيانية، مجردة. النظام: مواصفات وظيفية تفصيلية، وغالباً ما تكون بمثابة عقد." },
              { en: "Specification Principles: Completeness: ALL required services are defined. Consistency: NO contradictory definitions.", ar: "مبادئ المواصفات: الاكتمال: تعريف جميع الخدمات المطلوبة. الاتساق: عدم وجود تعريفات متناقضة." },
              { en: "The 4 RE Activities: 1. Feasibility Study (Cheap & quick estimate of technology, cost, budget). 2. Elicitation & Analysis (Deriving requirements via observation/discussion). 3. Specification (Translating into formal document). 4. Validation (Checking realism/consistency/completeness).", ar: "أنشطة RE الأربعة: 1. دراسة الجدوى (تقدير سريع ورخيص للتقنية والتكلفة والميزانية). 2. الاستنباط والتحليل (استخلاص المتطلبات عبر الملاحظة والنقاش). 3. المواصفات (ترجمة المعلومات إلى وثيقة رسمية). 4. التحقق من الصحة (فحص الواقعية والاتساق والاكتمال)." },
              { en: "Process Nature: The RE activities are interleaved, not strictly sequential.", ar: "طبيعة العملية: أنشطة هندسة المتطلبات متداخلة ومتشابكة (interleaved) وليست متسلسلة بشكل خطي صارم." }
          ]
        }
    ]
});