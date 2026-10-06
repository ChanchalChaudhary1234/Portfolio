import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { profile } from "../../data/profile";
import { heroSkills } from "../../data/heroSkills";

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ onExploreWork }) {
    const { darkMode } = useTheme();
    const [roleIndex, setRoleIndex] = useState(0);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (reduceMotion || !profile.roles?.length) return undefined;

        const interval = setInterval(() => {
            setRoleIndex((current) => (current + 1) % profile.roles.length);
        }, 2400);

        return () => clearInterval(interval);
    }, [reduceMotion]);

    const scrollToSection = (sectionId) => {
        const elem = document.getElementById(sectionId);

        if (elem) {
            const navbarOffset = 78;
            const elementPosition = elem.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - navbarOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const availabilityText =
        profile.availability ||
        profile.status ||
        "Open to opportunities";

    const heroStats = profile.stats || [
        { label: "Projects", value: "5+" },
        { label: "Focus Areas", value: "4" },
        { label: "Internships", value: "2+" },
        { label: "Status", value: "Open" },
    ];

    const activeRole =
        profile.roles?.[roleIndex] || "Data Analyst";

    return (
        <section
            id="home"
            className="
                relative isolate overflow-hidden
                min-h-[calc(100svh-80px)]
                lg:h-[calc(100svh-80px)]
                lg:min-h-[680px]
                transition-colors duration-500
                bg-[#f7f3eb] dark:bg-[#03060d]
            "
        >
            {/* HERO IMAGE */}
            <img
                src={
                    darkMode
                        ? "/images/profile/hero-dark.png"
                        : "/images/profile/hero-light.png"
                }
                alt="Chanchal Chaudhary"
                className="
                    absolute inset-0
                    h-full w-full
                    object-cover object-[75%_20%] sm:object-center
                    opacity-25 sm:opacity-100
                    transition-opacity duration-500
                    -z-20
                "
            />

            {/* BOTTOM CONTRAST GRADIENT OVERLAY */}
            <div
                className="
                    pointer-events-none absolute inset-x-0 bottom-0 z-[1]
                    h-2/3 sm:h-1/4
                    bg-gradient-to-t
                    from-[#f7f3eb] via-[#f7f3eb]/90 to-transparent
                    dark:from-[#03060d] dark:via-[#03060d]/90 dark:to-transparent
                "
            />

            <div className="relative z-10 mx-auto flex h-full w-full max-w-[1450px] items-center px-5 sm:px-8 lg:px-10">
                <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center lg:col-span-7">

                        {/* Availability */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, ease }}
                            className="
                                mb-4 inline-flex w-fit items-center gap-2.5
                                rounded-full
                                border border-emerald-500/30
                                bg-white/90 dark:bg-black/65 px-3.5 py-1.5
                                text-xs font-medium
                                text-emerald-800 dark:text-emerald-300
                                backdrop-blur-md
                                shadow-sm
                            "
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                            </span>

                            <span>{availabilityText}</span>
                        </motion.div>

                        {/* Small Heading */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.55,
                                delay: 0.05,
                                ease,
                            }}
                            className="
                                mb-3
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#9a7431]
                                dark:text-[#f4dfb5]
                            "
                        >
                            Turning Data Into Impact
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                                ease,
                            }}
                            className="
                                max-w-3xl
                                text-3xl
                                font-extrabold
                                tracking-tight
                                text-slate-950
                                dark:text-white
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Data. Intelligence.

                            <span
                                className="
                                    mt-1 block
                                    text-[#9a7431]
                                    dark:text-[#f4dfb5]
                                "
                            >
                                Real Solutions.
                            </span>
                        </motion.h1>

                        {/* Dynamic Role */}
                        <motion.div
                            key={activeRole}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="
                                mt-3
                                text-sm
                                font-bold
                                text-slate-900
                                dark:text-white/90
                            "
                        >
                            {activeRole}
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease,
                            }}
                            className="
                                mt-3
                                max-w-2xl
                                text-sm
                                leading-relaxed
                                text-slate-800
                                dark:text-white/85
                                sm:text-base
                                font-medium
                            "
                        >
                            I&apos;m {profile.name} — Data Analyst, BI Analyst,
                            Data Scientist, Python Developer and Freelancer. I
                            enjoy solving real-world problems with data,
                            building dashboards, machine learning models and
                            practical applications.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 17 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                ease,
                            }}
                            className="mt-6 flex flex-wrap items-center gap-3"
                        >
                            <button
                                type="button"
                                onClick={onExploreWork}
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-[#111827] dark:bg-[#f4dfb5]
                                    px-6 py-3.5
                                    text-xs
                                    font-bold
                                    text-white dark:text-slate-950
                                    shadow-lg
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:bg-black dark:hover:bg-[#f8e8c9]
                                    cursor-pointer
                                "
                            >
                                <span>Explore My Work</span>

                                <ArrowRight
                                    size={15}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollToSection("contact")}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-slate-300
                                    dark:border-white/15
                                    bg-white/90 dark:bg-black/65
                                    px-6 py-3.5
                                    text-xs
                                    font-semibold
                                    text-slate-950
                                    dark:text-white
                                    backdrop-blur-md
                                    transition-all
                                    hover:bg-slate-100 dark:hover:bg-white/10
                                    cursor-pointer
                                "
                            >
                                <BriefcaseBusiness
                                    size={15}
                                    className="
                                        text-[#9a7431]
                                        dark:text-[#f4dfb5]
                                    "
                                />

                                Let&apos;s Talk
                            </button>
                        </motion.div>

                        {/* STATS */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                ease,
                            }}
                            className="
                                mt-7
                                grid
                                grid-cols-2
                                gap-3
                                border-t
                                border-slate-300
                                dark:border-white/[0.08]
                                pt-5
                                sm:grid-cols-4
                            "
                        >
                            {heroStats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="
                                        rounded-2xl
                                        border
                                        border-slate-300/80
                                        dark:border-white/10
                                        bg-white/95
                                        dark:bg-black/70
                                        p-3.5
                                        shadow-sm
                                        backdrop-blur-md
                                    "
                                >
                                    <p
                                        className="
                                            text-xl
                                            font-bold
                                            text-slate-950
                                            dark:text-white
                                        "
                                    >
                                        {stat.value}
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            text-slate-700
                                            dark:text-white/70
                                        "
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT SKILLS CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3,
                            ease,
                        }}
                        className="
                            hidden
                            lg:col-span-5
                            lg:block
                        "
                    >
                        <div
                            className="
                                ml-auto
                                w-full
                                max-w-[390px]
                                translate-x-2
                                rounded-3xl
                                border
                                border-white/60
                                dark:border-white/15
                                bg-white/90
                                dark:bg-[#070b14]/85
                                p-6
                                shadow-2xl
                                backdrop-blur-xl
                            "
                        >
                            {/* Card Header */}
                            <div
                                className="
                                    mb-6
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-slate-300/70
                                    dark:border-white/[0.08]
                                    pb-4
                                "
                            >
                                <div>
                                    <p
                                        className="
                                            text-xs
                                            font-semibold
                                            uppercase
                                            tracking-widest
                                            text-[#9a7431]
                                            dark:text-[#f4dfb5]
                                        "
                                    >
                                        Skills Overview
                                    </p>

                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            text-slate-950
                                            dark:text-white
                                        "
                                    >
                                        Data · AI · Development
                                    </h3>
                                </div>

                                <span
                                    className="
                                        rounded-xl
                                        border
                                        border-[#c9a55b]/30
                                        bg-[#f4dfb5]/40
                                        px-3 py-1
                                        text-xs
                                        font-mono
                                        font-medium
                                        text-[#8b682c]
                                        dark:text-[#f4dfb5]
                                    "
                                >
                                    Core Stack
                                </span>
                            </div>

                            {/* Skills */}
                            <div className="space-y-5">
                                {heroSkills.map((skill) => {
                                    const Icon = skill.icon;

                                    return (
                                        <div
                                            key={skill.name}
                                            className="space-y-2"
                                        >
                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-between
                                                    text-xs
                                                    font-semibold
                                                "
                                            >
                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                        text-slate-900
                                                        dark:text-slate-200
                                                    "
                                                >
                                                    <Icon
                                                        size={16}
                                                        className="
                                                            text-[#a47a32]
                                                            dark:text-[#f4dfb5]
                                                        "
                                                    />

                                                    <span>
                                                        {skill.name}
                                                    </span>

                                                    <span
                                                        className="
                                                            hidden
                                                            text-[10px]
                                                            font-normal
                                                            text-slate-600
                                                            dark:text-white/50
                                                            sm:inline
                                                        "
                                                    >
                                                        ({skill.description})
                                                    </span>
                                                </div>

                                                <span
                                                    className="
                                                        font-mono
                                                        text-[#96702e]
                                                        dark:text-[#f4dfb5]
                                                    "
                                                >
                                                    {skill.value}%
                                                </span>
                                            </div>

                                            <div
                                                className="
                                                    h-2
                                                    w-full
                                                    overflow-hidden
                                                    rounded-full
                                                    bg-slate-300/80
                                                    dark:bg-white/10
                                                "
                                            >
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{
                                                        width: `${skill.value}%`,
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        ease: "easeOut",
                                                        delay: 0.4,
                                                    }}
                                                    className="
                                                        h-full
                                                        rounded-full
                                                        bg-[#c7a45f]
                                                        dark:bg-[#f4dfb5]
                                                    "
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Quote */}
                            <div
                                className="
                                    mt-6
                                    rounded-2xl
                                    border
                                    border-slate-300/70
                                    dark:border-white/[0.06]
                                    bg-slate-100/70
                                    dark:bg-white/[0.03]
                                    p-4
                                    text-xs
                                    text-slate-700
                                    dark:text-white/70
                                "
                            >
                                <p className="italic">
                                    &ldquo;Building reliable data workflows
                                    and intuitive insights.&rdquo;
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}