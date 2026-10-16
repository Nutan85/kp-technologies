import { motion } from 'framer-motion';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 25% 0%, rgba(6, 182, 212, 0.12) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 40%), radial-gradient(circle at 10% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 40%)',
        }}
      />
      <motion.div
        className="absolute top-[8%] left-[5%] w-72 h-72 rounded-full bg-cyan-500/8 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[8%] w-96 h-96 rounded-full bg-indigo-500/6 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[45%] left-[55%] w-64 h-64 rounded-full bg-cyan-400/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-900/80 to-transparent" />
    </div>
  );
}
