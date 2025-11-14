"use client";

import Link from "next/link";
import Button from "../button";
import Badge from "../badge";
import { ArrowLeft, Award, Heart } from "lucide-react";

export default function OrganizerNavbar() {
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
              <div className="flex items-center justify-center p-1.5 md:p-2 bg-emerald-600 rounded-xl md:rounded-2xl">
                <Heart size={20} className="md:w-7 md:h-7 text-white" />
              </div>
              <span className="hidden sm:inline text-sm md:text-base">
                Kontribusi.id
              </span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
            <Badge
              icon={<Award size={14} className="md:w-4 md:h-4" />}
              text="Verified Organization"
              bgColor={false}
              border={true}
              color="green"
              className="hidden md:inline-flex text-xs md:text-sm"
            />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs md:text-sm font-semibold">
              YB
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
