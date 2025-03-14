import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: {
            home: "Home",
            certificates: "Certificates",
            testimonials: "Feedback",
            locations: "Locations",
            blog: "Blog",
            book: "Book",
            login: "Login",
            logout: "Logout",
          },
          hero: {
            banner: {
              title: "Dr. Abdelsattar Ahmed Nasr",
              sub_title: "Interventional Cardiovascular Specialist",
            },
            cards: {
              card1: {
                title: "Full clinical examination",
                description:
                  "We provide a precise clinical examinationfor heart and vascular system with correlation with patient’s complain. Moreover medical history archives to follow up with patient.",
                button: "Button",
              },
              card2: {
                title: "Cardiovascular investigations",
                description:
                  "We have been dedicated to offer a full range of noninvasive diagnostic tools to help patients with their health issues. ECG- Echo&duplex- stress tests -Holter and ambulatory blood pressure- CTA.",
                button: "Button",
              },
              card3: {
                title: "Interventional therapy ",
                description:
                  "We have a enough experience inside Egypt and abroad with all endo procedures regarding cardiovascular diseases. Coronary and vascular angiography- Device implantation.",
                button: "Button",
              },
            },
          },
          about: {
            title: "About",
            sub_title: "Leading the Way in Heart Health",
            motto: "- We take care of you -",
            cards: {
              card1: {
                title:
                  "Fellowship of the University of Alcalá - Spain in Cell Regeneration Research | Affiliated Graduate of Harvard University - US",
                description:
                  "Specialized in treating heart failure with advanced protocols, pacemaker implantation, valve replacement, and performing complex catheter-based coronary interventions without surgery.",
              },
              card2: {
                title: "Fellowship of University Hospitals Birmingham - UK",
                description:
                  "Expert in pacemaker implantation for arrhythmia and heart block, ICD and CRT implantation for heart failure. Offering continuous ECG monitoring (Holter) for precise diagnosis.",
              },
              card3: {
                title: "Fellowship of Erlangen University - Germany",
                description:
                  "Advanced noninvasive cardiac imaging, echocardiography, dobutamine stress echo, tissue Doppler, and interpretation of MRI, CT coronary angiography, and myocardial perfusion imaging.",
              },
            },
          },
          journey: {
            title: "Journey",
            sub_title: "My Journey",
            motto: "- I'm on the journey -",
            images: {
              image1: {
                text: "I'm on the journey",
              },
              image2: {
                text: "I'm on the journey",
              },
              image3: {
                text: "I'm on the journey",
              },
              image4: {
                text: "I'm on the journey",
              },
              image5: {
                text: "I'm on the journey",
              },
            },
          },
          info_section: {
            mentors: {
              title: "My Dear Mentors",
              description:
                "My journey in the field of interventional cardiology has been shaped by the guidance and wisdom of extraordinary mentors. Each of them has played a pivotal role in honing my skills, deepening my understanding, and inspiring my commitment to advancing cardiovascular care.",
            },
            certificates: {
              title: "Certificates",
              description:
                "My professional journey is marked by a steadfast commitment to continuous learning and excellence in interventional cardiology. The certifications I have earned are not just milestones, but a testament to my dedication to staying at the forefront of medical advancements.",
            },
          },
          stats: {
            title: "Stats",
            sub_title: "Dedicated to Advancing Cardiovascular Care",
            description:
              "As an Interventional Cardiovascular Specialist, we are committed to providing cutting-edge treatments and personalized care to improve heart health and save lives.",
            vales: {
              value1: {
                description: "Coronary Intervention",
              },
              value2: {
                description: "Cardiac Device Implantation",
              },
              value3: {
                description: "Heart Failure Patient Management",
              },
            },
          },
          testimonials: {
            title: "Hear from our Patients",
            description:
              "Discover how our specialized cardiovascular treatments have made a difference in the lives of our patients.",
            feedback: {
              feedback_1: {
                name: "Mariam Abes",
                content:
                  "Honestly, the greatest doctor I have ever met, my father was very tired and had a problem. His heart failure seemed to be fine, and his mental state was very high Praise be to God, thanks to God and Dr. Abdel Sattar, he is much better, Much respect to you before he was Doctor Who. Beautiful human being Very kind, may God grant you success",
              },
              feedback_2: {
                name: "First Dragon",
                content:
                  "The most brilliant and successful doctor (cardiologist) due to his efforts and excellence His diligence in the pursuit of development and his frequent travels to Europe (Hungary, England, Germany) for the sake of development and progress Treating heart patients As usual Good luck and from success to success.",
              },
              feedback_3: {
                name: "Mahmoud Abd-AlGhany",
                content:
                  "A doctor who is a very good listener and cares primarily about his patients' complaints. He has a clear conscience, is very engaged, and is available most of the time. I highly recommend following up with him",
              },
              feedback_4: {
                name: "Mohamed Ali",
                content:
                  "Whoever does not thank people does not thank God Special thanks to Dr. Abdel Sattar Nasr Cardiologist and catheterization specialist with health insurance Fellow of Harvard University in America and Birmingham University in England Thank you very much for the effort that Dr. Abdul Sattar made with my father Thank God he did his job with my father perfectly and was always successful He is successful during his work and life. Thank you very much, Doctor, and good luck always",
              },
              feedback_5: {
                name: "Mona Fawzy",
                content:
                  "May God bless you, a decent and respectable person Without prior knowledge or honor, of course, the book talks about Himself, God willing, may God reward you with the best reward that He deals with His Lord Mansour, may God grant him good health and longevity May God protect you and grant you success and fulfill all your wishes May your heart be filled with joy",
              },
              feedback_6: {
                name: "Refa't Ga'far",
                content:
                  "Always and forever, you treat your Lord before you treat humans with our Lord May God bless you, make you happy, protect you, and reward you well, Doctor You are a respectable person before you are a doctor. I wish you well Success in all stages of your life",
              },
            },
          },
          footer: {
            description:
              "All of our services from the beginning of the treatment journey with patient complain then examination and diagnostic investigations ending with prescription and interventions are done in one place on nile corniche in Cairo-Egypt.",
            buttons: {
              about: "About",
              certificates: "Certificates",
              book: "Book",
              locations: "Locations",
            },
          },
          locationsPage: {
            bannerSection: {
              title: "Locations",
              description:
                "Dr. Abdelsattar Ahmed Nasr is a renowned cardiologist based in Cairo, working at Mokattam Hospital HIO, which is a tertiary center for cardiology, and at his clinic located on the Nile Corniche in Roud Elfarag. Recently, he has also started offering his specialized cardiac care services in his hometown in the Delta region,ensuring more communities have access to top-quality care.",
            },
            buttons: {
              btn1: "Nile Corniche, Cairo",
              btn2: "Telemedicine - Home Visit",
              btn3: "Kafr Shukr, Qalyubia",
            },
            locations: {
              nileLocation: {
                title: "Nile Corniche, Cairo",
                location:
                  "12 Agha Khan Towers - Next to Nasser Institute - In front of McDonald's and La Poire",
                telephone: "+201006730022",
                workingHours: "Sunday, Tuesday, and Thursday - From 3 PM",
                note: "Please follow up with the clinic secretary on Sunday for possible delays due to surgeries",
                extra: {
                  getDirections: "Get Directions",
                  ContactSecretary: "Contact Secretary",
                },
              },
              homeVisit: {
                telemedicineService: {
                  title: "Telemedicine Service",
                  subTitle:
                    "You can book an appointment with Dr. Abd Al Sattar through our video call service (Telemedicine).",
                  description:
                    "Our services include Remote Cardiac Consultation. Telemedicine is an approved method by the American Heart Association to help you follow your treatment plan.",
                  buttonText: "Read more",
                },
                homeVisitService: {
                  title: "Home Visit",
                  subTitle:
                    "Dr. Abd Al Sattar also offers home visits for those who prefer the comfort and privacy of their own home for medical consultations and check-ups.",
                  description:
                    "The home visit service includes a full clinical examination, ECG, echocardiography, and other necessary tests to ensure you receive the best care possible without leaving your home. With the convenience of home visits, following up on your treatment plan has never been easier.",
                },
              },
              kafrShukr: {
                title: "Kafr Shukr, Qalyubia",
                location:
                  "Kayan Specialized Hospital - Mansoura-Banha Road - Esnyet - Next to Al-Sharawy Mosque",
                telephone: "+201143818340, +201129191970, +201143818304",
                workingHours: "Daily at 9 PM except Wednesdays",
                note: "Please follow up with the clinic secretary on Sunday for possible delays due to surgeries",
                extra: {
                  ultraSound: {
                    title: "Cardiac Ultrasound Clinic",
                    subTitle: "Prof. Dr. Hamada Khater Radiology Center",
                    description:
                      "Available daily except Wednesdays with a prior reservation",
                    telephone: "0132517017",
                  },
                  getDirections: "Get Directions",
                  ContactSecretary: "Contact Secretary",
                },
              },
            },
          },
          bookPage: {
            bookName: "Your Guide in weakness of cardiac muscle",
            Author: "By Dr. Abdelsattar Ahmed Nasr",
            title: "About the book",
            description:
              "Living with heart failure can be overwhelming, but understanding it makes the journey easier. This book is written with compassion to help patients and their loved ones navigate the challenges of this condition. Through clear explanations and heartfelt guidance, it offers hope, support, and practical advice to improve quality of life and ease the burden of the disease.",
            date: "Coming in Fall 2025",
            preOrder: "Pre-order Now",
            buttons: {
              amazon: "Amazon",
              bookstore: "Bookstore",
              address: {
                title: "Visit Us",
                Details: "SOON",
              },
            },
          },
        },
      },
      ar: {
        translation: {
          header: {
            home: "الرئيسية",
            certificates: "الشهادات",
            testimonials: "آراء المرضى",
            locations: "الأماكن",
            blog: "المدونة",
            book: "الكتاب",
            login: "تسجيل الدخول",
            logout: "تسجيل الخروج",
          },
          hero: {
            banner: {
              title: "د. عبدالستار احمد نصر",
              sub_title: "أخصائي القلب والأوعية الدموية التداخلية",
            },
            cards: {
              card1: {
                title: "الفحص السريري الشامل",
                description:
                  "نقدم فحص اكلينيكي دقيق للقلب والاوعية الدموية مع الاستماع لشكوى المريض. كما يتم تخزين التاريخ المرضي والعلاجات لمتابعة الحالة الصحية للمريض.",
                button: "زر",
              },
              card2: {
                title: "فحوصات الجهاز الدوري",
                description:
                  "حريصين على توفير جميع الفحوصات التشخيصية الغير نافذة لمساعدة المرضى في مشاكلهم الصحية. رسم قلب - ايكو - دوبلكس - فحص القلب بالمجهود - هولتر وقياس ضغط مستمر - الاشعة المقطعية",
                button: "زر",
              },
              card3: {
                title: "العلاج التداخلي",
                description:
                  "لدينا خبرة كافية داخل مصر وخارجها في جميع العمليات التداخلية الخاصة بأمراض القلب والأوعية الدموية.القسطرة القلبية والطرفية- تركيب الصمامات والمنظمات الكهربية عن طريق القسطرة.",
                button: "زر",
              },
            },
          },
          about: {
            title: "عننا",
            sub_title: "الرائد في مجال صحة القلب",
            motto: "- نحن نعتني بك -",
            cards: {
              card1: {
                title:
                  "زمالة جامعة ألكالا - إسبانيا للبحث العلمي في تجدد الخلايا وخريج منتسب جامعة هارفارد - أمريكا",
                description:
                  "علاج ضعف عضلة القلب بأحدث البروتوكولات، تركيب منظمات القلب، تغيير الصمامات، وإجراء قسطرة متقدمة لحالات الانسداد المزمن بدون جراحة.",
              },
              card2: {
                title: "زمالة مستشفيات جامعة برمنغهام - إنجلترا",
                description:
                  "تركيب منظمات ضربات القلب لحالات اضطراب النظم، زراعة صاعق القلب الداخلي، وجهاز تقوية العضلة. يتوفر جهاز الهولتر لمتابعة رسم القلب المستمر.",
              },
              card3: {
                title: "زمالة جامعة إيرلانجن - ألمانيا",
                description:
                  "توفر تقنيات التصوير القلبي غير النافذ، الإيكو بالمجهود، الدوبلر النسيجي، والتشخيص بالصبغة، إضافةً إلى المسح الذري والرنين القلبي.",
              },
            },
          },
          journey: {
            title: "رحلتي",
            sub_title: "رحلتي المهنية",
            motto: "- أنا على رحلة -",
            images: {
              image1: {
                text: "جملة",
              },
              image2: {
                text: "جملة",
              },
              image3: {
                text: "جملة",
              },
              image4: {
                text: "جملة",
              },
              image5: {
                text: "جملة",
              },
            },
          },
          info_section: {
            mentors: {
              title: "زملاء الرحلة",
              description:
                "تشكلت رحلتي في مجال أمراض القلب التداخلية من خلال توجيهات وحكمة الموجهين الاستثنائيين. لقد لعب كل واحد منهم دورًا محوريًا في صقل مهاراتي، وتعميق فهمي، وإلهام التزامي بتعزيز رعاية القلب والأوعية الدموية.",
            },
            certificates: {
              title: "الشهادات",
              description:
                "تتميز رحلتي المهنية بالالتزام الثابت بالتعلم المستمر والتميز في أمراض القلب التداخلية. الشهادات التي حصلت عليها ليست مجرد إنجازات هامة، ولكنها شهادة على تفانيي في البقاء في طليعة التطورات الطبية.",
            },
          },
          stats: {
            title: "الإحصائيات",
            sub_title: "مخصص لتعزيز رعاية القلب والأوعية الدموية",
            description:
              "باعتبارنا متخصصين في علاج أمراض القلب والأوعية الدموية التداخلية، فإننا ملتزمون بتوفير أحدث العلاجات والرعاية الشخصية لتحسين صحة القلب وإنقاذ الأرواح.",
            vales: {
              value1: {
                description: "التدخل التاجي",
              },
              value2: {
                description: "زراعة جهاز القلب",
              },
              value3: {
                description: "إدارة مرضى قصور القلب",
              },
            },
          },
          testimonials: {
            title: "آراء مرضانا",
            description:
              "اكتشف كيف أحدثت علاجات القلب والأوعية الدموية المتخصصة فرقًا في حياة مرضانا.",
            feedback: {
              feedback_1: {
                name: "Mariam Abes",
                content:
                  "بصراحه اعظم دكتور قابلته بابا كان تعبان جدا عنده مشكله ف كفاة القلب بدا معاه وخالي حاله النفسه عاليه جدا والحمد لله بفضل الله والدكتور عبدالستار بقي احسن بكتير جدا احترام لحضرتك قبل ما يكون دكتور هو. انسان جميل وطيب جدا الله يوفقك",
              },
              feedback_2: {
                name: "First Dragon",
                content:
                  "اشطر وانجح دكتور( القلب) نظرا لجهوده وتفوقه واجتهاده فى سبيل التطور وسفرياته المتكرره إلى اوروبا ( المجر .. انجلترا .. ألمانيا ) فى سبيل التطور والتقدم فى علاج مرضى القلب كعادته بالتوفيق ومن نجاح الى نجاح.",
              },
              feedback_3: {
                name: "Mahmoud Abd-AlGhany",
                content:
                  "طبيب مستمع جيد جدا ويهتم بشكوى مرضاه بالدرجة الأولى وضميره صاحي وشاطر جداً ومتواجد أغلب الوقت أنصح بشدة بالمتابعة معاه",
              },
              feedback_4: {
                name: "Mohamed Ali",
                content:
                  "من لا يشكر الناس لا يشكر الله شكر خاص للدكتور: عبدالستار نصر اخصائي القلب والقسطرة بالتأمين الصحي زميل جامعة هارفرد بامريكا وجامعة برمنحهام بانجلترا شكرا جزيلا علي المجهود الذي ابذله الدكتور عبدالستار مع والدى والحمدلله قام باداء عمله مع والدي باكمل وجه ودائما موفق وناجح اثناء عمله وحياته شكرا جزيلا يا دكتور وبالتوفيق دايما",
              },
              feedback_5: {
                name: "Mona Fawzy",
                content:
                  "ربنا يبارك فى عمر حضرتك انسان خلوق ومحترم وبدون سابق معرفة واتشرف طبعا الكتاب يتحدث عن نفسه أنشأ الله ربنا يجزيك خير الجزاء اللى بيعامل ربه منصور أنشأ الله فى صحته وعمره واهلهواسرتةربنايحفظك ويوفقك ويحقق كل امنياتك لقلبك الفرح كله",
              },
              feedback_6: {
                name: "Refaat Ga'far",
                content:
                  "دائماً وأبدأ أنت تعامل ربك قبل معاملة البشر ربنا يوفقك ويسعدك ويحفظك ويجازيك خيرا يا دكتور فأنت إنسان محترم قبل أن تكون دكتور اتمنى لك التوفيق في جميع مراحل حياتك",
              },
            },
          },
          footer: {
            description:
              "جميع خدماتنا منذ بداية الرحلة العلاجية والاستماع للشكوى ثم الكشف السريري مرورا بالفحوصات التشخيصية انتهاء بالعلاج والعمليات التداخلية تتم في مكان واحد على كورنيش النيل في القاهرة - مصر.",
            buttons: {
              about: "حول",
              certificates: "الشهادات",
              book: "الكتاب",
              locations: "أماكننا",
            },
          },
          locationsPage: {
            bannerSection: {
              title: "الأماكن",
              description:
                "الدكتور عبد الستار أحمد نصر هو طبيب قلب مشهور مقيم في القاهرة، ويعمل في مستشفى المقطم HIO، وهو مركز ثالثي لأمراض القلب، وفي عيادته الواقعة على كورنيش النيل في روض الفرج. وقد بدأ مؤخرًا أيضًا في تقديم خدمات رعاية القلب المتخصصة في مسقط رأسه في منطقة الدلتا، مما يضمن حصول المزيد من المجتمعات على رعاية عالية الجودة.",
            },
            buttons: {
              btn1: "كورنيش النيل, القاهرة",
              btn2: "العلاج عن بعد - زيارة منزلية",
              btn3: "كفر شكر, القليوبية",
            },
            locations: {
              nileLocation: {
                title: "كورنيش النيل, القاهرة",
                location:
                  "12 أبراج آغا خان - بجوار معهد ناصر - أمام ماكدونالدز ولابوار",
                telephone: "201006730022+",
                workingHours: "الأحد والثلاثاء والخميس - من الساعة 3 مساءً",
                note: "يرجى متابعة سكرتارية العيادة يوم الأحد للتأكد من وجود تأخيرات محتملة بسبب العمليات الجراحية",
                extra: {
                  getDirections: "الحصول على الاتجاهات",
                  ContactSecretary: "الاتصال بالسكرتير",
                },
              },
              homeVisit: {
                telemedicineService: {
                  title: "خدمة العلاج عن بعد",
                  subTitle:
                    "يمكنك حجز موعد مع الدكتور عبد الستار من خلال خدمة مكالمة الفيديو",
                  description:
                    "تشمل خدماتنا استشارات القلب عن بعد. العلاج عن بعد هو طريقة معتمدة من قبل الجمعية الأمريكية للقلب لمساعدتك في متابعة خطة العلاج الخاصة بك.",
                  buttonText: "إقرأ المزيد",
                },
                homeVisitService: {
                  title: "زيارة منزلية",
                  subTitle:
                    "يقدم الدكتور عبد الستار أيضًا زيارات منزلية لأولئك الذين يفضلون الراحة والخصوصية في منزلهم للاستشارات الطبية والفحوصات الطبية.",
                  description:
                    "تشمل خدمة الزيارة المنزلية فحصًا سريريًا كاملاً، ورسمًا للقلب، وايكو، واختبارات أخرى ضرورية لضمان تلقيك أفضل رعاية ممكنة دون مغادرة منزلك. مع راحة الزيارات المنزلية، لم يكن من السهل متابعة خطة العلاج الخاصة بك.",
                },
              },
              kafrShukr: {
                title: "كفر شكر, القليوبية",
                location:
                  "مستشفى كيان التخصصي - طريق المنصورة بنها - إسنيط - بجوار مسجد الشراوي",
                telephone: "201143818340+, 201129191970+, 201143818304+",
                workingHours: "يوميًا في الساعة 9 مساءً عدا الأربعاء",
                note: "يرجى متابعة سكرتارية العيادة يوم الأحد للتأكد من وجود تأخيرات محتملة بسبب العمليات الجراحية",
                extra: {
                  ultraSound: {
                    title: "عيادة الأشعة التلفزيونية للقلب",
                    subTitle: "مركز أ. د. حمادة خاطر للأشعة التلفزيونية",
                    description: "متاح يوميًا عدا الأربعاء بحجز مسبق",
                    telephone: "20132517017+",
                  },
                  getDirections: "الحصول على الاتجاهات",
                  ContactSecretary: "الاتصال بالسكرتير",
                },
              },
            },
          },
          bookPage: {
            bookName: "دليلك في ضعف عضلة القلب",
            Author: "بواسطة الدكتور عبدالستار أحمد نصر",
            title: "حول الكتاب",
            description:
              "التعايش مع ضعف عضلة القلب قد يكون مرهقًا ومليئًا بالتحديات، لكن الفهم العميق للحالة يجعل الرحلة أقل صعوبة. هذا الكتاب كُتب بروح من التعاطف ليكون رفيقًا للمرضى وأحبائهم، يساعدهم على مواجهة معاناة المرض بتفهم وأمل. من خلال شروحات وتوجيهات واضحة، يقدم الكتاب دعمًا حقيقيًا ونصائح عملية لتحسين جودة الحياة وتخفيف وطأة المرض.",
            date: "قادم في خريف 2025",
            preOrder: "اطلب مسبقًا الآن",
            buttons: {
              amazon: "أمازون",
              bookstore: "المكتبة",
              address: {
                title: "قم بزيارتنا",
                Details: "قريبا",
              },
            },
          },
        },
      },
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
