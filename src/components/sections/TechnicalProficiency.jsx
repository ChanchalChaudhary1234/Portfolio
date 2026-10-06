import React from 'react';
import {
    Code2,
    Database,
    BarChart3,
    BrainCircuit,
    Server,
    GitBranch,
    NotebookPen,
    CheckCircle2,
    Sparkles
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const categories = [
    {
        title: 'Programming & Development',
        icon: Code2,
        description: 'Building robust applications, clean APIs and structured Python solutions.',
        skills: [
            { name: 'Python', level: 'Strong' },
            { name: 'OOP', level: 'Strong' },
            { name: 'Django', level: 'Working' },
            { name: 'REST APIs', level: 'Working' },
            { name: 'API Development', level: 'Working' }
        ]
    },
    {
        title: 'Data & Databases',
        icon: Database,
        description: 'Working with structured relational data, schema design and analytical workflows.',
        skills: [
            { name: 'SQL', level: 'Strong' },
            { name: 'MySQL', level: 'Strong' },
            { name: 'MongoDB', level: 'Working' },
            { name: 'Pandas', level: 'Strong' },
            { name: 'NumPy', level: 'Strong' }
        ]
    },
    {
        title: 'Analytics & Visualization',
        icon: BarChart3,
        description: 'Exploring datasets, uncovering hidden patterns and communicating clear insights.',
        skills: [
            { name: 'Data Analytics', level: 'Strong' },
            { name: 'Data Preprocessing', level: 'Strong' },
            { name: 'Matplotlib', level: 'Working' },
            { name: 'Seaborn', level: 'Working' },
            { name: 'Data Visualization', level: 'Working' }
        ]
    },
    {
        title: 'Machine Learning',
        icon: BrainCircuit,
        description: 'Developing, training and evaluating predictive machine learning workflows.',
        skills: [
            { name: 'Scikit-learn', level: 'Working' },
            { name: 'Regression', level: 'Working' },
            { name: 'Classification', level: 'Working' },
            { name: 'Model Evaluation', level: 'Working' },
            { name: 'ML Workflows', level: 'Working' }
        ]
    },
    {
        title: 'Backend & Systems',
        icon: Server,
        description: 'Developing backend functionality and securely connecting applications with data layers.',
        skills: [
            { name: 'Django', level: 'Working' },
            { name: 'REST APIs', level: 'Working' },
            { name: 'FastAPI', level: 'Working' },
            { name: 'MySQL', level: 'Strong' },
            { name: 'MongoDB', level: 'Working' }
        ]
    },
    {
        title: 'Tools & Workflow',
        icon: GitBranch,
        description: 'Essential environment and version control tools for experimentation and project execution.',
        skills: [
            { name: 'GitHub', level: 'Working' },
            { name: 'Jupyter Notebook', level: 'Strong' },
            { name: 'Google Colab', level: 'Strong' },
            { name: 'VS Code', level: 'Strong' }
        ]
    }
];

const levelWidth = {
    Strong: 'w-[88%]',
    Working: 'w-[72%]'
};

export default function TechnicalProficiency() {
    const { darkMode } = useTheme();

    const theme = {
        section: darkMode
            ? 'bg-[#03060d] text-white'
            : 'bg-[#f7f3eb] text-slate-900',

        heading: darkMode
            ? 'text-white'
            : 'text-slate-950',

        paragraph: darkMode
            ? 'text-slate-400'
            : 'text-slate-600',

        eyebrow: darkMode
            ? 'text-[#f4dfb5]'
            : 'text-[#8d713d]',

        card: darkMode
            ? 'border-white/10 bg-white/[0.025] shadow-2xl'
            : 'border-slate-900/10 bg-white/80 shadow-xl',

        cardHover: darkMode
            ? 'hover:border-[#f4dfb5]/30 hover:bg-white/[0.04]'
            : 'hover:border-[#c9ae78]/60 hover:bg-white',

        muted: darkMode
            ? 'text-slate-500'
            : 'text-slate-500',

        track: darkMode
            ? 'bg-white/10'
            : 'bg-slate-900/10'
    };

    return (
        <section
            id="technical-proficiency"
            className={`relative overflow-hidden py-10 sm:py-14 lg:py-16 transition-colors duration-700 ${theme.section}`}
        >
            {/* Background Glows */}
            <div
                className={`absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full blur-[160px] pointer-events-none ${darkMode
                        ? 'bg-[#d9b978]/[0.025]'
                        : 'bg-[#d9b978]/[0.08]'
                    }`}
            />
            <div
                className={`absolute -bottom-48 -right-48 h-[500px] w-[500px] rounded-full blur-[160px] pointer-events-none ${darkMode
                        ? 'bg-[#d9b978]/[0.02]'
                        : 'bg-[#d9b978]/[0.07]'
                    }`}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Row */}
                <div className="flex items-start justify-between gap-6 mb-8 sm:mb-10">
                    <div className="max-w-3xl">
                        <div
                            className={`flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase ${theme.eyebrow}`}
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            Technical Proficiency
                        </div>

                        <h2
                            className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] ${theme.heading}`}
                        >
                            Tools I use{' '}
                            <span className={theme.eyebrow}>
                                to turn ideas into solutions.
                            </span>
                        </h2>

                        <p
                            className={`mt-3 max-w-2xl text-sm leading-6 ${theme.paragraph}`}
                        >
                            A comprehensive breakdown of my technical capabilities across programming, data engineering, analytics, and machine learning.
                        </p>
                    </div>

                    <div
                        className={`shrink-0 text-5xl sm:text-6xl lg:text-7xl font-black leading-none select-none ${darkMode
                                ? 'text-white/[0.04]'
                                : 'text-slate-200'
                            }`}
                    >
                        06
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <article
                                key={category.title}
                                className={`group rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${theme.card} ${theme.cardHover}`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#f4dfb5] text-slate-950 flex items-center justify-center shadow-md">
                                        <Icon className="w-5 h-5" />
                                    </div>

                                    <span
                                        className={`text-[9px] uppercase tracking-[0.18em] font-bold ${theme.muted}`}
                                    >
                                        Domain Expertise
                                    </span>
                                </div>

                                <h3
                                    className={`mt-4 text-lg font-extrabold tracking-tight ${theme.heading}`}
                                >
                                    {category.title}
                                </h3>

                                <p
                                    className={`mt-1.5 text-xs leading-relaxed ${theme.paragraph}`}
                                >
                                    {category.description}
                                </p>

                                <div className="mt-5 space-y-3.5">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex items-center justify-between gap-3 mb-1">
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2
                                                        className={`w-3.5 h-3.5 shrink-0 ${theme.eyebrow}`}
                                                    />
                                                    <span
                                                        className={`text-xs font-semibold ${theme.heading}`}
                                                    >
                                                        {skill.name}
                                                    </span>
                                                </div>

                                                <span
                                                    className={`text-[9px] font-bold uppercase tracking-wider ${theme.muted}`}
                                                >
                                                    {skill.level}
                                                </span>
                                            </div>

                                            <div
                                                className={`h-1.5 rounded-full overflow-hidden ${theme.track}`}
                                            >
                                                <div
                                                    className={`h-full rounded-full bg-[#c9ae78] transition-all duration-700 ${levelWidth[skill.level]}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Working Approach Footer Card */}
                <div
                    className={`mt-8 rounded-2xl border p-5 sm:p-6 ${theme.card}`}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="w-10 h-10 rounded-xl bg-[#f4dfb5] text-slate-950 flex items-center justify-center shadow-md">
                                <NotebookPen className="w-4 h-4" />
                            </div>

                            <div>
                                <p
                                    className={`text-[9px] uppercase tracking-[0.2em] font-bold ${theme.eyebrow}`}
                                >
                                    Execution Methodology
                                </p>

                                <p
                                    className={`mt-0.5 text-xs font-extrabold ${theme.heading}`}
                                >
                                    Learn → Build → Analyze → Improve
                                </p>
                            </div>
                        </div>

                        <div
                            className={`hidden sm:block h-8 w-px ${darkMode ? 'bg-white/10' : 'bg-slate-900/10'
                                }`}
                        />

                        <p
                            className={`text-xs sm:text-sm leading-relaxed ${theme.paragraph}`}
                        >
                            I focus on continuously upgrading technical stacks and validating concepts through active project implementation and practical optimization.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}