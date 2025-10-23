"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Untuk Volunteer" },
    { href: "/events", label: "Untuk Organizer" },
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
            <Image
              src="/logo.svg"
              alt="Next.js logo"
              width={40}
              height={20}
              priority
            />
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
                    : "bg-transparent border border-black text-black hover:bg-[#30C7A8] hover:border-none hover:text-white transition"
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
