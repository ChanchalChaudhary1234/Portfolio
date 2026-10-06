import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Mail,
  Send,
  Sparkles,
  Clock,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { contactData } from '../../data/contactData';

export default function ContactSection() {
  const { darkMode } = useTheme();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sent, setSent] = useState(false);

  const theme = {
    section: darkMode
      ? 'bg-[#03060d] text-white'
      : 'bg-[#f7f3eb] text-slate-900',

    heroCard: darkMode
      ? 'bg-[#080c13] border-white/10 text-white shadow-2xl'
      : 'bg-[#0f172a] border-slate-900/10 text-white shadow-xl',

    card: darkMode
      ? 'bg-[#0b0f16]/90 border-white/10 text-white shadow-2xl backdrop-blur-xl'
      : 'bg-white/90 border-slate-900/10 text-slate-900 shadow-xl backdrop-blur-xl',

    sidebarCard: darkMode
      ? 'bg-[#090d14] text-white border-white/10 shadow-2xl'
      : 'bg-[#1e293b] text-white border-slate-900/10 shadow-xl',

    input: darkMode
      ? 'bg-[#10151e] border-white/10 text-white placeholder:text-slate-500 focus:border-[#f4dfb5]/50'
      : 'bg-[#faf8f3] border-slate-900/10 text-slate-900 placeholder:text-slate-400 focus:border-[#8d713d]/50',

    muted: darkMode
      ? 'text-slate-400'
      : 'text-slate-600',

    accent: darkMode
      ? 'text-[#f4dfb5]'
      : 'text-[#8d713d]'
  };

  const openEmail = (name = '', email = '', message = '') => {
    const subject = encodeURIComponent(
      name
        ? `Portfolio Contact Inquiry from ${name}`
        : 'Portfolio Contact Inquiry'
    );

    const body = encodeURIComponent(
      name
        ? `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        : `Hi Chanchal,\n\nI would like to get in touch with you regarding an opportunity/project.`
    );

    const gmailUrl =
      `https://mail.google.com/mail/u/0/?tf=cm` +
      `&to=${encodeURIComponent('chanchuchaudhary8279@gmail.com')}` +
      `&su=${subject}` +
      `&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill in all the required fields.');
      return;
    }

    openEmail(
      form.name.trim(),
      form.email.trim(),
      form.message.trim()
    );

    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({
        name: '',
        email: '',
        message: ''
      });
    }, 4000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hi Chanchal, I visited your portfolio and would like to discuss a project/opportunity with you.'
    );

    window.open(
      `${contactData.whatsappUrl}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="contact"
      className={`relative overflow-hidden py-14 sm:py-18 lg:py-22 transition-colors duration-700 ${theme.section}`}
    >
      <div
        className={`absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-[160px] pointer-events-none ${darkMode
          ? 'bg-[#d9b978]/[0.025]'
          : 'bg-[#d9b978]/[0.08]'
          }`}
      />

      <div
        className={`absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-[160px] pointer-events-none ${darkMode
          ? 'bg-[#d9b978]/[0.02]'
          : 'bg-[#d9b978]/[0.07]'
          }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-start justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <div
              className={`flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase ${theme.accent}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Get In Touch
            </div>

            <h2
              className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] ${darkMode ? 'text-white' : 'text-slate-950'
                }`}
            >
              Let's build something{' '}
              <span className={theme.accent}>
                exceptional together.
              </span>
            </h2>

            <p
              className={`mt-3 max-w-2xl text-sm leading-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
            >
              Have a question, a project in mind, or an opportunity to discuss?
              Reach out and let's turn your ideas into functional solutions.
            </p>
          </div>

          <div
            className={`shrink-0 text-5xl sm:text-6xl lg:text-7xl font-black leading-none select-none ${darkMode ? 'text-white/[0.04]' : 'text-slate-200'
              }`}
          >
            09
          </div>
        </div>

        <div className="space-y-10">

          <div
            className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 border ${theme.heroCard}`}
          >
            <div className="absolute right-0 top-0 w-96 h-full bg-[#c9ae78]/[0.08] blur-3xl pointer-events-none" />

            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 pointer-events-none">
              <div className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl flex items-center gap-3.5">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative h-3 w-3 rounded-full bg-emerald-500" />
                </span>

                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-slate-300 font-bold">
                    Status
                  </p>
                  <p className="text-xs text-white font-semibold">
                    Available for Work
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl flex items-center gap-3.5">
                <Activity className="w-4 h-4 text-[#f4dfb5]" />

                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-slate-300 font-bold">
                    Response
                  </p>
                  <p className="text-xs text-white font-semibold">
                    &lt; 24 Hours
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4dfb5]/15 border border-[#f4dfb5]/30 text-[#f4dfb5] text-[10px] font-extrabold tracking-[0.2em] uppercase">
                <Zap className="w-3 h-3" />
                Ready for Collaboration
              </div>

              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-white">
                Transform your data & ideas into reality.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                I'm actively looking for freelance contracts, internships,
                and full-time opportunities. Whether you need an intelligent
                dashboard, a Python application, or deep data analysis,
                let's connect.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact-form"
                  className="px-6 py-3.5 rounded-xl bg-[#f4dfb5] hover:bg-[#f8e8c9] text-slate-950 font-bold text-xs flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg cursor-pointer"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                  Instant WhatsApp Chat
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c9ae78]" />
                  Rapid Turnaround
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c9ae78]" />
                  Clean, Scalable Code
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c9ae78]" />
                  Transparent Communication
                </div>
              </div>
            </div>
          </div>

          <div
            id="contact-form"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
          >

            <div
              className={`lg:col-span-8 p-7 sm:p-9 rounded-3xl border shadow-xl space-y-6 ${theme.card}`}
            >
              <div>
                <h3
                  className={`text-2xl sm:text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-950'
                    }`}
                >
                  Send a Direct Message
                </h3>

                <p className={`text-xs sm:text-sm mt-2 ${theme.muted}`}>
                  Fill out the form and Gmail will open in a new tab
                  with Chanchal's email already selected.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                <button
                  type="button"
                  onClick={() => openEmail()}
                  className={`p-3.5 rounded-2xl border flex items-center gap-2.5 text-xs font-semibold transition-all hover:-translate-y-0.5 ${theme.input}`}
                >
                  <Mail className={`w-4 h-4 shrink-0 ${theme.accent}`} />
                  <span className="truncate">Direct Email</span>
                </button>

                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3.5 rounded-2xl border flex items-center gap-2.5 text-xs font-semibold transition-all hover:-translate-y-0.5 ${theme.input}`}
                >
                  <FaLinkedinIn className={`w-4 h-4 shrink-0 ${theme.accent}`} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3.5 rounded-2xl border flex items-center gap-2.5 text-xs font-semibold transition-all hover:-translate-y-0.5 ${theme.input}`}
                >
                  <FaGithub className={`w-4 h-4 shrink-0 ${theme.accent}`} />
                  <span>GitHub Repos</span>
                </a>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 pt-2"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>
                    <label
                      className={`block text-[10px] uppercase tracking-wider font-bold mb-1.5 ${theme.muted}`}
                    >
                      Your Name *
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value
                        })
                      }
                      className={`w-full px-4 py-3.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-[#c9ae78]/40 ${theme.input}`}
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-[10px] uppercase tracking-wider font-bold mb-1.5 ${theme.muted}`}
                    >
                      Your Email *
                    </label>

                    <input
                      type="email"
                      placeholder="e.g. alex@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value
                        })
                      }
                      className={`w-full px-4 py-3.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-[#c9ae78]/40 ${theme.input}`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-[10px] uppercase tracking-wider font-bold mb-1.5 ${theme.muted}`}
                  >
                    Project / Message Details *
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell me about your requirements, timeline, or scope..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value
                      })
                    }
                    className={`w-full px-4 py-3.5 rounded-xl text-xs border resize-none focus:outline-none focus:ring-2 focus:ring-[#c9ae78]/40 ${theme.input}`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-[#f4dfb5] hover:bg-[#f8e8c9] text-slate-950 font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    Send Inquiry
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <span className={`text-[11px] font-medium ${theme.muted}`}>
                    🔒 Your message stays in your email draft until you send it.
                  </span>
                </div>

                {sent && (
                  <div className="p-3.5 rounded-xl text-xs font-semibold border bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                    ✨ Gmail opened in a new tab with your message prepared. Just press Send.
                  </div>
                )}
              </form>
            </div>

            <div
              className={`lg:col-span-4 p-7 sm:p-9 rounded-3xl border flex flex-col justify-between space-y-8 shadow-2xl ${theme.sidebarCard}`}
            >
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4dfb5] mb-6 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Current Availability
                </h4>

                <div className="space-y-4">
                  {contactData.availability.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-xs text-slate-200 font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-[#c9ae78] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">

                <div className="p-4 rounded-2xl bg-[#c9ae78]/[0.08] border border-[#c9ae78]/20 space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#f4dfb5] font-extrabold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Instant Connection
                  </p>

                  <p className="text-xs text-slate-300 font-medium pt-1">
                    Connect directly through WhatsApp or Gmail.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                  Chat on WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => openEmail()}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4 text-[#f4dfb5]" />
                  Send Direct Email
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}