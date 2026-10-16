import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

export default function FloatingDock() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actions = [
    { icon: MessageCircle, label: 'WhatsApp', href: CONTACT.whatsapp, external: true },
    { icon: Phone, label: 'Call Now', href: CONTACT.phoneHref, external: false },
    { icon: Mail, label: 'Email Us', href: CONTACT.emailHref, external: false },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-2.5"
              >
                {actions.map((action, i) => (
                  <motion.a
                    key={action.label}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noopener noreferrer' : undefined}
                    aria-label={action.label === 'WhatsApp' ? `Chat on WhatsApp with KP Technologies at ${CONTACT.phone}` : action.label === 'Call Now' ? `Call KP Technologies at ${CONTACT.phone}` : `Email KP Technologies at ${CONTACT.email}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-center gap-3 glass-strong rounded-full pl-4 pr-5 py-3 border border-white/10 text-white hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300"
                  >
                    <action.icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-medium whitespace-nowrap">{action.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center glow-cyan hover:glow-cyan-strong transition-all duration-300"
            aria-label={expanded ? 'Close quick contact menu' : 'Open quick contact menu'}
            aria-expanded={expanded}
          >
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6 text-white" strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
            {!expanded && (
              <span className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-20" />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
