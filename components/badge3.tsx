import React from "react";
import clsx from "clsx";
import Badge from "./badge";
import { Calendar, Clock } from "lucide-react";

interface BadgeProps {
  icon?: React.ReactNode;
  title: string;
  organization?: string;
  badgeTitle?: string;
  date?: string;
  time?: string;
  className?: string;
  iconClassName?: string;
}

export default function Badge3({
  icon,
  title,
  badgeTitle,
  organization,
  date,
  time,
  className,
  iconClassName,
}: BadgeProps) {
  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row items-start sm:items-center justify-between w-full rounded-2xl p-3 md:p-4 gap-3 sm:gap-4",
        className
      )}
    >
      <div className="flex items-start sm:items-center w-full sm:w-auto">
        {icon && (
          <div
            className={clsx(
              "rounded-xl flex items-center justify-center shrink-0",
              iconClassName
            )}
          >
            {icon}
          </div>
        )}
        <div className="px-3 md:px-6 flex-1">
          <h3 className="font-semibold text-teal-700 mb-1 text-sm md:text-base">
            {title}
          </h3>
          <p className="text-teal-600 text-xs md:text-sm mt-2 mb-1">
            {organization}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            {/* Date */}
            {date && (
              <div className="flex items-center gap-1 md:gap-2 text-emerald-700 text-xs md:text-sm">
                <Calendar size={14} className="md:w-4 md:h-4" />
                <span>{date}</span>
              </div>
            )}

            {/* Time */}
            {time && (
              <div className="flex items-center gap-1 md:gap-2 text-emerald-700 text-xs md:text-sm">
                <Clock size={14} className="md:w-4 md:h-4" />
                <span>{time}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {badgeTitle && <Badge text={badgeTitle} />}
    </div>
  );
}
