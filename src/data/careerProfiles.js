import { skills } from './skills';

export const careerProfiles = [
    {
        id: 'data-analyst',
        path: '/data_analyst',
        number: '01',
        title: 'Data Analyst',
        tagline: 'Turning raw data into useful insights.',
        intro:
            'I analyze, clean and interpret data to identify patterns, trends and meaningful insights that support better decisions across financial, commercial, and operational domains.',
        expertise: [
            'Data Analysis',
            'SQL',
            'Python',
            'Power BI',
            'Excel',
            'Data Visualization'
        ],
        skillNames: [
            'Python',
            'SQL',
            'Power BI',
            'Excel',
            'Pandas & NumPy',
            'Data Visualization',
            'MySQL & MongoDB',
            'Scikit-learn'
        ],
        strengths: [
            'Data cleaning and advanced preparation',
            'Exploratory data analysis & feature study',
            'Commercial KPI and sales trend analysis',
            'Interactive executive dashboard creation',
            'Actionable analytical problem solving'
        ],
        projects: [
            {
                order: 1,
                title: 'Blinkit Grocery Sales & Performance Analytics Dashboard',
                description:
                    'An executive-grade Power BI commercial dashboard engineered to track total sales, item volume distribution, outlet ratings, and tier-wise performance metrics for retail optimization.',
                images: [
                    '/images/projects/blinkit-dashboard/blinkit-1.png',
                    '/images/projects/blinkit-dashboard/blinkit-2.png',
                    '/images/projects/blinkit-dashboard/blinkit-3.png',
                    '/images/projects/blinkit-dashboard/blinkit-4.png',
                    '/images/projects/blinkit-dashboard/blinkit-5.png'
                ],
                tech: ['Power BI', 'Excel', 'Data Visualization', 'DAX'],
                highlights: [
                    'Comprehensive $1.20M sales KPI tracking overview',
                    'Outlet establishment trend analysis across years',
                    'Tier-1, Tier-2, and Tier-3 location breakdown',
                    'Fat content vs item type revenue correlation'
                ]
            },
            {
                order: 2,
                title: 'Meta Ad Campaign & Social Performance Analytics',
                description:
                    'A specialized analytics dashboard designed to evaluate advertising campaign reach, conversion rates, audience demographics, and campaign ROI metrics.',
                images: [
                    '/images/projects/meta-dashboard/meta-dashboard-1.png',
                    '/images/projects/meta-dashboard/meta-dashboard-2.png'
                ],
                tech: ['Power BI', 'Data Analysis', 'Excel', 'Data Visualization'],
                highlights: [
                    'Ad spend vs conversion ROI evaluation',
                    'Audience demographic and click-through tracking',
                    'Campaign performance trend analysis',
                    'Interactive filtering by region and objective'
                ]
            },
            {
                order: 3,
                title: 'Credit Card Fraud & Transaction Analytics System',
                description:
                    'A robust data analytics system examining over 280K financial transactions to uncover high-risk anomaly patterns, transaction time distribution, and fraud distribution categories.',
                images: [
                    '/images/projects/fraud-dashboard/fraud-dashboard-1.png',
                    '/images/projects/fraud-dashboard/fraud-dashboard-2.png',
                    '/images/projects/fraud-dashboard/fraud-dashboard-3.png',
                    '/images/projects/fraud-dashboard/fraud-dashboard-4.png'
                ],
                tech: ['Power BI', 'Python', 'SQL', 'Data Visualization'],
                highlights: [
                    'Analyzed 285K+ financial transactions and total volume',
                    'Category-wise fraud percentage classification',
                    'Hourly transaction spike and normal pattern mapping',
                    'Precision-focused anomaly metrics overview'
                ]
            },
            {
                order: 4,
                title: 'AI-Driven Faculty Performance Analytics System',
                description:
                    'An institutional analytics dashboard designed to monitor and evaluate faculty metrics, historical performance trends, and multi-parameter score logs.',
                images: [
                    '/images/projects/faculty-analytics/FPS-1.png',
                    '/images/projects/faculty-analytics/FPS-2.png',
                    '/images/projects/faculty-analytics/FPS-3.png',
                    '/images/projects/faculty-analytics/FPS-4.png',
                    '/images/projects/faculty-analytics/FPS-5.png'
                ],
                tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
                highlights: [
                    'System dashboard tracking real-time faculty metrics',
                    'Individual performance card audit and evaluation',
                    'Automated score logging and strategic summary view',
                    'Confusion matrix and precision analysis charts'
                ]
            }
        ]
    },

    {
        id: 'bi-analyst',
        path: '/bi_analyst',
        number: '02',
        title: 'BI Analyst',
        tagline: 'Turning insights into business decisions.',
        intro:
            'I transform complex commercial data into structured interactive reports, executive dashboards, and visual metrics that make strategic decision-making clear and instant.',
        expertise: [
            'Business Intelligence',
            'Power BI',
            'SQL',
            'Excel',
            'KPI Reporting',
            'Data Visualization'
        ],
        skillNames: [
            'Power BI',
            'Excel',
            'SQL',
            'Data Visualization',
            'Python',
            'Pandas & NumPy',
            'MySQL & MongoDB'
        ],
        strengths: [
            'Business-focused commercial analysis',
            'Dynamic dashboard architecture',
            'Executive KPI tracking and reporting',
            'Advanced SQL data modeling',
            'Intuitive visual data storytelling'
        ],
        projects: [
            {
                order: 1,
                title: 'Blinkit Grocery Sales & Performance Analytics Dashboard',
                description:
                    'A flagship commercial intelligence dashboard delivering granular visibility into outlet performance, item visibility ratings, and revenue generation structures.',
                images: [
                    '/images/projects/blinkit-dashboard/blinkit-1.png',
                    '/images/projects/blinkit-dashboard/blinkit-2.png',
                    '/images/projects/blinkit-dashboard/blinkit-3.png',
                    '/images/projects/blinkit-dashboard/blinkit-4.png',
                    '/images/projects/blinkit-dashboard/blinkit-5.png'
                ],
                tech: ['Power BI', 'Excel', 'DAX', 'Data Visualization'],
                highlights: [
                    'Real-time filter panel for outlet size and locations',
                    'Average sales and customer rating metrics breakdown',
                    'Supermarket Tier distribution and outlet type comparison',
                    'Item type revenue contribution rankings'
                ]
            },
            {
                order: 2,
                title: 'Meta Ad Campaign & Social Performance Analytics',
                description:
                    'An executive BI dashboard tracking advertising expenditure efficiency, impression ratios, conversion funnels, and marketing ROI.',
                images: [
                    '/images/projects/meta-dashboard/meta-dashboard-1.png',
                    '/images/projects/meta-dashboard/meta-dashboard-2.png'
                ],
                tech: ['Power BI', 'DAX', 'Excel', 'Data Visualization'],
                highlights: [
                    'Marketing funnel and conversion rate analysis',
                    'Cost per acquisition and engagement tracking',
                    'Visual comparative breakdown of ad campaigns',
                    'Dynamic KPI indicators for rapid insights'
                ]
            },
            {
                order: 3,
                title: 'Credit Card Fraud Analytics & Monitoring BI',
                description:
                    'A specialized business intelligence view tracking financial risk exposure, transaction volume anomalies, and hourly fraud distributions.',
                images: [
                    '/images/projects/fraud-dashboard/fraud-dashboard-1.png',
                    '/images/projects/fraud-dashboard/fraud-dashboard-2.png',
                    '/images/projects/fraud-dashboard/fraud-dashboard-3.png',
                    '/images/projects/fraud-dashboard/fraud-dashboard-4.png'
                ],
                tech: ['Power BI', 'SQL', 'Data Analytics'],
                highlights: [
                    'Executive summary cards for fraud transaction volume',
                    'Amount category risk distribution analysis',
                    'Hourly normal vs fraud traffic comparative graphs',
                    'Dynamic filter panels for high-value risk tracking'
                ]
            }
        ]
    },

    {
        id: 'data-scientist',
        path: '/data_scientist',
        number: '03',
        title: 'Data Scientist',
        tagline: 'Finding patterns and building predictions.',
        intro:
            'I use Python, statistical data processing, and machine-learning algorithms to discover hidden patterns, build robust predictive workflows, and evaluate analytical models.',
        expertise: [
            'Machine Learning',
            'Python',
            'Data Processing',
            'Prediction',
            'Model Evaluation',
            'Data Visualization'
        ],
        skillNames: [
            'Python',
            'Pandas & NumPy',
            'Machine Learning',
            'Scikit-learn',
            'Data Visualization',
            'SQL',
            'MySQL & MongoDB'
        ],
        strengths: [
            'End-to-end machine learning pipelines',
            'Classification and anomaly detection modeling',
            'Rigorous data preprocessing & feature scaling',
            'Model evaluation metrics & confusion matrices',
            'Algorithmic problem solving'
        ],
        projects: [
            {
                order: 1,
                title: 'Credit Card Fraud Detection & Prediction System',
                description:
                    'An advanced machine learning solution deploying multiple classification algorithms (Logistic Regression, Isolation Forest, SVM) to detect financial anomalies in real-time.',
                images: [
                    '/images/projects/fraud-detection/CCFD-1.png',
                    '/images/projects/fraud-detection/CCFD-2.png',
                    '/images/projects/fraud-detection/CCFD-3.png'
                ],
                tech: ['Python', 'Scikit-learn', 'FastAPI', 'Pandas', 'NumPy'],
                highlights: [
                    'Real-time anomaly scanner with 5,000+ test records',
                    'Comparative model evaluation (SVM Kernel & Isolation Forest)',
                    'Global dataset parameter overview and statistical distribution',
                    'Automated AI verdict vs historical baseline engine'
                ]
            },
            {
                order: 2,
                title: 'AI-Driven Faculty Performance Prediction Engine',
                description:
                    'A predictive intelligence framework utilizing Random Forest and advanced classification modeling to evaluate institutional performance and forecast trends.',
                images: [
                    '/images/projects/faculty-analytics/FPS-1.png',
                    '/images/projects/faculty-analytics/FPS-2.png',
                    '/images/projects/faculty-analytics/FPS-3.png',
                    '/images/projects/faculty-analytics/FPS-4.png',
                    '/images/projects/faculty-analytics/FPS-5.png'
                ],
                tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
                highlights: [
                    'Achieved 96.4% predictive model precision accuracy',
                    'Confusion matrix validation (True Positive / True Negative)',
                    'Automated faculty scoring and AI strategic summary',
                    'Research-to-feedback ratio trend evaluations'
                ]
            }
        ]
    },

    {
        id: 'python-developer',
        path: '/python_developer',
        number: '04',
        title: 'Python Developer',
        tagline: 'Building practical data-driven applications.',
        intro:
            'I develop scalable Python applications, robust backend REST APIs, and integrated database solutions that seamlessly power machine learning and analytics workflows.',
        expertise: [
            'Python Development',
            'FastAPI',
            'Django',
            'REST APIs',
            'Databases',
            'Machine Learning'
        ],
        skillNames: [
            'Python',
            'FastAPI & Django',
            'REST APIs',
            'MySQL & MongoDB',
            'Pandas & NumPy',
            'Scikit-learn',
            'Machine Learning',
            'GitHub'
        ],
        strengths: [
            'Python application architecture',
            'FastAPI & Django backend development',
            'RESTful API creation & integration',
            'Relational and NoSQL database management',
            'Seamless AI model deployment'
        ],
        projects: [
            {
                order: 1,
                title: 'Sentinel AI - Credit Card Fraud Detection Portal',
                description:
                    'A full-stack Python application built with FastAPI backend infrastructure, MongoDB database persistence, and loaded machine-learning prediction models.',
                images: [
                    '/images/projects/fraud-detection/CCFD-1.png',
                    '/images/projects/fraud-detection/CCFD-2.png',
                    '/images/projects/fraud-detection/CCFD-3.png'
                ],
                tech: ['Python', 'FastAPI', 'MongoDB', 'Scikit-learn', 'REST APIs'],
                highlights: [
                    'FastAPI asynchronous backend integration',
                    'Secure financial portal architecture with system ready status',
                    'MongoDB transactional database operations',
                    'Embedded model evaluation and metrics inspection UI'
                ]
            },
            {
                order: 2,
                title: 'AI Faculty Performance Web Application',
                description:
                    'A structured Python web application featuring automated evaluation logs, quick lookup search engines, and modular analytical reporting components.',
                images: [
                    '/images/projects/faculty-analytics/FPS-1.png',
                    '/images/projects/faculty-analytics/FPS-2.png',
                    '/images/projects/faculty-analytics/FPS-3.png',
                    '/images/projects/faculty-analytics/FPS-4.png',
                    '/images/projects/faculty-analytics/FPS-5.png'
                ],
                tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
                highlights: [
                    'Modular application architecture and routing',
                    'Dynamic search lookup engine for faculty records',
                    'Automated status update and notification handlers',
                    'Clean and maintainable object-oriented code'
                ]
            }
        ]
    }
];

export const getCareerProfile = (id) => {
    return careerProfiles.find((profile) => profile.id === id);
};

export const getCareerProfileSkills = (profile) => {
    return profile.skillNames
        .map((name) => skills.find((skill) => skill.name === name))
        .filter(Boolean);
};