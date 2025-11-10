"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "light" | "transparent" | "gray";
  className?: string;
}

export default function Button({
  icon,
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href); 
    } else if (onClick) {
      onClick(); 
    }
  };

  const baseStyle =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none";
  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-white hover:border hover:border-emerald-600 hover:text-emerald-600",
    secondary:
      "bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-600 hover:border-none hover:text-white",
    light:
      "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 hover:text-emerald-800",
    transparent:
      "bg-transparent text-emerald-600 hover:bg-emerald-50 hover:text-emerald-800",
    gray:
      "bg-gray-100 text-gray-700 hover:bg-gray-100 hover:text-gray-800",
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
