import { motion } from 'framer-motion';
import { Lightbulb, ClipboardCheck, Code, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    step: '01',
    title: 'Pitch Idea',
    desc: 'Submit your product vision through our inquiry form. Share your concept, market, and goals.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Technical Due Diligence',
    desc: 'Our engineering team evaluates feasibility, architecture, and scalability of your concept.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Sponsored Dev Sprint',
    desc: 'We allocate development resources, cloud credits, and mentorship to build your MVP.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Production Launch',
    desc: 'Go to market with a production-ready product, continued support, and scaling guidance.',
  },
];

export default function Sponsorships() {
  return (
    <section id="sponsorships" className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            Incubation Track
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Tech Sponsorship &amp; Incubation
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From concept to launch — we back ambitious startups with engineering resources,
            cloud infrastructure, and industry mentorship.
          </p>
        </motion.div>

        {/* Workflow */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-6 hover:border-emerald-400/30 hover:-translate-y-1 transition-all duration-300 group">
                  {/* Step number badge */}
                  <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-carbon-950 text-xs font-bold">
                    {step.step}
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:glow-sm transition-all duration-300 mt-2">
                    <step.icon className="w-7 h-7 text-emerald-400" strokeWidth={1.8} />
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-emerald-400/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#contact"
            onClick={() => {
              sessionStorage.setItem('prefill_service', 'Tech Sponsorship');
            }}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-carbon-950 font-semibold text-base hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 glow-sm hover:glow-emerald"
          >
            <Rocket className="w-5 h-5" />
            Apply for Sponsorship
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
