import { useState, useCallback, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle2, XCircle, X, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface ToastItem {
  id: number;
  type: ToastType;
  message: string;
  leaving?: boolean;
}

let toastIdCounter = 0;

type ToastFn = (message: string, type?: ToastType) => void;
const listeners: Set<ToastFn> = new Set();

export function toast(message: string, type: ToastType = 'success') {
  listeners.forEach((fn) => fn(message, type));
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timeoutsRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, leaving: true } : t)));
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  }, []);

  const addToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = ++toastIdCounter;
    setToasts((prev) => [...prev, { id, type, message }]);
    const timer = setTimeout(() => removeToast(id), 4500);
    timeoutsRef.current.set(id, timer);
  }, [removeToast]);

  useEffect(() => {
    listeners.add(addToast);
    return () => {
      listeners.delete(addToast);
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current.clear();
    };
  }, [addToast]);

  const config: Record<ToastType, { icon: typeof CheckCircle2; color: string; border: string; bg: string }> = {
    success: { icon: CheckCircle2, color: 'text-cyan-400', border: 'border-cyan-400/30', bg: 'bg-navy-900' },
    error: { icon: XCircle, color: 'text-red-400', border: 'border-red-400/30', bg: 'bg-navy-900' },
    info: { icon: Info, color: 'text-indigo-400', border: 'border-indigo-400/30', bg: 'bg-navy-900' },
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2.5 items-center pointer-events-none">
      {toasts.map((t) => {
        const cfg = config[t.type];
        const Icon = cfg.icon;
        return (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-xl border ${cfg.border} ${cfg.bg} backdrop-blur-xl shadow-lg ${t.leaving ? 'animate-toast-out' : 'animate-toast-in'}`}
          >
            <Icon className={`w-5 h-5 ${cfg.color} flex-shrink-0`} />
            <span className="text-sm font-medium text-slate-100">{t.message}</span>
            <button
              onClick={() => removeToast(t.id)}
              className="ml-2 text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>,
    document.body
  );
}
