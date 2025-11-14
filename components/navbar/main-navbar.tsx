"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function Navbar() {

  const links = [
    { href: "/volunteer", label: "Untuk Volunteer" },
    { href: "/organizer", label: "Untuk Organizer" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-20 py-2">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-emerald-600 flex items-center gap-3"
          >
            <div className="flex items-center justify-center p-2 bg-emerald-600 rounded-2xl">
              <Heart size={28} className="text-white" />
            </div>
            <span>Kontribusi.id</span>
          </Link>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2 ${
                  link.label === "Untuk Volunteer"
                    ? "bg-emerald-600 text-white hover:bg-transparent hover:border hover:border-black hover hover:text-black transition"
                    : "bg-transparent border border-black text-black hover:bg-emerald-600 hover:border-none hover:text-white transition"
                } transition`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Tombol login kecil di mobile */}
          <div className="md:hidden">
            <Link
              href="/login"
              className="text-sm px-3 py-2 bg-blue-600 text-white rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
