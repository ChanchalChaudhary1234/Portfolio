import React from 'react';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { navLinks } from '../../data/portfolioData';
import { contactData } from '../../data/contactData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hi Chanchal, I found your portfolio and would like to discuss an opportunity/project with you.'
    );

    window.open(
      `${contactData.whatsappUrl}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const openEmail = () => {
    const subject = encodeURIComponent('Portfolio Contact Inquiry');
    const body = encodeURIComponent(
      'Hi Chanchal,\n\nI found your portfolio and would like to get in touch with you regarding an opportunity/project.'
    );

    const gmailUrl =
      `https://mail.google.com/mail/u/0/?tf=cm` +
      `&to=${encodeURIComponent(contactData.email)}` +
      `&su=${subject}` +
      `&body=${body}`;

    window.open(
      gmailUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-10 bg-[#f5f0e7] dark:bg-[#03060d] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#f4dfb5] text-slate-950 font-bold flex items-center justify-center text-sm shadow">
              CC
            </div>

            <div>
              <div className="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white uppercase leading-none">
                {contactData.name}
              </div>

              <div className="text-[9px] tracking-widest text-slate-500 uppercase font-semibold mt-1">
                Data • Python • Intelligence
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#8d713d] dark:hover:text-[#f4dfb5] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-slate-500">

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:text-[#8d713d] dark:hover:text-[#f4dfb5] hover:border-[#c9ae78] transition-colors"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            <a
              href={contactData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:text-[#8d713d] dark:hover:text-[#f4dfb5] hover:border-[#c9ae78] transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={openWhatsApp}
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:text-[#8d713d] dark:hover:text-[#f4dfb5] hover:border-[#c9ae78] transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={openEmail}
              aria-label="Email"
              className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:text-[#8d713d] dark:hover:text-[#f4dfb5] hover:border-[#c9ae78] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </button>

          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">

          <p>
            © 2026 {contactData.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            to create opportunities.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#8d713d] dark:hover:text-[#f4dfb5] transition-colors font-semibold"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
}