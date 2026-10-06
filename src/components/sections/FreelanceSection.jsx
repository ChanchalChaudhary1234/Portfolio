import React from 'react';
import {
    ArrowRight,
    CheckCircle2,
    Mail,
    Sparkles,
    Briefcase
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function FreelanceSection({ onContactClick }) {
    const { darkMode } = useTheme();

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
            ? 'border-white/10 bg-[#0d1015]/85 shadow-2xl'
            : 'border-slate-900/10 bg-white/90 shadow-xl',

        muted: darkMode
            ? 'text-slate-500'
            : 'text-slate-500'
    };

    const capabilities = [
        'Advanced Data Analysis & Cleaning',
        'Interactive Power BI & Tableau Dashboards',
        'Custom Python Backend & Automation Scripts',
        'Machine Learning Models & Integration'
    ];

    return (
        <section
            id="freelance"
            className={`relative overflow-hidden py-8 sm:py-12 lg:py-14 transition-colors duration-700 ${theme.section}`}
        >
            {/* Atmospheric Background Glows */}
            <div
                className={`absolute -top-32 -left-32 h-[350px] w-[350px] rounded-full blur-[130px] pointer-events-none ${darkMode
                        ? 'bg-[#d9b978]/[0.025]'
                        : 'bg-[#d9b978]/[0.08]'
                    }`}
            />
            <div
                className={`absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full blur-[130px] pointer-events-none ${darkMode
                        ? 'bg-[#d9b978]/[0.02]'
                        : 'bg-[#d9b978]/[0.06]'
                    }`}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Row (Matching other sections like CareerTracks) */}
                <div className="flex items-start justify-between gap-6 mb-8 sm:mb-10">
                    <div className="max-w-3xl">
                        <div
                            className={`flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase ${theme.eyebrow}`}
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            Freelance & Collaboration
                        </div>

                        <h2
                            className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] ${theme.heading}`}
                        >
                            Let&apos;s build something{' '}
                            <span className={theme.eyebrow}>
                                meaningful together.
                            </span>
                        </h2>

                        <p
                            className={`mt-3 max-w-2xl text-sm leading-6 ${theme.paragraph}`}
                        >
                            Partner with me for specialized data solutions, insightful dashboard development, and high-performance Python applications tailored to your business goals.
                        </p>
                    </div>

                    <div
                        className={`shrink-0 text-5xl sm:text-6xl lg:text-7xl font-black leading-none select-none ${darkMode
                                ? 'text-white/[0.04]'
                                : 'text-slate-200'
                            }`}
                    >
                        04
                    </div>
                </div>

                {/* Main Content Grid with Expanded Image */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">

                    {/* Left Side: Larger Professional Image Card */}
                    <div className="relative">
                        <div
                            className={`relative overflow-hidden rounded-2xl border ${theme.card} group`}
                        >
                            <img
                                src="/images/profile/chanchal-professional.png"
                                alt="Chanchal Chaudhary"
                                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />

                            <div
                                className={`absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t ${darkMode
                                        ? 'from-[#0d1015] to-transparent'
                                        : 'from-[#ffffff]/90 to-transparent'
                                    }`}
                            />

                            <div className="absolute bottom-4 left-4 right-4">
                                <div
                                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-xl border ${darkMode
                                            ? 'bg-black/60 border-white/10 text-slate-200'
                                            : 'bg-white/90 border-slate-900/10 text-slate-700'
                                        }`}
                                >
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[11px] font-semibold">
                                        Open to selective freelance & consulting projects
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Expressive Content & Services */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#f4dfb5]/20 text-[#8d713d] dark:text-[#f4dfb5] text-[10px] font-bold uppercase tracking-wider mb-3">
                            <Briefcase className="w-3 h-3" />
                            End-to-End Execution
                        </div>

                        <h3
                            className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${theme.heading}`}
                        >
                            From raw data to crystal-clear business decisions.
                        </h3>

                        <p
                            className={`mt-3 text-xs sm:text-sm leading-relaxed ${theme.paragraph}`}
                        >
                            Whether you are a fast-growing startup needing an automated backend pipeline or an enterprise looking for deep exploratory data analysis, I deliver clean, maintainable, and high-impact results.
                        </p>

                        {/* Capabilities Detailed List */}
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {capabilities.map((item) => (
                                <div
                                    key={item}
                                    className={`flex items-center gap-2.5 text-xs font-semibold ${theme.heading}`}
                                >
                                    <CheckCircle2
                                        className={`w-4 h-4 shrink-0 ${theme.eyebrow}`}
                                    />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Bar */}
                        <div
                            className={`mt-7 pt-5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${darkMode
                                    ? 'border-white/10'
                                    : 'border-slate-900/10'
                                }`}
                        >
                            <button
                                onClick={onContactClick}
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#f4dfb5] hover:bg-[#f8e8c9] text-slate-950 text-xs font-bold transition-all hover:-translate-y-0.5 shadow-md cursor-pointer"
                            >
                                <Mail className="w-4 h-4" />
                                Discuss a Project
                                <ArrowRight className="w-3.5 h-3.5" />
                            </button>

                            <div>
                                <p
                                    className={`text-[9px] uppercase tracking-[0.18em] font-bold ${theme.muted}`}
                                >
                                    Status
                                </p>
                                <p
                                    className={`mt-0.5 text-xs font-semibold ${theme.heading}`}
                                >
                                    Available for Q4 Contracts
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}