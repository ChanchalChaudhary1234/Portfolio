import React, { useMemo, useState } from 'react';
import {
    ArrowUpRight,
    Award,
    BriefcaseBusiness,
    CalendarDays,
    CheckCircle2,
    GraduationCap,
    MapPin,
    Sparkles,
    Compass
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const journey = [
    {
        id: 'bca',
        category: 'education',
        categoryLabel: 'Education',
        year: '2021 – 2024',
        sortDate: '2021-01',
        title: 'Bachelor of Computer Applications',
        organization: 'Bhimrao Ambedkar University',
        location: 'Agra, Uttar Pradesh',
        description:
            'Completed a Bachelor of Computer Applications, building a robust academic foundation in computer programming, software logic, and core technology principles.',
        highlights: [
            'Graduated in 2024 with 75.02%',
            'Strong foundation in computer applications',
            'Core programming & technical principles'
        ],
        icon: GraduationCap
    },
    {
        id: 'croma-campus',
        category: 'experience',
        categoryLabel: 'Experience',
        year: 'Jul 2025 – Aug 2025',
        sortDate: '2025-07',
        title: 'AI & ML with Live Project Intern',
        organization: 'Croma Campus',
        location: 'India',
        description:
            'Gained hands-on exposure to end-to-end machine learning pipelines, data preprocessing techniques, and exploratory data analysis using Python.',
        highlights: [
            'Python, Pandas & NumPy data processing',
            'Data preprocessing & cleaning workflows',
            'Practical machine learning model exposure'
        ],
        icon: BriefcaseBusiness
    },
    {
        id: 'mca',
        category: 'education',
        categoryLabel: 'Education',
        year: '2024 – 2026',
        sortDate: '2024-07',
        title: 'Master of Computer Applications',
        organization: 'IIMT College of Engineering',
        location: 'Greater Noida, Uttar Pradesh',
        description:
            'Advanced studies focused on specialized software development, algorithmic design, database management systems, and modern tech architectures.',
        highlights: [
            'Outstanding Academic Standing (CGPA: 8.61)',
            'Advanced software engineering concepts',
            'Database design & scalable computing'
        ],
        icon: GraduationCap
    },
    {
        id: 'qspiders',
        category: 'training',
        categoryLabel: 'Training',
        year: 'Mar 2026 – Present',
        sortDate: '2026-03',
        title: 'Python Development & Data Analytics Training',
        organization: 'QSpiders',
        location: 'India',
        description:
            'Intensive professional training program sharpening real-world Python development, Django frameworks, advanced SQL, and data analytics problem-solving.',
        highlights: [
            'Advanced Python & Django development',
            'Complex SQL queries & database handling',
            'Object-Oriented Programming (OOP) mastery'
        ],
        icon: Sparkles,
        current: true
    },
    {
        id: 'deloitte',
        category: 'certification',
        categoryLabel: 'Certification',
        year: 'Completed',
        sortDate: '2026-04',
        title: 'Data Analytics Job Simulation',
        organization: 'Deloitte',
        location: 'Virtual',
        description:
            'Successfully completed the Deloitte Data Analytics professional simulation, demonstrating practical data interpretation and client reporting skills.',
        highlights: [
            'Professional workplace data simulation',
            'Actionable business insight generation',
            'Analytical reporting & structuring'
        ],
        icon: Award
    }
];

const filters = [
    { id: 'all', label: 'All Milestones' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'training', label: 'Training' },
    { id: 'certification', label: 'Certifications' }
];

const foundation = [
    'Python',
    'SQL',
    'Data Analytics',
    'Power BI',
    'Machine Learning',
    'FastAPI',
    'Databases',
    'Problem Solving'
];

export default function ExperienceSection() {
    const { darkMode } = useTheme();
    const [activeFilter, setActiveFilter] = useState('all');

    const theme = {
        section: darkMode
            ? 'bg-[#08090b] text-white'
            : 'bg-[#f5f0e7] text-slate-900',

        eyebrow: darkMode
            ? 'text-[#f4dfb5]'
            : 'text-[#8d713d]',

        heading: darkMode
            ? 'text-white'
            : 'text-slate-950',

        paragraph: darkMode
            ? 'text-slate-400'
            : 'text-slate-600',

        card: darkMode
            ? 'border-white/10 bg-[#0d1015]/85 shadow-2xl hover:border-[#f4dfb5]/30'
            : 'border-slate-900/10 bg-white/80 shadow-xl hover:border-[#c9ae78]/50',

        muted: darkMode
            ? 'text-slate-500'
            : 'text-slate-500',

        divider: darkMode
            ? 'border-white/10'
            : 'border-slate-900/10',

        tag: darkMode
            ? 'border-white/10 bg-white/[0.045] text-slate-300'
            : 'border-slate-900/10 bg-slate-100/90 text-slate-700'
    };

    const filteredJourney = useMemo(() => {
        const items =
            activeFilter === 'all'
                ? journey
                : journey.filter((item) => item.category === activeFilter);

        return [...items].sort((a, b) =>
            a.sortDate.localeCompare(b.sortDate)
        );
    }, [activeFilter]);

    return (
        <section
            id="experience"
            className={`relative overflow-hidden py-10 sm:py-14 lg:py-16 transition-colors duration-700 ${theme.section}`}
        >
            {/* Atmospheric Background Glows */}
            <div
                className={`absolute -top-40 -right-40 h-[450px] w-[450px] rounded-full blur-[150px] pointer-events-none ${darkMode
                        ? 'bg-[#d9b978]/[0.025]'
                        : 'bg-[#d9b978]/[0.08]'
                    }`}
            />
            <div
                className={`absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full blur-[150px] pointer-events-none ${darkMode
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
                            Experience & Journey
                        </div>

                        <h2
                            className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] ${theme.heading}`}
                        >
                            From academic learning to{' '}
                            <span className={theme.eyebrow}>
                                real-world impact.
                            </span>
                        </h2>

                        <p
                            className={`mt-3 max-w-2xl text-sm leading-6 ${theme.paragraph}`}
                        >
                            A detailed timeline of the education, professional training, and hands-on experiences that built my expertise in data analytics and software engineering.
                        </p>
                    </div>

                    <div
                        className={`shrink-0 text-5xl sm:text-6xl lg:text-7xl font-black leading-none select-none ${darkMode
                                ? 'text-white/[0.04]'
                                : 'text-slate-200'
                            }`}
                    >
                        05
                    </div>
                </div>

                {/* Filter Tabs */}
                <div
                    className={`rounded-2xl border p-2 mb-8 ${theme.card}`}
                >
                    <div className="flex flex-wrap gap-1">
                        {filters.map((filter) => {
                            const isActive = activeFilter === filter.id;

                            return (
                                <button
                                    key={filter.id}
                                    type="button"
                                    onClick={() =>
                                        setActiveFilter(filter.id)
                                    }
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${isActive
                                            ? 'bg-[#f4dfb5] text-slate-950 shadow-md'
                                            : darkMode
                                                ? 'text-slate-400 hover:text-white hover:bg-white/5'
                                                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                                        }`}
                                >
                                    {filter.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Section Sub-header */}
                <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                        <p
                            className={`text-[10px] uppercase tracking-[0.22em] font-bold ${theme.eyebrow}`}
                        >
                            {activeFilter === 'all'
                                ? 'Complete Milestone Timeline'
                                : `${filters.find((f) => f.id === activeFilter)?.label} Timeline`}
                        </p>
                        <h3
                            className={`mt-1 text-xl sm:text-2xl font-extrabold ${theme.heading}`}
                        >
                            Milestones & Achievements
                        </h3>
                    </div>

                    <div
                        className={`hidden sm:flex items-center gap-2 text-xs font-semibold ${theme.muted}`}
                    >
                        <CalendarDays className="w-4 h-4" />
                        <span>{filteredJourney.length} recorded milestones</span>
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div
                        className={`absolute left-[18px] sm:left-[23px] top-4 bottom-4 w-px ${darkMode ? 'bg-white/10' : 'bg-slate-900/10'
                            }`}
                    />

                    <div className="space-y-6">
                        {filteredJourney.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.id}
                                    className="relative pl-12 sm:pl-16 group"
                                >
                                    {/* Timeline Node Icon */}
                                    <div
                                        className={`absolute left-0 top-5 w-9 h-9 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center bg-[#f4dfb5] text-slate-950 shadow-lg transition-transform duration-300 group-hover:scale-110 ${darkMode
                                                ? 'border-[#f4dfb5]/30'
                                                : 'border-[#c9ae78]/50'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>

                                    {/* Card Content */}
                                    <div
                                        className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${theme.card}`}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2.5">
                                                    <span
                                                        className={`text-[10px] uppercase tracking-[0.2em] font-extrabold ${theme.eyebrow}`}
                                                    >
                                                        {item.categoryLabel}
                                                    </span>

                                                    <span
                                                        className={`w-1 h-1 rounded-full ${darkMode ? 'bg-white/30' : 'bg-slate-400'
                                                            }`}
                                                    />

                                                    <span
                                                        className={`text-xs font-semibold ${theme.muted}`}
                                                    >
                                                        {item.year}
                                                    </span>

                                                    {item.current && (
                                                        <span className="px-2.5 py-0.5 rounded-full bg-[#f4dfb5] text-slate-950 text-[9px] font-black uppercase tracking-wider shadow-sm">
                                                            Active / Current
                                                        </span>
                                                    )}
                                                </div>

                                                <h4
                                                    className={`mt-2 text-xl sm:text-2xl font-extrabold tracking-tight ${theme.heading}`}
                                                >
                                                    {item.title}
                                                </h4>

                                                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                                                    <div
                                                        className={`flex items-center gap-1.5 text-xs font-bold ${theme.paragraph}`}
                                                    >
                                                        <BriefcaseBusiness className="w-3.5 h-3.5 text-[#8d713d] dark:text-[#f4dfb5]" />
                                                        <span>{item.organization}</span>
                                                    </div>

                                                    <div
                                                        className={`flex items-center gap-1.5 text-xs ${theme.muted}`}
                                                    >
                                                        <MapPin className="w-3 h-3" />
                                                        <span>{item.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p
                                            className={`mt-4 text-xs sm:text-sm leading-relaxed ${theme.paragraph}`}
                                        >
                                            {item.description}
                                        </p>

                                        {/* Highlights/Key Areas */}
                                        <div
                                            className={`mt-5 pt-4 border-t ${theme.divider}`}
                                        >
                                            <p
                                                className={`text-[9px] uppercase tracking-[0.2em] font-bold mb-3 ${theme.muted}`}
                                            >
                                                Key Focus & Takeaways
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                                {item.highlights.map((highlight) => (
                                                    <div
                                                        key={highlight}
                                                        className={`flex items-start gap-2 text-xs font-medium ${theme.paragraph}`}
                                                    >
                                                        <CheckCircle2
                                                            className={`w-4 h-4 mt-0.5 shrink-0 ${theme.eyebrow}`}
                                                        />
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {filteredJourney.length === 0 && (
                    <div
                        className={`rounded-2xl border p-10 text-center ${theme.card}`}
                    >
                        <p className={`text-sm font-semibold ${theme.paragraph}`}>
                            No entries available for this category.
                        </p>
                    </div>
                )}

                {/* Foundation Banner */}
                <div className="mt-12 sm:mt-14">
                    <div className="mb-4">
                        <div
                            className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-bold ${theme.eyebrow}`}
                        >
                            <Compass className="w-3.5 h-3.5" />
                            Core Technical Competencies
                        </div>

                        <h3
                            className={`mt-1.5 text-2xl sm:text-3xl font-extrabold ${theme.heading}`}
                        >
                            Where the journey leads next.
                        </h3>

                        <p
                            className={`mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed ${theme.paragraph}`}
                        >
                            Consistently expanding technical depth across core engineering stacks and modern data intelligence tools.
                        </p>
                    </div>

                    <div
                        className={`rounded-2xl border p-5 sm:p-6 ${darkMode
                                ? 'border-[#f4dfb5]/15 bg-[#f4dfb5]/[0.035]'
                                : 'border-[#c9ae78]/30 bg-[#f4dfb5]/20'
                            }`}
                    >
                        <div className="flex flex-wrap gap-2">
                            {foundation.map((item) => (
                                <span
                                    key={item}
                                    className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${theme.tag}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className={`mt-6 flex items-center gap-2 text-xs font-medium ${theme.muted}`}
                >
                    <ArrowUpRight className="w-4 h-4 text-[#8d713d] dark:text-[#f4dfb5]" />
                    <span>Continuously learning, building and growing through practical execution and real-world projects.</span>
                </div>

            </div>
        </section>
    );
}