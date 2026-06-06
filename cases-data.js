/* =============================================================
   Denis Bogdanov · Portfolio · cases-data.js
   ------------------------------------------------------------
   Single source of truth for all case-study content.
   Used by:
     • main.js   → renders the cards list on the home page
     • case.js   → renders the case detail page when loaded
                   with ?slug=... in the URL
   ------------------------------------------------------------
   Data shape per case:
     slug      kebab-case URL slug (also used as anchor on home)
     title     full case title (shown on card and detail)
     cover     image path used both on the card and as detail hero
     alt       alt text for the cover image
     intro     short paragraph used as card description AND as
               the lead paragraph under the detail page title
     sections  array of { heading, body[], list?[], images?[] }
   ============================================================= */

window.CASES = [
    /* ---------- 1 ---------- */
    {
        slug:  'sports-performance',
        title: 'The multi-platform sports performance application',
        cover: 'img/Case 1/pexels-elly-fairytale-3823207 1.png',
        alt:   'Sports playbook tactical board',
        intro: '…is a role-adaptive system designed for coaches, athletes, and parents. Built to support extensive video-based customization for schools, clubs, and regional sports organizations, the application offers a unified yet flexible experience powered by a scalable design system and integrated AI assistant to enhance training, strategy, and player development.',
        sections: [
            {
                heading: 'Why?',
                body: [
                    'Coaches, athletes, and sports organizations rely heavily on video, statistics, and performance analytics to improve individual and team performance. However, existing tools were fragmented, inconsistent across platforms, and varied dramatically depending on the user’s role and region.',
                    'The goal was to create a unified, intuitive, and flexible experience that could work seamlessly for coaches, athletes, parents, and administrators — on both mobile and desktop — while also supporting regional differences such as US high school sports, European clubs, and casual/amateur environments.'
                ]
            },
            {
                heading: 'Challenge',
                body: ['The project faced several major challenges:'],
                list: [
                    '<strong>Different usage patterns:</strong> Coaches primarily rely on desktop for analysis, while athletes use mobile for personal progress and highlights.',
                    '<strong>White-labeling and multiple forks:</strong> Each league, school, club, or federation required customized versions of the app.',
                    '<strong>Inconsistent UX across platforms:</strong> Mobile and desktop had evolved independently for years.',
                    '<strong>High development overhead:</strong> Lack of a unified design system slowed down implementation and increased maintenance complexity.',
                    '<strong>Regional differences in sports culture:</strong> Varying expectations, analytics depth, and user behavior across countries.'
                ],
                bodyAfter: [
                    'Additionally, the app required role-specific UX — coaches needed analytics, strategy, team and game review; athletes needed personalized clips, highlights and progress tracking; parents needed athlete tracking and simplified dashboards.',
                    'The product also had to integrate an advanced AI assistant (Tactix) that helped coaches analyze games and teams, and helped athletes generate personalized highlights, playlists, and areas of improvement.'
                ],
                images: ['img/Case 1/screenshots/UX Flow.png']
            },
            {
                heading: 'Research & Discovery',
                body: [
                    'To design an experience suitable for multiple user types, regions, and platforms, I built a comprehensive research framework combining qualitative, quantitative, and comparative methodologies.',
                    'We conducted structured interviews with coaches, athletes, parents, admins and camera operators — surfacing real-world workflows, moments of friction, and cross-platform expectations. From there I developed a multi-user-centric design model where each role received a tailored UX layer over a shared modular foundation.',
                    'We benchmarked competitors across sports analytics, athlete-focused apps, US high-school platforms and consumer media. We reviewed white-label usage metrics, clickstream and logs across dozens of forks to identify core functionality and eliminate legacy inconsistencies. Role-based journey maps revealed that the interface had to be context-aware — prioritising different tasks depending on the role-device combination.'
                ],
                images: [
                          ['img/Case 1/screenshots/b2cjourneymap.png', 'img/Case 1/screenshots/b2bjourneymap.png'],
                          ['img/Case 1/screenshots/Interview6.png', 'img/Case 1/screenshots/Synth Personas.png']              
                ]
                
            },
            {
                heading: 'Design & Functionality',
                body: [
                    'The UI dynamically adapts to the user’s role, emphasising the most relevant tools and content. A modular white-label architecture supports dozens of forks with unique branding, navigation, feature toggles and regional requirements.',
                    'Mobile is athlete-focused — quick-access, personal. Desktop is coach-focused — analysis-heavy, data-rich. Both are powered by a deeply tokenised, automated design system that is integrated into frontend code, dramatically reducing maintenance costs and eliminating inconsistencies across forks.'
                ],
                images: [
                    'img/Case 1/screenshots/Team Overview_Scolled.png',
                    
                    'img/Case 1/screenshots/Create tag_1-1.png',
                    'img/Case 1/screenshots/Highlight Creation.png'
                ]
            },
            {
                heading: 'Result',
                body: [
                    'A unified, scalable, and role-adaptive sports platform that delivers a cohesive experience across desktop and mobile, supports multiple roles and drastically different use cases, and scales across continents, leagues and skill levels.',
                    'The integrated AI analysis features greatly reduce engineering support needs and enable faster creation of new white-label versions. The platform is now actively rolled out across the US and Europe, with positive feedback from coaches, athletes, and administrators.'
                ],
                images: [
                    'img/Case 1/screenshots/Chart_ Event_Success.png',
                    'img/Case 1/screenshots/Chart_event_success_position.png'
                ]
            }
            

        ]
    },

    /* ---------- 2 ---------- */
    {
        slug:  'hmi-metro',
        title: 'HMI Application for Metro Operators',
        cover: 'img/Case 2/pexels-elly-fairytale-3823207 1 (1).png',
        alt:   'Metro operator workstation',
        intro: 'The HMI (Human-Machine Interface) application for metro operators is a complex system designed to monitor, control, and manage train movements, platform views, door operations, and speed adjustments. The system ensures the safe and efficient operation of metro fleets across different countries, each with its own safety regulations and operational requirements.',
        sections: [
            {
                heading: 'Why?',
                body: [
                    'The application is critical for the safe operation of metro systems, but its complexity and the lack of direct access to end-users (metro operators) pose significant challenges.',
                    'The interface must be intuitive, reliable, and adaptable to various regulatory environments, ensuring that operators can make quick, informed decisions without errors.'
                ]
            },
            {
                heading: 'Challenge',
                body: [
                    'The primary challenge was designing an interface that could handle the vast functionality of the system while adhering to strict safety regulations that vary by country. Additionally, the lack of direct feedback from end-users made it difficult to validate design decisions and ensure usability.'
                ],
                images: ['img/Case 2/screenshots/doha_2.png']
            },
            {
                heading: 'Research & Discovery',
                body: [
                    'Given the constraints, I proposed a Research-Driven Design Approach to identify potential pain points and ensure the interface met the needs of operators, even without direct user feedback.',
                    'Two weeks were dedicated to research and discovery: literature review of existing metro operation protocols and safety regulations across countries; stakeholder interviews with product owners, metro system engineers and trainers; and competitive analysis of HMI systems in aviation and rail to identify best practices and potential pitfalls.',
                    'Without direct end-user access, I relied on task analysis — breaking down operator tasks into smaller steps — and regulatory mapping to ensure the design could adapt to each country’s requirements. Accessibility was a key focus given the high-stress environment; low-light usability testing ensured the interface remained legible under various lighting conditions.'
                ],
                images: [
                    'img/Case 2/screenshots/Command Menu display flow.png',
                    'img/Case 2/screenshots/Menu Types.png'
                ]
            },
            {
                heading: 'Design & Functionality',
                body: [
                    'I focused on ensuring that critical functions like emergency stops, door controls and speed adjustments were easily accessible and protected from accidental activation. The team developed a shared UI library and design system to keep consistency across all features and screens.',
                    'Cross-team reviews aligned design decisions across overlapping areas — platform controls, train operations — and delivered a cohesive user experience throughout the application.'
                ],
                images: [
                    'img/Case 2/screenshots/System Status Screen 4.png',
                    'img/Case 2/screenshots/HD1.png',
                    'img/Case 2/screenshots/LO-1.png'
                ]
            },
            {
                heading: 'Result',
                body: [
                    'A comprehensive, secure, and user-friendly HMI application that met the needs of metro operators while adhering to strict safety regulations. The application is currently being rolled out in multiple countries, with positive feedback from stakeholders and trainers.',
                    'Operators reported the interface was intuitive and easy to navigate, even in high-stress situations. The design successfully adapted to the safety regulations of each country, ensuring compliance without compromising usability.'
                ],
                images: ['img/Case 2/screenshots/LO.png']
            }
        ]
    },

    /* ---------- 3 ---------- */
    {
        slug:  'emr-healthcare',
        title: 'EMR / Remote Healthcare services',
        cover: 'img/Case 3/Frame 427320256.png',
        alt:   'Medical equipment and monitors',
        intro: 'A comprehensive digital healthcare platform designed to manage clinical care end-to-end. The system facilitates the storage of patient information, examination records, treatment plans, medication history, and more — ensuring data privacy and accessibility for both patients and healthcare providers.',
        sections: [
            {
                heading: 'Why?',
                body: [
                    'The healthcare industry is highly regulated, with strict standards for data security and patient privacy. The platform needed to be intuitive, secure, and compliant with these regulations while providing a seamless experience for both healthcare providers and patients.',
                    'Over time, users began to encounter difficulties with the interface, particularly in managing complex patient data and conducting remote consultations.'
                ]
            },
            {
                heading: 'Challenge',
                body: [
                    'This project is used in various healthcare settings, including hospitals, clinics, and private practices. The interface needed to be clean, intuitive, and compliant with medical regulations, ensuring that healthcare providers could access and manage patient data efficiently while maintaining security and privacy.'
                ],
                images: ['img/Case 3/screenshots/Challenge.png']
            },
            {
                heading: 'Research & Discovery',
                body: [
                    'I proposed User Research based on the existing product to identify strengths and weaknesses. Two weeks were dedicated to customer interviews with doctors and nurses to understand their workflows, pain points, and needs; detailed customer journey maps were created to visualise how healthcare providers interact with the platform.',
                    'To measure where users struggled I tracked task success, efficiency, satisfaction and error rates. Accessibility testing identified items that did not meet healthcare guidelines, and those were addressed in the redesign. The output of this phase was a set of personas, customer journey maps and a prioritised list of pain points.'
                ],
                images: [
                          ['img/Case 3/screenshots/RD1.jpg', 'img/Case 3/screenshots/RD2.jpg'],
                          ['img/Case 3/screenshots/RD3.png', 'img/Case 3/screenshots/RD4.png']
                ]
            },
            {
                heading: 'Design & Functionality',
                body: [
                    'I introduced a new UX-driven design process and documentation, demonstrated to Product, Engineering and QA, with examples of healthy UX workflows and how they integrate into development. We then prepared wireframes, interactive prototypes and tested them with real users — iterating until the design met user needs.',
                    'To maintain consistency I created a shared UI library and Design System with all design elements and behaviours described, so engineering received consistent and predictable static mockups.'
                ],
                images: [
                          ['img/Case 3/screenshots/DF1.png', 'img/Case 3/screenshots/DF2.png'],
                          ['img/Case 3/screenshots/DF3.png', 'img/Case 3/screenshots/DF4.png']              
                ]
            },
            {
                heading: 'Result',
                body: [
                    'A comprehensive, secure, and user-friendly digital healthcare platform now used by hospitals and clinics to streamline patient data management, and to enable doctors to conduct remote consultations and monitor patient conditions in real-time.',
                    'Users reported a significant increase in their ability to complete tasks efficiently, the redesign minimized errors in data entry and navigation, and healthcare providers expressed greater satisfaction with the platform’s usability and functionality.'
                ],
               images: [
                          ['img/Case 3/screenshots/Result1.png', 'img/Case 3/screenshots/Result2.png'],
                          ['img/Case 3/screenshots/Result3.png', 'img/Case 3/screenshots/Result4.png']              
                ]
            }
        ]
    },

    /* ---------- 4 ---------- */
    {
        slug:  'cross-platform-meeting',
        title: 'Cross-platform meeting solution',
        cover: 'img/Case 4/Frame 427320256 (1).png',
        alt:   'Video conference grid',
        intro: 'A cross-platform meeting solution for team collaboration that speeds global alignment across the enterprise — allowing for better informed decisions, faster responses, and clearer next steps.',
        sections: [
            {
                heading: 'Why?',
                body: [
                    'The cross-platform product has a huge functionality, which every year becomes more and more. After a while, users began to encounter difficulties in interacting with the interface.'
                ]
            },
            {
                heading: 'Challenge',
                body: [
                    'This product is used in many areas, including medical and financial solutions. The interface should be clean, neat and understandable to everyone.'
                ],
            },
            {
                heading: 'Research & Discovery',
                body: [
                    'I suggested User Research based on the existing product to identify strengths and weaknesses. Week one was the product discovery phase — customer interviews and product overview. Week two was remote and in-person user interviews to collect user feedback, pain points and needs.',
                    'To understand the problems users were experiencing I tracked Happiness, Engagement, Adoption, Retention and Task success. Accessibility testing was conducted according to Section 508 guidelines (GSA Government-wide IT Accessibility Program) and a list of items that did not match was created.',
                    'Based on the research, we produced personas, customer journey maps and a list of problem points that needed improvement. A new UX-driven design workflow was introduced and walked through with Product, Engineering and QA.'
                ],
                images: [
                    'img/Case 4/screenshots/rtc6.png',
                    'img/Case 4/screenshots/rtc4.png',
                    'img/Case 4/screenshots/rtc7.png',
                    'img/Case 4/screenshots/rtc17.png'
                ]
            },
            {
                heading: 'Design & Functionality',
                body: [
                    'The next step was to prepare wireframes based on our solutions, create an interactive prototype and test it with real users. Even a small team of designers can struggle with consistency across many design documents covering multiple products — so I created a shared UI library and Design System with all design elements and described behaviour, so engineering received consistent and predictable static mockups.'
                ],
                images: [
                    'img/Case 4/screenshots/rtc2.png',
                    'img/Case 4/screenshots/rtc9.png'
                ]
            },
            {
                heading: 'Result',
                body: [
                    'A comprehensive, healthy and user-friendly product that is currently being used by 300 healthcare units, 500 financial institutions, and millions of users around the world.'
                ],
                images: [
                    'img/Case 4/screenshots/rtc12.png',
                    'img/Case 4/screenshots/rtc13.png',
                    'img/Case 4/screenshots/rtc15.png',
                    'img/Case 4/screenshots/rtc14.png',
                    'img/Case 4/screenshots/rtc10.png',
                    'img/Case 4/screenshots/rtc11.png',
                    'img/Case 4/screenshots/rtc16.png'
                ]
            }
        ]
    },

    /* ---------- 5 ---------- */
    {
        slug:  'japanese-isp',
        title: 'Japanese Internet & Web Service Provider Platform',
        cover: 'img/Case 5/Frame 427320256.png',
        alt:   'ISP platform devices',
        intro: 'A redesign of the UX and visual language for a Japanese internet and web service provider — a platform similar to AWS. The goal was to modernize the interface, improve usability, and ensure consistency across services. Accessibility compliance was a top priority alongside the creation of a unified design system.',
        sections: [
            {
                heading: 'Why?',
                body: [
                    'The platform, while functional, had an outdated interface that lacked consistency across its various services. With no direct access to end-users, the redesign relied on feedback from product owners, managers, and built-in analytics to guide decision-making.',
                    'The challenge was to create a user-friendly, accessible, and scalable design that could accommodate future features and services.'
                ]
            },
            {
                heading: 'Challenge',
                body: ['The main challenges included:'],
                list: [
                    '<strong>No direct access to end-users:</strong> testing and validation had to be conducted with product owners and managers, as well as through analytics and surveys.',
                    '<strong>Multiple services:</strong> the platform offered a wide range of services, each with its own unique requirements, making consistency a significant challenge.',
                    '<strong>Accessibility compliance:</strong> the design needed to meet strict accessibility standards to ensure inclusivity for all users.'
                ],
                images: [
                    'img/Case 5/screenshots/Ch1.png',
                    'img/Case 5/screenshots/Ch2.png'
                ]
            },
            {
                heading: 'Research & Discovery',
                body: [
                    'I started by analysing existing user behaviour data to identify pain points and areas for improvement, then conducted stakeholder interviews with product owners and managers to understand their needs and expectations. A competitive analysis of similar platforms (AWS, Azure) helped identify best practices and industry standards.',
                    'Since direct access to end-users was not possible, I relied on user-flow analysis through analytics data and stakeholder input. Accessibility was a top priority — I conducted accessibility audits and ensured all designs met WCAG standards, particularly for users with visual or motor impairments.'
                ],
                images: [
                    'img/Case 5/screenshots/RD1.png',
                    'img/Case 5/screenshots/RD2.png',
                    'img/Case 5/screenshots/RD3.png'
                ]
            },
            {
                heading: 'Design & Functionality',
                body: [
                    'I developed a comprehensive Design System: typography and colour schemes for a consistent visual language across all services; reusable UI components (buttons, forms, navigation elements) to streamline development; and templates for common user flows to reduce development time.',
                    'New features aligned with the design system and accessibility standards — including dashboard improvements for a more intuitive experience, and simplified navigation to make it easier for users to access different services. Regular syncs with the development team ensured seamless implementation.'
                ],
                images: [
                    'img/Case 5/screenshots/DF2.png',
                    'img/Case 5/screenshots/DF1.png',
                    'img/Case 5/screenshots/DF3.png'
                ]
            },
            {
                heading: 'AI-Powered Design Approach',
                body: [
                    'On this project I introduced an AI-powered design approach for the first time — a workflow that dramatically accelerated prototype development and covered the full flow from business analysis to dev-ready prototypes.',
                    'AI was woven into every step: generating early structure and content from BA inputs, producing rapid wireframe variations, refining UI mockups against the design system, and exporting clean, code-friendly prototypes for engineering. What used to take days of manual iteration collapsed into hours, freeing the team to focus on strategy, validation and craft instead of repetitive production work.'
                ],
                images: [
                    'img/Case 5/screenshots/ai1.png',
                    'img/Case 5/screenshots/ai2.png',
                    'img/Case 5/screenshots/ai3.png'
                ]
            },
            {
                heading: 'Result',
                body: [
                    'The redesign resulted in a modern, user-friendly, and accessible platform that improved usability and consistency across all services. The new Design System streamlined future development, making it easier to add new features and services.',
                    'Stakeholders reported the new design was more intuitive and easier to navigate; the platform met all required accessibility standards; and the Design System ensured a cohesive experience across services, reducing user confusion.'
                ],
                images: [
                    'img/Case 5/screenshots/R1.png',
                    'img/Case 5/screenshots/R3.png',
                    'img/Case 5/screenshots/R7.png',
                    'img/Case 5/screenshots/R2.png'
                ]
            }
        ]
    },

    /* ---------- 6 ---------- */
    {
        slug:  'money-transfer',
        title: 'Money transfer service',
        cover: 'img/Case 6/screenshots/img1.png',
        alt:   'Mobile money transfer app',
        intro: 'A product designed to simplify the transfer of funds between countries — without leaving home, from a phone or a computer. The flow is easy and user-friendly, ensuring that even those unfamiliar with digital transactions can navigate the system confidently.',
        sections: [
            {
                heading: 'Why?',
                body: [
                    'Initially, the product was developed as an MVP to test and assess the demand. When the product demonstrated positive results, the product owner decided that it was time to create a serious product ready for market release.'
                ]
            },
            {
                heading: 'Challenge',
                body: [
                    'A product that deals with user finances requires an interface that is clear and intuitive for everyone. It was essential to consider potential constraints and laws of other countries and provide information about them to users.',
                    'There are numerous competitors and similar products; the goal was to study them and make our product better.'
                ]
            },
            {
                heading: 'Research & Discovery',
                body: [
                    'After the design brief and interviews with the client, the decision was made to conduct market research. This was crucial to identify constraints, market size, market trends, and evaluate needs. I conducted a competitor analysis and gathered data on the four main SWOT metrics, identifying areas for improvement.',
                    'We were also able to interview a small number of users of our competitors and understand the problems they encountered. The following UX metrics were tracked: Happiness, Engagement, Adoption, Retention, Task success.',
                    'Methods of marketing and usability research do not work the same way — they address different questions and provide different answers. But both methods brought us good results, influencing the development and sustainability of the product, and minimising business risks.'
                ],
                images: [
                    'img/Case 6/screenshots/DF1.png'
                ]
            },
            {
                heading: 'Design & Functionality',
                body: [
                    'Based on our research, the target audience was identified along with the main product requirements and a content plan. User flows and a content map were created.',
                    'Afterward, I developed the initial wireframes and a prototype, conducted usability testing and user testing with potential product users. After two iterations, I proceeded with developing the UI style based on the company’s brand book and design system, and preparing UI layouts.'
                ],
                images: [
                    'img/Case 6/screenshots/DF2.png'
                ]
            },
            {
                heading: 'Result',
                body: [
                    'A web and mobile application that is actively used by thousands of users every day. While user growth figures cannot be disclosed, the UX metric "Happiness" for current users stands at 85% and "Retention" at 14% — indicating that users not only actively engage with the application but remain satisfied with its use over the long term.'
                ],
                images: [
                    'img/Case 6/screenshots/R1.png',
                    'img/Case 6/screenshots/R3.png',
                    'img/Case 6/screenshots/R2.png'
                ]
            }
        ]
    },

    /* ---------- 7 ---------- */
    {
        slug:  'wearable-healthcare',
        title: 'Wearable healthcare applications',
        cover: 'img/Case 7/screenshots/medwatch.png',
        alt:   'Smartwatch with health metrics',
        intro: 'Applications that provide personalized recovery plans and real-time monitoring — enabling patients to track progress and receive timely feedback from clinicians. The apps also incorporate advanced analytics to identify trends and improve treatment outcomes over time.',
        sections: [
            {
                heading: 'Why?',
                body: [
                    'The cross-platform product has a huge functionality, which every year becomes more and more. After a while, users began to encounter difficulties in interacting with the interface.'
                ]
            },
            {
                heading: 'Challenge',
                body: [
                    'The challenge was to design a wearable app that logs activity-level information collected from watch sensors, and its integration with a mobile app for one of the worldwide leading manufacturers of medical devices, dedicated to transforming lives through innovative medical solutions.'
                ],
            },
            {
                heading: 'Research & Discovery',
                body: [
                    'Due to medical and privacy restrictions, we had a limited number of potential end-users who agreed to participate in testing and answer questions. Based on the design brief, user and stakeholder interviews, we gathered information to create user personas.',
                    'After studying users, collecting a backlog, interviewing the client and conducting in-depth market research, we realised that one of the challenges would be battery consumption — people don’t want to charge their devices too often. We investigated the hardware part of the devices, specifications and manufacturer recommendations to understand how to minimise battery consumption.',
                    'From this we derived several recommendations to extend battery life and improve inclusivity: a simplified layout, sensible usage of colours and graphics, and fine lines and fonts.'
                ],
                images: [
                    'img/Case 7/screenshots/RD1.png',
                    'img/Case 7/screenshots/RD2.png'
                ]
            },
            {
                heading: 'Design & Functionality',
                body: [
                    'After the first prototype based on our research was ready, we conducted user testing and received positive feedback from potential users. Two iterations later the product was ready to adopt its initial visual style. Additionally, a design system was created along with a comprehensive set of guidelines for developers.'
                ],
                images: [
                    'img/Case 7/screenshots/DF1.png',
                    'img/Case 7/screenshots/DF2.png'
                ]
            },
            {
                heading: 'Result',
                body: [
                    'A watch application that is user-friendly for all age groups and battery-friendly. The mobile applications were synchronised and designed following the same principles and styling.'
                ],
                images: [
                    'img/Case 7/screenshots/R1.png',
                    'img/Case 7/screenshots/R2.png'
                ]
            }
        ]
    },

    /* ---------- 8 ---------- */
    {
        slug:  'multi-line-phone',
        title: 'Multi-line phone solution',
        cover: 'img/Case 8/Frame 427320256 (1).png',
        alt:   'Multi-line phone software UI',
        intro: 'A desktop app and 3rd-party extensions that connect office and mobile devices with one number. The solution provides effective tools to initiate, receive, and manage calls on the go — click-to-call, conferencing, video meetings, messaging, and more.',
        sections: [
            {
                heading: 'Challenge',
                body: [
                    'The main challenge is to create an application and extension that will efficiently work with other websites and sales solutions, call centers, covering a vast array of functionality within the limited space of a web browser window.',
                    'Non-technical users, who often change workplaces or work on the go, can also be added to the challenges.'
                ],
                images: ['img/Case 8/screenshots/mlps1.png']
            },
            {
                heading: 'Design decisions',
                body: [
                    'Design decisions were driven by user research findings and understanding of the user needs, goals, context of usage, and user emotional journey insights — as well as principles of consistency, smooth navigation and balance.',
                    'On this project, I was involved in the process of recruiting a design team and building the design process. I also participated in conducting user research, creating user flows, prototyping and user interviews.'
                ],
                images: [
                    'img/Case 8/screenshots/mlps2.png',
                    'img/Case 8/screenshots/mlps3.png',
                    'img/Case 8/screenshots/mlps4.png'
                ]
            },
            {
                heading: 'Result',
                body: [
                    'A design team of three people was assembled, working according to the established design process. The first two phases of the project were completed with positive feedback from the client and its users. The project is ongoing at the moment.'
                ],
                images: [
                    'img/Case 8/screenshots/mlps6.png',
                    'img/Case 8/screenshots/mlps7.png'
                ]
            }
        ]
    }
];
