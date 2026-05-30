"use client";

import React from "react";

/* =========================
   Types
========================= */

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
}

/* =========================
   Component
========================= */

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  icon = null,
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2.5 font-bold rounded-2xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] active:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#0A3622] text-[#f0ebd8] shadow-[0_4px_12px_rgba(10,54,34,0.25)] hover:shadow-[0_6px_16px_rgba(10,54,34,0.35)] hover:-translate-y-0.5",

    secondary:
      "bg-[#f0ebd8]/80 backdrop-blur-md text-[#0A3622] border border-[#0A3622]/10 shadow-sm hover:bg-[#e6ddc1] hover:shadow-md hover:-translate-y-0.5",

    danger:
      "bg-rose-500/15 backdrop-blur-md text-rose-700 border border-rose-500/20 shadow-[0_2px_10px_rgba(244,63,94,0.05)] hover:bg-rose-500/25 hover:shadow-sm",

    ghost:
      "bg-transparent text-slate-500 hover:bg-slate-500/10 hover:text-slate-800",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-2.5 text-sm tracking-wide",
    lg: "px-7 py-3.5 text-base tracking-wide",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && (
        <span className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
          {icon}
        </span>
      )}

      {children && <span className="truncate">{children}</span>}
    </button>
  );
};

export default Button;
