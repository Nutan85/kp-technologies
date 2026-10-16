import { Cpu, MapPin, Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

const serviceLinks = [
  'Web Design & Development',
  'Mobile App Development',
  'Custom Software & ERP',
  'UI/UX Design & Branding',
  'Digital Marketing & SEO',
  'Tech Sponsorship & Incubation',
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Tech Sponsorship', href: '#sponsorship' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Summary */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center glow-sm">
                <Cpu className="w-5 h-5 text-navy-900" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-base">KP Technologies</span>
                <span className="text-[10px] text-cyan-400/80 font-medium tracking-wide uppercase">by KP Industries</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              A modern software development and digital innovation company by KP Industries.
              We craft scalable websites, high-performance mobile apps, custom software, and
              provide tech sponsorships for promising startups. 75+ years of engineering
              excellence, reimagined for the digital age.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm inline-flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={CONTACT.phoneHref} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={CONTACT.emailHref} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors text-sm">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © 2026 KP Technologies (by KP Industries). All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Engineered with precision · Powered by innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
