import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Mail,
    MessageCircle,
    Sparkles,
    Maximize2,
    X
} from 'lucide-react';
import { getCareerProfile, getCareerProfileSkills } from '../../data/careerProfiles';
import { contactData } from '../../data/contactData';

const autoScrollOptions = {
    speed: 0.7,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    delay: 0
};

// Compact Carousel with short height cards
const ProjectGalleryCarousel = ({ images, title }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [AutoScroll(autoScrollOptions)]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxImage, setLightboxImage] = useState(null);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => emblaApi.off('select', onSelect);
    }, [emblaApi, onSelect]);

    if (!images || images.length === 0) {
        return (
            <div className="h-[220px] rounded-2xl bg-slate-100 dark:bg-black/20 flex items-center justify-center border border-slate-200 dark:border-white/10 text-xs text-slate-400">
                No visuals available
            </div>
        );
    }

    return (
        <>
            <div className="relative group overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-inner bg-slate-50 dark:bg-black/10">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y -ml-3">
                        {images.map((src, index) => (
                            <div className="flex-[0_0_90%] pl-3 sm:flex-[0_0_75%] lg:flex-[0_0_65%]" key={index}>
                                <div className="h-[220px] sm:h-[260px] relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md cursor-zoom-in group" onClick={() => setLightboxImage(src)}>
                                    <img
                                        src={src}
                                        alt={`${title} - Screenshot ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="px-3 py-1.5 rounded-full bg-black/60 text-white text-[11px] font-semibold flex items-center gap-1.5 backdrop-blur-md">
                                            <Maximize2 size={13} /> Click to expand
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 p-1.5 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-white/10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                index === selectedIndex
                                    ? 'bg-[#8d713d] dark:bg-[#f4dfb5] w-3.5'
                                    : 'bg-slate-300 dark:bg-slate-600'
                            }`}
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                
                {/* Hover Arrows */}
                <button 
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-slate-700 dark:text-white opacity-0 group-hover:opacity-100 transition-all shadow-md cursor-pointer"
                    onClick={() => emblaApi && emblaApi.scrollPrev()}
                    aria-label="Previous slide"
                >
                    <ArrowLeft size={16} />
                </button>
                <button 
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-slate-700 dark:text-white opacity-0 group-hover:opacity-100 transition-all shadow-md cursor-pointer"
                    onClick={() => emblaApi && emblaApi.scrollNext()}
                    aria-label="Next slide"
                >
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* LIGHTBOX FULLSCREEN MODAL */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-lg p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button className="absolute top-6 right-6 text-white p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-colors cursor-pointer">
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            src={lightboxImage}
                            alt="Project Screenshot Fullscreen"
                            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-xs bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                            {title} • Click anywhere outside to close
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const profileIdByPath = {
    '/data_analyst': 'data-analyst',
    '/bi_analyst': 'bi-analyst',
    '/data_scientist': 'data-scientist',
    '/python_developer': 'python-developer'
};

export default function CareerProfile() {
    const { pathname } = useLocation();
    const profile = getCareerProfile(profileIdByPath[pathname]);

    if (!profile) {
        return (
            <main className="min-h-screen pt-20 bg-[#f7f3eb] dark:bg-[#03060d] flex items-center justify-center px-6 transition-colors duration-700">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8d713d] dark:text-[#f4dfb5] font-bold mb-4">
                        Career Profile
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white">
                        Profile not found
                    </h1>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-xl bg-[#f4dfb5] hover:bg-[#f8e8c9] text-slate-950 font-bold text-xs shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </div>
            </main>
        );
    }

    const profileSkills = getCareerProfileSkills(profile);
    const projects = [...profile.projects].sort((a, b) => a.order - b.order);

    const openEmail = () => {
        const subject = encodeURIComponent(`Portfolio Contact - ${profile.title}`);
        const body = encodeURIComponent(`Hi Chanchal,\n\nI would like to discuss an opportunity/project related to your ${profile.title} profile.\n\n`);
        const gmailUrl = 'https://mail.google.com/mail/u/0/?tf=cm' + `&to=${encodeURIComponent(contactData.email)}` + `&su=${subject}` + `&body=${body}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    };

    const openWhatsApp = () => {
        const message = encodeURIComponent(`Hi Chanchal, I would like to discuss an opportunity/project related to your ${profile.title} profile.`);
        window.open(`${contactData.whatsappUrl}?text=${message}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <main className="pt-24 bg-[#f7f3eb] dark:bg-[#03060d] text-slate-900 dark:text-white transition-colors duration-700">
            
            {/* HERO SECTION / OVERVIEW (id="profile-overview") */}
            <section id="profile-overview" className="px-6 sm:px-10 lg:px-20 py-12 lg:py-16 relative overflow-hidden">
                <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-[150px] pointer-events-none bg-[#d9b978]/[0.08] dark:bg-[#d9b978]/[0.025]" />
                
                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-end">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#8d713d] dark:text-[#f4dfb5] mb-3">
                                <Sparkles className="w-3.5 h-3.5" />
                                Career Profile {profile.number}
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                                {profile.title}
                            </h1>
                            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium mt-4 max-w-3xl leading-relaxed">
                                {profile.tagline}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 max-w-3xl leading-relaxed">
                                {profile.intro}
                            </p>
                        </div>

                        <div className="lg:justify-self-end w-full max-w-md p-5 rounded-3xl bg-white/80 dark:bg-[#0b0f16]/80 border border-slate-900/10 dark:border-white/10 shadow-xl backdrop-blur-xl">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#8d713d] dark:text-[#f4dfb5] font-bold mb-3">
                                Core Expertise
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {profile.expertise.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 rounded-full border border-slate-300/80 dark:border-white/15 bg-slate-100/70 dark:bg-white/[0.04] text-xs font-semibold text-slate-800 dark:text-slate-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STRENGTHS & SKILLS BREAKDOWN (id="profile-skills") */}
            <section id="profile-skills" className="px-6 sm:px-10 lg:px-20 pb-12 scroll-mt-28">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
                    <div className="rounded-3xl bg-white/80 dark:bg-[#0b0f16]/80 border border-slate-900/10 dark:border-white/10 p-7 shadow-xl backdrop-blur-xl">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#8d713d] dark:text-[#f4dfb5] font-bold mb-2">Role Focus</p>
                        <h2 className="text-xl font-extrabold mb-5 tracking-tight">What I bring to this role</h2>
                        <div className="space-y-3">
                            {profile.strengths.map((strength) => (
                                <div key={strength} className="flex items-start gap-2.5">
                                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#8d713d] dark:text-[#f4dfb5]" />
                                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{strength}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white/80 dark:bg-[#0b0f16]/80 border border-slate-900/10 dark:border-white/10 p-7 shadow-xl backdrop-blur-xl">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#8d713d] dark:text-[#f4dfb5] font-bold mb-2">Proficiency Matrix</p>
                        <h2 className="text-xl font-extrabold mb-5 tracking-tight">Skills for this role</h2>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {profileSkills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <div key={skill.name} className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-black/30 p-3.5">
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <Icon size={16} className="text-[#8d713d] dark:text-[#f4dfb5]" />
                                            <span className="text-xs font-bold">{skill.name}</span>
                                        </div>
                                        <div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#8d713d] dark:bg-[#f4dfb5] rounded-full transition-all duration-700" style={{ width: `${skill.value}%` }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* SELECTED PROJECTS SECTION WITH COMPACT CAROUSEL (id="profile-projects") */}
            <section id="profile-projects" className="px-6 sm:px-10 lg:px-20 py-14 bg-slate-100/60 dark:bg-[#05070c] border-y border-slate-200/80 dark:border-white/10 scroll-mt-28">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between gap-6 mb-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-[#8d713d] dark:text-[#f4dfb5] font-bold mb-2">Selected Work</p>
                            <h2 className="text-3xl font-extrabold tracking-tight">Projects for this profile</h2>
                        </div>
                        <span className="hidden sm:block text-xs font-semibold text-slate-500">{projects.length} featured projects</span>
                    </div>

                    <div className="space-y-10">
                        {projects.map((project) => (
                            <motion.div
                                key={`${project.order}-${project.title}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="grid lg:grid-cols-[70px_1fr] gap-6 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#0b0f16]/80 p-6 lg:p-8 shadow-xl backdrop-blur-xl"
                            >
                                <div>
                                    <span className="text-3xl sm:text-4xl font-black text-slate-300 dark:text-slate-700">
                                        {String(project.order).padStart(2, '0')}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-xl font-extrabold tracking-tight">{project.title}</h3>
                                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">{project.description}</p>

                                    {/* COMPACT CAROUSEL */}
                                    <div className="mt-6">
                                        <ProjectGalleryCarousel images={project.images} title={project.title} />
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 mt-6">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-2 mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10">
                                        {project.highlights.map((highlight) => (
                                            <div key={highlight} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                                                <ArrowRight size={13} className="text-[#8d713d] dark:text-[#f4dfb5] shrink-0" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION / CONTACT (id="contact") */}
            <section id="contact" className="px-6 sm:px-10 lg:px-20 py-16 bg-[#ede4d3] dark:bg-[#03060d] transition-colors duration-700 scroll-mt-28">
                <div className="max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-white/70 dark:bg-[#0b0f16]/90 border border-slate-200/80 dark:border-white/10 shadow-2xl backdrop-blur-2xl">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8d713d] dark:text-[#f4dfb5] font-bold mb-3">Let&apos;s Connect</p>
                    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Interested in my {profile.title} profile?</h2>
                    <p className="max-w-xl mx-auto mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        If you&apos;re looking for someone with this specific expertise, let&apos;s discuss an opportunity, project or collaboration.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">
                        <button onClick={openEmail} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f4dfb5] hover:bg-[#f8e8c9] text-slate-950 font-bold text-xs shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer">
                            <Mail size={15} /> Contact Me
                        </button>
                        <button onClick={openWhatsApp} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer">
                            <MessageCircle size={15} /> WhatsApp Chat
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
