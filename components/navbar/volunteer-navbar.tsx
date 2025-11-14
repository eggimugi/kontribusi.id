"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../button";
import Badge from "../badge";
import { ArrowLeft, Award } from "lucide-react";

export default function VolunteerNavbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-20 py-2">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-1 flex items-center gap-2 md:gap-6">
            <Button
              href="/"
              variant="transparent"
              className="flex items-center gap-1 md:gap-2 text-xs md:text-sm px-2 md:px-4"
            >
              <ArrowLeft size={14} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">Kembali</span>
            </Button>

            {/* Logo */}
            <Link
              href="/"
              className="font-bold text-emerald-600 flex items-center gap-2 md:gap-3"
            >
              <Image
                src="/logo.svg"
                alt="Next.js logo"
                width={32}
                height={16}
                className="md:w-10 md:h-5"
                priority
              />
              <span className="hidden sm:inline text-sm md:text-base">
                Kontribusi.id
              </span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
            <Badge
              icon={<Award size={14} className="md:w-4 md:h-4" />}
              text="Organizer Portal"
              bgColor={false}
              border={true}
              color="green"
              className="hidden md:inline-flex text-xs md:text-sm"
            />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs md:text-sm font-semibold">
              AB
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
