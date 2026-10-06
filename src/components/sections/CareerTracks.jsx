import React from 'react';
import {
    ArrowRight,
    BarChart3,
    BrainCircuit,
    Code2,
    Layers3,
    Sparkles,
    Target
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import {
    careerProfiles,
    getCareerProfileSkills
} from '../../data/careerProfiles';

const icons = {
    'data-analyst': BarChart3,
    'bi-analyst': Layers3,
    'data-scientist': BrainCircuit,
    'python-developer': Code2
};

export default function CareerTracks() {
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
            ? 'border-white/10 bg-[#0d1015]/80 hover:border-[#f4dfb5]/40'
            : 'border-slate-900/10 bg-white/70 hover:border-[#c9ae78]/60',

        muted: 'text-slate-500',

        tag: darkMode
            ? 'border-white/10 bg-white/[0.045] text-slate-300'
            : 'border-slate-900/10 bg-slate-100/80 text-slate-600',

        divider: darkMode
            ? 'border-white/10'
            : 'border-slate-900/10'
    };

    const tracks = [...careerProfiles].sort(
        (a, b) => Number(a.number) - Number(b.number)
    );

    return (
        <section
            id="career-tracks"
            className={`relative overflow-hidden py-8 sm:py-12 lg:py-16 transition-colors duration-700 ${theme.section}`}
        >
            <div
                className={`absolute inset-x-0 top-0 h-24 pointer-events-none ${darkMode
                        ? 'bg-gradient-to-b from-[#08090b] to-transparent'
                        : 'bg-gradient-to-b from-[#f5f0e7] to-transparent'
                    }`}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto mb-8 sm:mb-10">
                    <div className="flex items-start justify-between gap-6">
                        <div className="max-w-4xl">
                            <div
                                className={`flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase ${theme.eyebrow}`}
                            >
                                <Sparkles className="w-3.5 h-3.5" />
                                Career Track
                            </div>

                            <h1
                                className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] ${theme.heading}`}
                            >
                                Four directions.{' '}
                                <span className={theme.eyebrow}>
                                    One analytical foundation.
                                </span>
                            </h1>

                            <p
                                className={`mt-4 max-w-2xl text-sm leading-6 ${theme.paragraph}`}
                            >
                                Explore the professional paths where my
                                analytical, technical and development skills
                                come together.
                            </p>
                        </div>

                        <div
                            className={`shrink-0 text-5xl sm:text-6xl lg:text-7xl font-black leading-none select-none ${darkMode
                                    ? 'text-white/[0.045]'
                                    : 'text-slate-200'
                                }`}
                        >
                            03
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {tracks.map((track) => {
                        const Icon = icons[track.id];
                        const trackSkills = getCareerProfileSkills(track);

                        return (
                            <a
                                key={track.id}
                                href={track.path}
                                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 sm:p-5 transition-all duration-500 hover:-translate-y-1 ${theme.card}`}
                            >
                                <div
                                    className={`absolute top-3 right-4 text-4xl font-black leading-none select-none ${darkMode
                                            ? 'text-white/[0.04]'
                                            : 'text-slate-200'
                                        }`}
                                >
                                    {track.number}
                                </div>

                                <div className="relative">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-[#f4dfb5] text-slate-950 flex items-center justify-center shadow-md shrink-0">
                                            <Icon className="w-4 h-4" />
                                        </div>

                                        <div
                                            className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-[#f4dfb5] group-hover:border-[#f4dfb5] group-hover:text-slate-950 ${darkMode
                                                    ? 'border-white/10 text-slate-400'
                                                    : 'border-slate-900/10 text-slate-500'
                                                }`}
                                        >
                                            <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <p
                                            className={`text-[8px] uppercase tracking-[0.2em] font-bold ${theme.eyebrow}`}
                                        >
                                            Track {track.number}
                                        </p>

                                        <h2
                                            className={`mt-0.5 text-lg font-extrabold tracking-tight ${theme.heading}`}
                                        >
                                            {track.title}
                                        </h2>

                                        <p
                                            className={`mt-1 text-[11px] font-medium line-clamp-1 ${theme.paragraph}`}
                                        >
                                            {track.tagline}
                                        </p>
                                    </div>

                                    <p
                                        className={`mt-2.5 text-[11px] leading-relaxed line-clamp-3 ${theme.paragraph}`}
                                    >
                                        {track.intro}
                                    </p>

                                    <div className="mt-3.5">
                                        <p
                                            className={`text-[8px] uppercase tracking-[0.18em] font-bold mb-2 ${theme.muted}`}
                                        >
                                            Core tech
                                        </p>

                                        <div className="flex flex-wrap gap-1">
                                            {trackSkills
                                                .slice(0, 3)
                                                .map((skill) => (
                                                    <span
                                                        key={skill.name}
                                                        className={`px-2 py-0.5 rounded-full border text-[8px] font-semibold ${theme.tag}`}
                                                    >
                                                        {skill.name}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`mt-4 pt-3 border-t flex items-center justify-between text-[10px] ${theme.divider}`}
                                >
                                    <span
                                        className={`font-bold ${theme.eyebrow}`}
                                    >
                                        View track
                                    </span>

                                    <ArrowRight
                                        className={`w-3 h-3 transition-transform group-hover:translate-x-1 ${theme.eyebrow}`}
                                    />
                                </div>
                            </a>
                        );
                    })}
                </div>

                <div
                    className={`mt-6 rounded-2xl border p-4 sm:p-5 ${darkMode
                            ? 'border-[#f4dfb5]/15 bg-[#f4dfb5]/[0.035]'
                            : 'border-[#c9ae78]/30 bg-[#f4dfb5]/20'
                        }`}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <div
                                className={`flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] font-bold ${theme.eyebrow}`}
                            >
                                <Target className="w-3 h-3" />
                                Career foundation
                            </div>

                            <h2
                                className={`mt-1 text-lg sm:text-xl font-extrabold ${theme.heading}`}
                            >
                                Data, intelligence & development.
                            </h2>

                            <p
                                className={`mt-1 max-w-2xl text-xs leading-relaxed ${theme.paragraph}`}
                            >
                                Each track builds on a common foundation of
                                Python, SQL, data analysis and practical
                                project work.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 lg:max-w-md lg:justify-end">
                            {[
                                'Python',
                                'SQL',
                                'Data Analysis',
                                'Machine Learning',
                                'BI',
                                'Backend'
                            ].map((item) => (
                                <span
                                    key={item}
                                    className={`px-2.5 py-1 rounded-full border text-[9px] font-semibold ${theme.tag}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}