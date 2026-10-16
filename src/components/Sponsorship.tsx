import { motion } from 'framer-motion';
import { Rocket, Lightbulb, ClipboardCheck, Code, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    step: '01',
    title: 'Submit Idea',
    desc: 'Share your startup or project concept through our contact form. Tell us your vision, market, and what you need.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Tech Review',
    desc: 'Our engineering team evaluates feasibility, technical architecture, and the potential impact of your project.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Sponsored Development Sprint',
    desc: 'We allocate development resources, tech grants, and mentorship to build your MVP and bring it to life.',
  },
];

export default function Sponsorship() {
  return (
    <section id="sponsorship" className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-8 lg:p-12 mb-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/8 rounded-full blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center glow-cyan">
              <Rocket className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-2xl lg:text-4xl font-bold text-white mb-4">
                Tech Sponsorship &amp; Incubation Program
              </h2>
              <p className="text-slate-300 text-base lg:text-lg leading-relaxed mb-6">
                KP Technologies provides software development sponsorships and mentorship
                for early-stage startups and high-potential student projects. We back
                ambitious ideas with real engineering resources — because building the future
                is what we do.
              </p>
              <a
                href="#contact"
                onClick={() => sessionStorage.setItem('prefill_type', 'Tech Sponsorship')}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold text-sm hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 glow-sm hover:glow-cyan"
              >
                Pitch Your Project for Sponsorship
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3-Step Process */}
        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-6 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-xs font-bold">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:glow-sm transition-all duration-300 mt-2">
                    <step.icon className="w-7 h-7 text-cyan-400" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-cyan-400/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
