import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Palette, TrendingUp, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Design & Development',
    desc: 'Custom portals, SaaS platforms, e-commerce stores, and modern web applications built with React, Next.js, and Django.',
    tags: ['React', 'Next.js', 'Django', 'E-Commerce', 'Portals'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform iOS & Android apps with Flutter and React Native — seamless UX, offline support, and push notifications.',
    tags: ['iOS', 'Android', 'Flutter', 'React Native'],
  },
  {
    icon: Database,
    title: 'Custom Software & ERP',
    desc: 'Custom business tools, CRM systems, inventory management, and billing automation tailored to your operational workflows.',
    tags: ['CRM', 'Inventory', 'Billing', 'Automation'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design & Branding',
    desc: 'Figma wireframes, modern user journeys, brand identity design, logos, and interactive prototyping for web and mobile.',
    tags: ['Figma', 'Wireframes', 'Brand Identity', 'Logos'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & SEO',
    desc: 'Search engine optimization, Google Ads management, social media marketing, and B2B lead generation campaigns that convert.',
    tags: ['SEO', 'Google Ads', 'Social Media', 'Lead Gen'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Our Core Services
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From web and mobile to custom software and digital marketing — we cover the full
            spectrum of digital product development.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`group relative glass-card rounded-2xl p-7 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 group-hover:glow-sm transition-all duration-300">
                    <service.icon className="w-7 h-7 text-cyan-400" strokeWidth={1.8} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:rotate-45 transition-all duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-400/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Sponsorship CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative rounded-2xl p-7 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-400/20 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col justify-center items-center text-center"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Got a startup idea?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              We sponsor development for promising startup and student projects.
              Get technical grants and dev support.
            </p>
            <a
              href="#sponsorship"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold text-sm hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 glow-sm"
            >
              Apply for Sponsorship
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
