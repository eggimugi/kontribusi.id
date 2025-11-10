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
          <div className="flex-1 flex items-center gap-6">
            <Button
              href="/"
              variant="transparent"
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Kembali
            </Button>

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
          </div>

          <div className="flex-1 flex items-center justify-end">
            <Badge
              icon={<Award size={16} />}
              text="Organizer Portal"
              bgColor={false}
              border={true}
              color="green"
            />
            <div className="ml-4 w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white text-sm font-semibold">
              AB
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
