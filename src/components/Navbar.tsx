import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, ArrowRight, Phone } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Tech Sponsorship', href: '#sponsorship' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-900/85 backdrop-blur-xl border-b border-white/8 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center glow-sm group-hover:glow-cyan transition-all duration-300">
              <Cpu className="w-5 h-5 text-navy-900" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-base lg:text-lg tracking-tight">
                KP Technologies
              </span>
              <span className="text-[9px] lg:text-[10px] text-cyan-400/80 font-medium tracking-wide uppercase">
                by KP Industries
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-3/4 group-hover:left-1/4 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass border-cyan-400/20 text-sm font-medium text-slate-200 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              {CONTACT.phone}
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold text-sm hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 glow-sm hover:glow-cyan"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-navy-900/95 backdrop-blur-xl border-l border-white/8 z-50 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/8">
              <span className="font-display font-bold text-white">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="text-white p-1">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CONTACT.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full glass border-cyan-400/20 text-slate-200 font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                {CONTACT.phone}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold text-sm"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
