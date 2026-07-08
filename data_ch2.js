// بيانات الفصل الثاني: Software Process Models
window.courseData.chapters.push({
    id: "ch2",
    title: { en: "Chapter 2: Software Process Models", ar: "الفصل 2: نماذج عمليات البرمجيات" },
    overview: { en: "Waterfall, Spiral, and fundamental process models.", ar: "نموذج الشلال، النموذج الحلزوني، ونماذج العمليات الأساسية." },
    content: [
        // --- TRUE / FALSE ---
        { id: "ch2_tf1", type: "tf", isExpected: false, 
          question: { en: "Business applications must always be developed from scratch in a standard programming language like Java or C.", ar: "تطبيقات الأعمال يجب دائمًا تطويرها من الصفر بلغة برمجة قياسية مثل جافا أو C." },
          answer: false, 
          explanation: { en: "Modern business software is often developed by other means, rather than strictly from scratch.", ar: "غالباً ما يتم تطوير برمجيات الأعمال الحديثة بوسائل أخرى، بدلاً من التطوير من الصفر بشكل صارم." },
          correction: { en: "New business software is now often developed by extending and modifying existing systems or by configuring and integrating off-the-shelf software or system components.", ar: "غالباً ما يتم الآن تطوير برمجيات الأعمال الجديدة عن طريق توسيع وتعديل الأنظمة الحالية أو عن طريق تكوين ودمج البرامج الجاهزة أو مكونات النظام." }
        },
        { id: "ch2_tf2", type: "tf", isExpected: false, 
          question: { en: "A software process model provides complete and exhaustive information about all aspects of a software process.", ar: "يوفر نموذج عملية البرمجيات معلومات كاملة وشاملة حول جميع جوانب عملية البرمجيات." },
          answer: false, 
          explanation: { en: "Process models are simplified and only provide a specific perspective.", ar: "نماذج العمليات مبسطة وتوفر منظوراً محدداً فقط ولا تغطي كافة الجوانب بشكل شامل." },
          correction: { en: "A software process model is a simplified representation of a software process that provides only partial information about that process from a particular perspective.", ar: "نموذج عملية البرمجيات هو تمثيل مبسط لعملية برمجيات يوفر معلومات جزئية فقط حول تلك العملية من منظور معين." }
        },
        { id: "ch2_tf3", type: "tf", isExpected: false, 
          question: { en: "The waterfall model is an example of a plan-driven process where you must plan and schedule all activities before starting work on them.", ar: "نموذج الشلال هو مثال على عملية تعتمد على الخطة حيث يجب عليك تخطيط وجدولة جميع الأنشطة قبل بدء العمل عليها." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch2_tf4", type: "tf", isExpected: false, 
          question: { en: "In the waterfall model, the 'Implementation and unit testing' phase is normally the longest life cycle phase.", ar: "في نموذج الشلال، عادة ما تكون مرحلة 'التنفيذ واختبار الوحدة' هي أطول مرحلة في دورة الحياة." },
          answer: false, 
          explanation: { en: "The final phase of the life cycle usually takes the most time.", ar: "المرحلة النهائية من دورة الحياة عادة ما تستغرق معظم الوقت والجهد." },
          correction: { en: "Normally, the 'Operation and maintenance' phase is the longest life cycle phase.", ar: "عادةً ما تكون مرحلة 'التشغيل والصيانة' هي أطول مرحلة في دورة حياة النظام البرمجي." }
        },
        { id: "ch2_tf5", type: "tf", isExpected: false, 
          question: { en: "The major problem with the waterfall model is its inflexible partitioning of the project into distinct stages.", ar: "المشكلة الرئيسية في نموذج الشلال هي التقسيم غير المرن للمشروع إلى مراحل متميزة." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        { id: "ch2_tf6", type: "tf", isExpected: false, 
          question: { en: "The waterfall model is best suited for projects where customer requirements are expected to change radically during system development.", ar: "نموذج الشلال هو الأنسب للمشاريع التي يُتوقع أن تتغير فيها متطلبات العملاء بشكل جذري أثناء تطوير النظام." },
          answer: false, 
          explanation: { en: "The model's inflexibility makes it difficult to accommodate changing requirements.", ar: "عدم مرونة النموذج تجعل من الصعب جداً الاستجابة للمتطلبات المتغيرة والتكيف معها." },
          correction: { en: "The waterfall model should only be used when the requirements are well understood and unlikely to change radically during system development.", ar: "يجب استخدام نموذج الشلال فقط عندما تكون المتطلبات مفهومة جيدًا ومن غير المرجح أن تتغير بشكل جذري أثناء تطوير النظام." }
        },
        { id: "ch2_tf7", type: "tf", isExpected: false, 
          question: { en: "Boehm’s spiral model represents the software process as a sequence of linear activities without any looping or backtracking.", ar: "يمثل نموذج بوهيم الحلزوني عملية البرمجيات كتسلسل من الأنشطة الخطية دون أي حلقات أو تراجع." },
          answer: false, 
          explanation: { en: "The model is explicitly designed as a spiral (loops) rather than a linear sequence.", ar: "تم تصميم النموذج بشكل صريح كحلزون (حلقات تكرارية) بدلاً من تسلسل خطي جامد." },
          correction: { en: "The spiral model represents the software process as a spiral, where each loop represents a phase of the software process.", ar: "يمثل النموذج الحلزوني عملية البرمجيات كشكل حلزوني، حيث تمثل كل حلقة (loop) مرحلة كاملة من مراحل العملية." }
        },
        { id: "ch2_tf8", type: "tf", isExpected: false, 
          question: { en: "Risk management and minimization is a very important project management activity within the spiral model.", ar: "إدارة المخاطر وتقليلها هو نشاط مهم جداً لإدارة المشاريع داخل النموذج الحلزوني." },
          answer: true, explanation: { en: "", ar: "" }, correction: { en: "", ar: "" }
        },
        
        // --- MCQ ---
        { id: "ch2_mcq1", type: "mcq", isExpected: true,
          question: { en: "Which fundamental software engineering activity involves defining the functionality of the software and the constraints on its operation?", ar: "أي نشاط أساسي من أنشطة هندسة البرمجيات يتضمن تحديد وظائف البرنامج والقيود المفروضة على تشغيله؟" },
          options: [
              { en: "A) Software evolution", ar: "A) تطور البرمجيات" },
              { en: "B) Software validation", ar: "B) التحقق من البرمجيات" },
              { en: "C) Software specification", ar: "C) مواصفات البرمجيات" },
              { en: "D) Software design and implementation", ar: "D) تصميم وتنفيذ البرمجيات" }
          ], correctIndex: 2, explanation: { en: "Specification is defining functionality and constraints.", ar: "المواصفات هي العملية التي يتم فيها تحديد الوظائف والقيود الخاصة بالنظام." }
        },
        { id: "ch2_mcq2", type: "mcq", isExpected: true,
          question: { en: "The first published model of the software development process was derived from more general system engineering processes. What is it known as?", ar: "أول نموذج منشور لعملية تطوير البرمجيات اُشتق من عمليات هندسة النظم العامة. بماذا يُعرف؟" },
          options: [
              { en: "A) Boehm’s spiral model", ar: "A) نموذج بوهيم الحلزوني" },
              { en: "B) The waterfall model", ar: "B) نموذج الشلال" },
              { en: "C) The agile process model", ar: "C) نموذج العملية الرشيقة" },
              { en: "D) The risk-driven model", ar: "D) النموذج القائم على المخاطر" }
          ], correctIndex: 1, explanation: { en: "The waterfall model was the first published model.", ar: "نموذج الشلال هو أول نموذج تم نشره وتوثيقه لدورة حياة البرمجيات." }
        },
        { id: "ch2_mcq3", type: "mcq", isExpected: true,
          question: { en: "In the waterfall model, which stage involves allocating the requirements to either hardware or software systems by establishing an overall system architecture?", ar: "في نموذج الشلال، أي مرحلة تتضمن تخصيص المتطلبات إما لأنظمة الأجهزة أو البرامج من خلال إنشاء بنية نظام شاملة؟" },
          options: [
              { en: "A) Requirement’s analysis and definition", ar: "A) تحليل وتحديد المتطلبات" },
              { en: "B) System and software design", ar: "B) تصميم النظام والبرمجيات" },
              { en: "C) Implementation and unit testing", ar: "C) التنفيذ واختبار الوحدة" },
              { en: "D) Integration and system testing", ar: "D) التكامل واختبار النظام" }
          ], correctIndex: 1, explanation: { en: "System design allocates requirements to architecture.", ar: "مرحلة التصميم تقوم بتوزيع وتخصيص المتطلبات على الهيكل البرمجي والعتادي وتضع البنية العامة." }
        },
        { id: "ch2_mcq4", type: "mcq", isExpected: true,
          question: { en: "What is the main difference between Boehm's spiral model and other software process models?", ar: "ما هو الفرق الرئيسي بين نموذج بوهيم الحلزوني ونماذج عمليات البرمجيات الأخرى؟" },
          options: [
              { en: "A) It uses a strict linear sequence of activities.", ar: "A) يستخدم تسلسلًا خطيًا صارمًا للأنشطة." },
              { en: "B) It explicitly recognizes risk.", ar: "B) يعترف صراحة بالمخاطر ويميزها." },
              { en: "C) It avoids planning until the very end of the project.", ar: "C) يتجنب التخطيط حتى نهاية المشروع تمامًا." },
              { en: "D) It does not require any customer involvement.", ar: "D) لا يتطلب أي مشاركة أو تفاعل من العميل." }
          ], correctIndex: 1, explanation: { en: "Risk assessment is central to the spiral model.", ar: "الميزة الفريدة للنموذج الحلزوني هي التركيز الصريح والمنهجي على إدارة وتقييم المخاطر." }
        },
        { id: "ch2_mcq5", type: "mcq", isExpected: false,
          question: { en: "In Boehm’s spiral model, during which sector is a development model for the system chosen (e.g., throwaway prototyping or formal transformations)?", ar: "في نموذج بوهيم الحلزوني، خلال أي قطاع يتم اختيار نموذج تطوير للنظام (مثل النماذج الأولية السريعة Throwaway Prototyping أو التحويلات الرسمية Formal Transformations)؟" },
          options: [
              { en: "A) Objective setting", ar: "A) تحديد الأهداف" },
              { en: "B) Risk assessment and reduction", ar: "B) تقييم المخاطر وتقليلها" },
              { en: "C) Planning", ar: "C) التخطيط" },
              { en: "D) Development and validation", ar: "D) التطوير والتحقق" }
          ], correctIndex: 3, explanation: { en: "Development and validation sector is where the actual model approach is applied.", ar: "قطاع التطوير والتحقق هو الجزء الذي يتم فيه اختيار نموذج التطوير الفعلي وبناء النظام والتحقق منه." }
        },
        { id: "ch2_mcq6", type: "mcq", isExpected: false,
          question: { en: "Informally, how is 'risk' defined in the context of software projects?", ar: "بشكل غير رسمي، كيف يتم تعريف 'الخطر' (Risk) في سياق مشاريع البرمجيات؟" },
          options: [
              { en: "A) The cost of purchasing new hardware", ar: "A) تكلفة شراء أجهزة عتادية جديدة" },
              { en: "B) A strict customer deadline", ar: "B) موعد نهائي صارم ومحدد من قبل العميل" },
              { en: "C) Simply something that can go wrong", ar: "C) ببساطة شيء يمكن أن يسير بشكل خاطئ" },
              { en: "D) A type of software bug", ar: "D) نوع معين من الأخطاء البرمجية" }
          ], correctIndex: 2, explanation: { en: "Risk is broadly anything that can go wrong.", ar: "الخطر بمفهومه البسيط والعملي هو أي شيء طارئ قد يحدث ويتسبب في عرقلة المشروع." }
        },

        // --- DEFINITIONS ---
        { id: "ch2_def1", type: "definition", isExpected: true, term: { en: "Software Process", ar: "عملية البرمجيات" }, definition: { en: "A set of related activities that leads to the production of a software product.", ar: "مجموعة من الأنشطة ذات الصلة والمترابطة التي تؤدي في النهاية إلى إنتاج منتج برمجيات." } },
        { id: "ch2_def2", type: "definition", isExpected: false, term: { en: "Software Process Model", ar: "نموذج عملية البرمجيات" }, definition: { en: "A simplified representation of a software process that represents a process from a particular perspective.", ar: "تمثيل مبسط ورؤية تجريدية لعملية البرمجيات، حيث يعرض هذه العملية من منظور وزاوية معينة." } },
        { id: "ch2_def3", type: "definition", isExpected: true, term: { en: "Waterfall Model", ar: "نموذج الشلال" }, definition: { en: "A plan-driven software process model where development is split up into a number of independent steps carried out in a sequence (cascade), where commitments must be made at an early stage.", ar: "نموذج عملية برمجية قائم على الخطة، حيث يتم تقسيم التطوير إلى خطوات مستقلة تماماً وتُنفذ بالتسلسل (كالشلال المتدفق)، ويتطلب تقديم التزامات صارمة في مرحلة مبكرة." } },
        { id: "ch2_def4", type: "definition", isExpected: true, term: { en: "Spiral Model", ar: "النموذج الحلزوني" }, definition: { en: "A risk-driven software process framework proposed by Boehm, represented as a spiral where each loop represents a phase of the process.", ar: "إطار عمل لعملية البرمجيات قائم وموجه بالمخاطر اقترحه العالم بوهيم، ويُمثل بيانياً كشكل حلزوني حيث تعبر كل حلقة (loop) فيه عن مرحلة كاملة من مراحل العملية." } },
        { id: "ch2_def5", type: "definition", isExpected: false, term: { en: "Risk", ar: "الخطر (Risk)" }, definition: { en: "Simply something that can go wrong in a project, leading to proposed software changes and project problems such as schedule and cost overrun.", ar: "ببساطة هو أي شيء يمكن أن يسير بشكل خاطئ في المشروع، مما يؤدي إلى فرض تغييرات في البرمجيات وظهور مشاكل مثل تأخر الجدول الزمني وتجاوز الميزانية المرصودة." } },
        
        // --- EXPLAIN ---
        { id: "ch2_exp1", type: "explain", isExpected: true,
          question: { en: "Explain the main drawback or problem of using the waterfall model.", ar: "اشرح العيب الرئيسي أو المشكلة الأساسية في استخدام نموذج الشلال." },
          answer: { en: "The major problem with the waterfall model is the inflexible partitioning of the project into distinct stages. Because commitments must be made at an early stage in the process, it becomes very difficult to respond to changing customer requirements. Therefore, it should only be used when requirements are well understood and unlikely to change radically.", ar: "المشكلة الكبرى في نموذج الشلال هي التقسيم الجامد وغير المرن للمشروع إلى مراحل منفصلة ومستقلة. ونظراً لضرورة تقديم التزامات وتوقيع مواصفات نهائية في مرحلة مبكرة جداً من العملية، يصبح من الصعب والمكلف للغاية الاستجابة لمتطلبات العميل المتغيرة لاحقاً. بناءً على ذلك، يجب عدم استخدامه إلا عندما تكون المتطلبات مفهومة تماماً ومن المستبعد جداً تغييرها بشكل جذري." }
        },
        { id: "ch2_exp2", type: "explain", isExpected: false,
          question: { en: "Explain the 'Risk assessment and reduction' sector in Boehm's spiral model.", ar: "اشرح قطاع 'تقييم المخاطر وتقليلها' (Risk assessment and reduction) في نموذج بوهيم الحلزوني." },
          answer: { en: "In this sector, a detailed analysis is carried out for each identified project risk. Once analyzed, steps are taken to reduce that risk. For example, if there is a risk that the gathered requirements are inappropriate, the team might develop a prototype system to clarify and validate those requirements.", ar: "في هذا القطاع، يتم إجراء تحليل دقيق وتفصيلي لكل خطر محتمل تم التعرف عليه في المشروع. وبعد انتهاء التحليل، يتم اتخاذ خطوات وإجراءات عملية لتقليل هذا الخطر أو القضاء عليه. على سبيل المثال: إذا كان هناك خطر من أن المتطلبات التي تم جمعها غير واضحة أو غير مناسبة، يمكن للفريق تطوير نظام أولي (Prototype) لتوضيح المتطلبات والتحقق من صحتها مع العميل." }
        },
        
        // --- LISTS ---
        { id: "ch2_list1", type: "list", isExpected: true,
          question: { en: "Enumerate the four fundamental activities that are common to all software processes.", ar: "عدد الأنشطة الأساسية الأربعة المشتركة في جميع عمليات البرمجيات." },
          points: [
              { en: "1. Software specification.", ar: "1. مواصفات البرمجيات (Software specification)." },
              { en: "2. Software design and implementation.", ar: "2. تصميم وتنفيذ البرمجيات (Software design and implementation)." },
              { en: "3. Software validation.", ar: "3. التحقق من البرمجيات (Software validation)." },
              { en: "4. Software evolution.", ar: "4. تطور البرمجيات (Software evolution)." }
          ]
        },
        { id: "ch2_list2", type: "list", isExpected: true,
          question: { en: "List the five principal stages of the waterfall model in their correct sequence.", ar: "اذكر المراحل الرئيسية الخمس لنموذج الشلال بتسلسلها الصحيح." },
          points: [
              { en: "1. Requirement’s analysis and definition.", ar: "1. تحليل المتطلبات وتحديدها (Requirement’s analysis and definition)." },
              { en: "2. System and software design.", ar: "2. تصميم النظام والبرمجيات (System and software design)." },
              { en: "3. Implementation and unit testing.", ar: "3. التنفيذ واختبار الوحدة (Implementation and unit testing)." },
              { en: "4. Integration and system testing.", ar: "4. التكامل واختبار النظام (Integration and system testing)." },
              { en: "5. Operation and maintenance.", ar: "5. التشغيل والصيانة (Operation and maintenance)." }
          ]
        },
        { id: "ch2_list3", type: "list", isExpected: true,
          question: { en: "Mention the four sectors into which each loop in the spiral model is split.", ar: "اذكر القطاعات الأربعة التي تنقسم إليها كل حلقة في النموذج الحلزوني." },
          points: [
              { en: "1. Objective setting.", ar: "1. تحديد الأهداف (Objective setting)." },
              { en: "2. Risk assessment and reduction.", ar: "2. تقييم المخاطر وتقليلها (Risk assessment and reduction)." },
              { en: "3. Development and validation.", ar: "3. التطوير والتحقق (Development and validation)." },
              { en: "4. Planning.", ar: "4. التخطيط (Planning)." }
          ]
        },
        
        // --- MUST MEMORIZE ---
        { id: "ch2_mem1", type: "memorize", isExpected: false,
          points: [
              { en: "Software Process Definition: A set of related activities leading to a software product.", ar: "تعريف عملية البرمجيات: مجموعة من الأنشطة المترابطة التي تؤدي إلى إنتاج منتج برمجيات." },
              { en: "4 Fundamental Activities: Specification, Design & Implementation, Validation, Evolution.", ar: "الأنشطة الـ4 الأساسية: المواصفات، التصميم والتنفيذ، التحقق، والتطور." },
              { en: "Waterfall Model Sequence: 1. Requirements analysis and definition, 2. System and software design, 3. Implementation and unit testing, 4. Integration and system testing, 5. Operation and maintenance (longest phase).", ar: "تسلسل نموذج الشلال: 1. تحليل المتطلبات وتحديدها، 2. تصميم النظام والبرمجيات، 3. التنفيذ واختبار الوحدة، 4. التكامل واختبار النظام، 5. التشغيل والصيانة (وهي المرحلة الأطول في دورة الحياة)." },
              { en: "Waterfall Key Characteristics: Plan-driven, sequential, inflexible, hard to change requirements later. Best for well-understood requirements.", ar: "الخصائص الرئيسية للشلال: موجه بالخطة، تسلسلي، غير مرن، ويصعب تعديل المتطلبات فيه لاحقاً. هو الأفضل للمشاريع ذات المتطلبات المفهومة جيداً والثابتة." },
              { en: "Spiral Model (Boehm) Sectors: 1. Objective setting, 2. Risk assessment and reduction, 3. Development and validation, 4. Planning.", ar: "قطاعات النموذج الحلزوني (بوهيم): 1. تحديد الأهداف، 2. تقييم المخاطر وتقليلها، 3. التطوير والتحقق، 4. التخطيط الجيد للمرحلة القادمة." },
              { en: "Spiral Key Characteristics: Risk-driven, explicit recognition of risk, uses looping.", ar: "الخصائص الرئيسية للحلزوني: موجه بالمخاطر، يعترف صراحة بوجود المخاطر ويديرها، ويعتمد على الحلقات التكرارية المتصاعدة." }
          ]
        }
    ]
});