import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from "react";
import { X, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export interface ConsultationModalRef {
  open: () => void;
  close: () => void;
}

interface ConsultationModalProps {
  // Empty for now
}

const ConsultationModal = forwardRef<ConsultationModalRef, ConsultationModalProps>((props, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleOpen = () => {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    };
    const handleClose = () => {
      dialogRef.current?.close();
      document.body.style.overflow = "";
    };

    window.addEventListener("open-consultation-modal", handleOpen);
    window.addEventListener("close-consultation-modal", handleClose);

    return () => {
      window.removeEventListener("open-consultation-modal", handleOpen);
      window.removeEventListener("close-consultation-modal", handleClose);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    },
    close: () => {
      dialogRef.current?.close();
      document.body.style.overflow = "";
    },
  }));

  const handleClose = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  // Fallback backdrop click close for older browsers
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  if (!mounted) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 m-auto h-fit max-h-[90vh] max-w-lg w-[calc(100%-2rem)] bg-white/70 dark:bg-[#0a1d2d]/70 backdrop-blur-2xl border border-outline-variant/20 dark:border-white/10 rounded-2xl shadow-2xl p-8 outline-none transition-all duration-300 scale-95 opacity-0 open:scale-100 open:opacity-100 overflow-y-auto no-scrollbar"
      style={{
        transitionProperty: "transform, opacity, overlay, display",
        transitionBehavior: "allow-discrete",
      }}
    >
      {/* Premium Backdrop filter applied via dynamic style tag or browser fallback */}
      <style>{`
        dialog::backdrop {
          background-color: rgba(10, 29, 45, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          animation: backdrop-fade 0.3s ease-out forwards;
        }
        @keyframes backdrop-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="font-label text-primary-custom tracking-[0.3em] uppercase text-[10px] mb-2 block">
            The Atelier
          </span>
          <h3 className="text-2xl font-headline tracking-tight text-[#0a1d2d] dark:text-white">
            Book a Consultation
          </h3>
          <p className="font-body text-xs text-[#0a1d2d]/60 dark:text-white/60 mt-2 leading-relaxed">
            Connect with our head designer and master artisans to begin crafting your bespoke masterpiece.
          </p>
        </div>
        <button
          onClick={handleClose}
          className="p-2 rounded-full text-[#0a1d2d]/60 dark:text-white/60 hover:text-primary-custom dark:hover:text-primary-container-custom hover:bg-[#0a1d2d]/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 font-body">
        {/* Telephone Call */}
        <a
          href="tel:+251911234567"
          className="group flex items-center justify-between p-4 bg-white/30 dark:bg-white/5 border border-outline-variant/10 dark:border-white/5 rounded-xl hover:bg-primary-custom/10 hover:border-primary-custom/30 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary-custom/10 text-primary-custom">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] tracking-widest text-[#0a1d2d]/50 dark:text-white/50 uppercase block">
                Call Our Boutique
              </span>
              <span className="text-sm font-semibold text-[#0a1d2d] dark:text-white">
                +251 911 234 567
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#0a1d2d]/40 dark:text-white/40 group-hover:text-primary-custom group-hover:translate-x-1 transition-all" />
        </a>

        {/* Email Inquiry */}
        <a
          href="mailto:consultation@zewddiamonds.com?subject=Bespoke Consultation Inquiry"
          className="group flex items-center justify-between p-4 bg-white/30 dark:bg-white/5 border border-outline-variant/10 dark:border-white/5 rounded-xl hover:bg-primary-custom/10 hover:border-primary-custom/30 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary-custom/10 text-primary-custom">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] tracking-widest text-[#0a1d2d]/50 dark:text-white/50 uppercase block">
                Email Atelier
              </span>
              <span className="text-sm font-semibold text-[#0a1d2d] dark:text-white">
                consultation@zewddiamonds.com
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#0a1d2d]/40 dark:text-white/40 group-hover:text-primary-custom group-hover:translate-x-1 transition-all" />
        </a>

        {/* Instagram DM */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 bg-white/30 dark:bg-white/5 border border-outline-variant/10 dark:border-white/5 rounded-xl hover:bg-primary-custom/10 hover:border-primary-custom/30 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary-custom/10 text-primary-custom flex items-center justify-center">
              <svg
                className="w-5 h-5 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className="text-left">
              <span className="text-[10px] tracking-widest text-[#0a1d2d]/50 dark:text-white/50 uppercase block">
                Direct Message
              </span>
              <span className="text-sm font-semibold text-[#0a1d2d] dark:text-white">
                @zewd.jewellery
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#0a1d2d]/40 dark:text-white/40 group-hover:text-primary-custom group-hover:translate-x-1 transition-all" />
        </a>

        {/* Telegram Chat */}
        <a
          href="https://t.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 bg-white/30 dark:bg-white/5 border border-outline-variant/10 dark:border-white/5 rounded-xl hover:bg-primary-custom/10 hover:border-primary-custom/30 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary-custom/10 text-primary-custom flex items-center justify-center">
              <svg
                className="w-5 h-5 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </div>
            <div className="text-left">
              <span className="text-[10px] tracking-widest text-[#0a1d2d]/50 dark:text-white/50 uppercase block">
                Telegram Chat
              </span>
              <span className="text-sm font-semibold text-[#0a1d2d] dark:text-white">
                t.me/zewddiamonds
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#0a1d2d]/40 dark:text-white/40 group-hover:text-primary-custom group-hover:translate-x-1 transition-all" />
        </a>

        {/* TikTok Showcase */}
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 bg-white/30 dark:bg-white/5 border border-outline-variant/10 dark:border-white/5 rounded-xl hover:bg-primary-custom/10 hover:border-primary-custom/30 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary-custom/10 text-primary-custom flex items-center justify-center">
              <svg
                className="w-5 h-5 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </div>
            <div className="text-left">
              <span className="text-[10px] tracking-widest text-[#0a1d2d]/50 dark:text-white/50 uppercase block">
                TikTok Showcase
              </span>
              <span className="text-sm font-semibold text-[#0a1d2d] dark:text-white">
                @zewddiamonds
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#0a1d2d]/40 dark:text-white/40 group-hover:text-primary-custom group-hover:translate-x-1 transition-all" />
        </a>

        {/* Location Map Pin */}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 bg-white/30 dark:bg-white/5 border border-outline-variant/10 dark:border-white/5 rounded-xl hover:bg-primary-custom/10 hover:border-primary-custom/30 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary-custom/10 text-primary-custom">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] tracking-widest text-[#0a1d2d]/50 dark:text-white/50 uppercase block">
                Visit Our Atelier
              </span>
              <span className="text-xs font-semibold text-[#0a1d2d] dark:text-white">
                Bole Road, Addis Ababa, Ethiopia
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#0a1d2d]/40 dark:text-white/40 group-hover:text-primary-custom group-hover:translate-x-1 transition-all" />
        </a>
      </div>
    </dialog>
  );
});

ConsultationModal.displayName = "ConsultationModal";

export default ConsultationModal;
