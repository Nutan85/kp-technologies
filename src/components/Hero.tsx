import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, useMotionValue } from 'framer-motion';
import { Rocket, ArrowRight, Building2, Briefcase, Heart, IndianRupee } from 'lucide-react';

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.floor(latest).toString()),
    });
    return () => controls.stop();
  }, [inView, count, value]);

  return (
    <span ref={ref} className="font-display text-2xl lg:text-3xl font-bold text-white">
      {prefix}{display}{suffix}
    </span>
  );
}

const stats = [
  { icon: Building2, prefix: '', value: 75, suffix: '+ Years', label: 'Engineering Heritage (KP Industries)' },
  { icon: Briefcase, prefix: '', value: 150, suffix: '+ Projects', label: 'Delivered' },
  { icon: Heart, prefix: '', value: 100, suffix: '%', label: 'Client Satisfaction' },
  { icon: IndianRupee, prefix: '₹', value: 25, suffix: 'L+', label: 'Sponsorship & Dev Grants' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan-400/20 text-sm font-medium">
            <Rocket className="w-4 h-4 text-cyan-400" fill="currentColor" />
            <span className="text-slate-200">Tech Venture by KP Industries</span>
            <span className="text-cyan-400/60">|</span>
            <span className="text-gradient-cyan font-semibold">Pune's Premier Tech Partner</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-[1.1] tracking-tight mb-6"
        >
          <span className="text-gradient-white">Next-Gen Software, Web &amp;</span>
          <br />
          <span className="text-gradient-mix">Mobile App Development</span>
          <br />
          <span className="text-gradient-white">with Strategic Tech Sponsorships</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-slate-400 text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          We craft scalable websites, high-performance mobile apps, and custom software.
          Got a breakthrough startup idea? We provide technical dev sponsorships.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold text-base hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 glow-sm hover:glow-cyan-strong"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#sponsorship"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border-white/15 text-white font-semibold text-base hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300"
          >
            <Rocket className="w-5 h-5 text-cyan-400" />
            Apply for Tech Sponsorship
          </a>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className={`glass-card rounded-2xl p-5 lg:p-6 text-center hover:border-cyan-400/30 transition-all duration-300 group ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="text-xs lg:text-sm text-slate-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
