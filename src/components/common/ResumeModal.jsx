import React, { useState } from 'react';
import { X, FileText, Download, Eye, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const resumeFiles = [
    {
        id: 'data-analyst',
        title: 'Data Analyst Resume',
        path: '/resume/Chanchal_Chaudhary_DA_Resume.pdf',
        description: 'Focused on Python, SQL, Power BI, and data analytics workflows.'
    },
    {
        id: 'bi-analyst',
        title: 'BI Analyst Resume',
        path: '/resume/Chanchal_Chaudhary_BI_Resume.pdf',
        description: 'Focused on Business Intelligence, Power BI dashboards, and KPI reporting.'
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist Resume',
        path: '/resume/Chanchal_Chaudhary_DS_Resume.pdf',
        description: 'Focused on Machine Learning, Scikit-learn, and prediction workflows.'
    },
    {
        id: 'python-developer',
        title: 'Python Developer Resume',
        path: '/resume/Chanchal_Chaudhary_PD_Resume.pdf',
        description: 'Focused on FastAPI, Django, REST APIs, and backend systems.'
    }
];

export default function ResumeModal({ isOpen, onClose, initialRole }) {
    const [selectedResume, setSelectedResume] = useState(initialRole || null);

    if (!isOpen) return null;

    // Agar kisi specific role page par hain, toh direct preview/download dikhayenge
    const currentResume = resumeFiles.find(r => r.id === initialRole) || selectedResume;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-4xl bg-[#f7f3eb] dark:bg-[#0b0f16] border border-slate-900/10 dark:border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                >
                    {/* Modal Header */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/20">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#f4dfb5] text-slate-950 flex items-center justify-center shadow-md">
                                <FileText size={16} />
                            </div>
                            <div>
                                <h3 className="text-sm sm:text-base font-extrabold tracking-tight">
                                    {initialRole ? currentResume?.title : (selectedResume ? selectedResume.title : 'Select Job Role Resume')}
                                </h3>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                    {initialRole ? 'Instant preview & download' : 'Choose a role to view tailored resume'}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-500 dark:text-slate-400 cursor-pointer"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6 overflow-y-auto flex-1">
                        {!initialRole && !selectedResume ? (
                            // Role Selection Grid (Jab user landing page par ho)
                            <div className="grid sm:grid-cols-2 gap-4">
                                {resumeFiles.map((resume) => (
                                    <div
                                        key={resume.id}
                                        onClick={() => setSelectedResume(resume)}
                                        className="group p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10151e] hover:border-[#c9ae78] dark:hover:border-[#f4dfb5] transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-sm group-hover:text-[#8d713d] dark:group-hover:text-[#f4dfb5] transition-colors">
                                                    {resume.title}
                                                </h4>
                                                <Sparkles size={14} className="text-[#8d713d] dark:text-[#f4dfb5]" />
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                                {resume.description}
                                            </p>
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#8d713d] dark:text-[#f4dfb5]">
                                            <span>Preview & Download</span>
                                            <Eye size={15} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Resume Preview Frame & Actions (Jab role select ho ya specific role page ho)
                            <div className="flex flex-col h-full space-y-4">
                                {!initialRole && (
                                    <button
                                        onClick={() => setSelectedResume(null)}
                                        className="self-start text-xs font-bold text-[#8d713d] dark:text-[#f4dfb5] hover:underline cursor-pointer mb-1"
                                    >
                                        ← Choose a different role
                                    </button>
                                )}

                                <div className="w-full h-[50vh] sm:h-[55vh] rounded-2xl overflow-hidden border border-slate-300 dark:border-white/15 bg-white shadow-inner">
                                    <iframe
                                        src={`${currentResume?.path}#view=FitH`}
                                        title={currentResume?.title}
                                        className="w-full h-full"
                                    />
                                </div>

                                <div className="flex items-center justify-end gap-3 pt-2">
                                    <a
                                        href={currentResume?.path}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-5 py-3 rounded-xl border border-slate-300 dark:border-white/20 text-xs font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                                    >
                                        <Eye size={15} /> Open in New Tab
                                    </a>
                                    <a
                                        href={currentResume?.path}
                                        download
                                        className="px-6 py-3 rounded-xl bg-[#f4dfb5] hover:bg-[#f8e8c9] text-slate-950 font-extrabold text-xs shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        <Download size={15} /> Download Resume
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}