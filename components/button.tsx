"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  children: React.ReactNode; // teks di dalam tombol
  href?: string; // jika diisi, tombol akan navigasi ke halaman tersebut
  onClick?: () => void; // fungsi manual jika butuh aksi custom
  variant?: "primary" | "secondary"; // gaya tombol
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
    "px-4 py-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
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
