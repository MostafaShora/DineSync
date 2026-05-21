"use client";

import React, { useEffect, ReactNode } from "react";

/* =========================
   Types
========================= */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

/* =========================
   Component
========================= */

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  /* =========================
     Lock body scroll when open
  ========================= */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  /* =========================
     Backdrop click handler
  ========================= */
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/25 backdrop-blur-sm p-4 sm:p-6 no-print transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
      dir="rtl"
      onClick={handleBackdropClick}
    >
      {/* Modal container */}
      <div className="bg-[#f0ebd8]/95 backdrop-blur-xl border border-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-4xl w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="px-7 py-5 border-b border-[#0A3622]/10 flex justify-between items-center shrink-0">
          <h3 className="text-xl font-bold text-[#0A3622] tracking-tight">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0A3622]/5 hover:bg-[#0A3622]/15 text-[#0A3622] transition-colors duration-200 active:scale-95"
            aria-label="Close modal"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-7 overflow-y-auto flex-1 relative scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
