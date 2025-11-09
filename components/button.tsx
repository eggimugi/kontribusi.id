"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  children: React.ReactNode; // teks di dalam tombol
  href?: string; // jika diisi, tombol akan navigasi ke halaman tersebut
  onClick?: () => void; // fungsi manual jika butuh aksi custom
  variant?: "primary" | "secondary" | "light"; // gaya tombol
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href); // navigasi ke halaman tertentu
    } else if (onClick) {
      onClick(); // jalankan fungsi manual
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
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
