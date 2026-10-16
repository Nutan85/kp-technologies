import { motion } from 'framer-motion';
import { Cpu, Target, Users, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision Engineering',
    desc: 'Every project is built with meticulous attention to detail, from architecture to deployment.',
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    desc: 'We work as an extension of your team, with transparent communication throughout.',
  },
  {
    icon: Award,
    title: '75+ Years of Legacy',
    desc: 'Backed by KP Industries engineering heritage, we bring industrial rigor to software.',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Oriented',
    desc: 'We build products designed to scale — from MVP to millions of users.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Engineering Meets Digital Innovation
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            KP Technologies is a modern software development and digital innovation company
            by KP Industries. We combine decades of engineering excellence with cutting-edge
            technology to deliver products that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">{value.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Brand statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl glass-strong">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center glow-sm">
              <Cpu className="w-5 h-5 text-navy-900" strokeWidth={2.5} />
            </div>
            <span className="text-slate-300 text-sm">
              <span className="font-display font-bold text-white">KP Technologies</span>
              {' — '}
              <span className="text-cyan-400">by KP Industries</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
