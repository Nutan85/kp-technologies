import { motion } from 'framer-motion';
import {
  Boxes, Layers, Server, FileCode2, Wind, Github, Database, Cloud, Zap, Globe,
} from 'lucide-react';

const techs = [
  { name: 'React', icon: Boxes },
  { name: 'Next.js', icon: Layers },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: FileCode2 },
  { name: 'Django', icon: Layers },
  { name: 'Java', icon: Github },
  { name: 'Flutter', icon: Wind },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Firebase', icon: Zap },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Our Stack
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Technologies We Work With
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A modern toolkit spanning frontend, backend, mobile, and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group glass-card rounded-xl p-5 flex flex-col items-center gap-3 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/15 to-indigo-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 group-hover:glow-sm transition-all duration-300">
                <tech.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
