import React from "react";
import { CheckCircle2, LockIcon } from "lucide-react";

interface BadgeProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  locked?: boolean;
}

const Badge2: React.FC<BadgeProps> = ({ title, subtitle, icon, locked }) => {
  return (
    <div
      className={`w-full max-w-md mx-auto rounded-2xl p-4 md:p-6 shadow-sm border transition
      ${
        locked
          ? "bg-gray-100 border-gray-200 text-gray-400"
          : "bg-green-50 border-green-300 text-green-800"
      }`}
    >
      <div className="flex flex-col items-center gap-2 md:gap-3">
        {/* Icon */}
        <div className={`text-3xl md:text-4xl ${locked ? "opacity-40" : ""}`}>
          {icon}
        </div>

        {/* Title */}
        <h3
          className={`text-base md:text-xl text-center font-semibold ${
            locked ? "text-gray-500" : "text-green-800"
          }`}
        >
          {title}
        </h3>

        {/* Subtitle */}
        <p
          className={`text-xs md:text-sm text-center ${
            locked ? "text-gray-400" : "text-green-700"
          }`}
        >
          {subtitle}
        </p>

        {/* Locked / Unlocked Button */}
        <div
          className={`mt-2 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2
          ${locked ? "bg-gray-300 text-gray-600" : "bg-green-600 text-white"}
        `}
        >
          {locked ? <LockIcon size={14} /> : <CheckCircle2 size={14} />}
          {locked ? "Terkunci" : "Terbuka"}
        </div>
      </div>
    </div>
  );
};

export default Badge2;
