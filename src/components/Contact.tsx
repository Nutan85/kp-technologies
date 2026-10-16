import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Mail, Phone, MessageCircle, Send, Loader2, User, Building,
  CheckCircle2, Clock,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { CONTACT, SERVICE_OPTIONS, PROJECT_TYPES, sendEmailNotification } from '@/lib/contact';
import { toast } from '@/components/Toast';

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  service_required: string;
  project_type: string;
  message: string;
};

const initialForm: FormState = {
  full_name: '',
  email: '',
  phone: '',
  service_required: '',
  project_type: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const prefill = sessionStorage.getItem('prefill_type');
    if (prefill) {
      setForm((prev) => ({ ...prev, project_type: prefill }));
      sessionStorage.removeItem('prefill_type');
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.full_name || !form.email || !form.phone || !form.message) {
      toast('Please fill in all required fields.', 'error');
      return;
    }

    setLoading(true);

    try {
      // Save to Supabase
      const { error: dbError } = await supabase.from('contact_messages').insert({
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        service_required: form.service_required || null,
        project_type: form.project_type || null,
        message: form.message,
      });

      if (dbError) {
        throw new Error('Database submission failed');
      }

      // Send email via Web3Forms
      try {
        await sendEmailNotification({
          full_name: form.full_name,
          email: form.email,
          phone: form.phone,
          service_required: form.service_required,
          project_type: form.project_type,
          message: form.message,
        });
      } catch {
        // Email failed but DB saved — still show success to user
      }

      toast(`Thank you! Your message has been sent to our team at ${CONTACT.email}.`, 'success');
      setForm(initialForm);
    } catch {
      toast('Something went wrong. Please try again or call us directly.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-200 text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tell us about your project and get a free consultation with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Phone */}
            <a
              href={CONTACT.phoneHref}
              aria-label={`Call KP Technologies at ${CONTACT.phone}`}
              className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">Phone</div>
                <div className="text-white text-sm group-hover:text-cyan-400 transition-colors duration-200">{CONTACT.phone}</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp with KP Technologies at ${CONTACT.phone}`}
              className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-green-400/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-green-500/10 border border-green-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">WhatsApp</div>
                <div className="text-white text-sm group-hover:text-green-400 transition-colors duration-200">Click to chat instantly</div>
              </div>
            </a>

            {/* Email */}
            <a
              href={CONTACT.emailHref}
              className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">Email</div>
                <div className="text-white text-sm truncate group-hover:text-cyan-400 transition-colors duration-200">{CONTACT.email}</div>
              </div>
            </a>

            {/* Address */}
            <div className="glass-card rounded-2xl p-5 flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Office Address</div>
                <p className="text-white text-sm leading-relaxed">{CONTACT.address}</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">Working Hours</div>
                <div className="text-white text-sm">{CONTACT.workingHours}</div>
              </div>
            </div>

            {/* Map */}
            <div className="glass-card rounded-2xl p-2 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.85!3d18.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzAwLjAiTiA3M8KwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px', filter: 'invert(0.9) hue-rotate(175deg) brightness(0.85) contrast(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KP Technologies — Pune Office"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-7 lg:p-8 self-start"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <Send className="w-5 h-5 text-cyan-400" />
                <h3 className="font-display text-xl font-bold text-white">Send Us a Message</h3>
              </div>

              <div>
                <label className={labelClass}>Full Name <span className="text-cyan-400">*</span></label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input type="text" name="full_name" required value={form.full_name} onChange={handleChange} placeholder="John Doe" className={`${inputClass} pl-10`} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Email <span className="text-cyan-400">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={`${inputClass} pl-10`} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Phone <span className="text-cyan-400">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={`${inputClass} pl-10`} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Service Required</label>
                  <select name="service_required" value={form.service_required} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" className="bg-navy-800">Select...</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-navy-800">{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Project Type</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 z-10" />
                    <select name="project_type" value={form.project_type} onChange={handleChange} className={`${inputClass} pl-10 appearance-none cursor-pointer`}>
                      <option value="" className="bg-navy-800">Select...</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-navy-800">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClass}>Message <span className="text-cyan-400">*</span></label>
                <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your project, goals, and timeline..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold text-sm hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 glow-sm hover:glow-cyan disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  <>Send Message <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
                )}
              </button>

              <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/60" />
                Your message is sent directly to {CONTACT.email}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
