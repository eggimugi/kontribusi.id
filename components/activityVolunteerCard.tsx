import React from "react";
import Image from "next/image";
import { MapPin, Calendar, Clock, Users } from "lucide-react";

interface ActivityVolunteerCardProps {
  image?: string;
  type?: string;
  matchPercentage?: number;
  title: string;
  tertiaryTitle?: string;
  organization: string;
  location?: string;
  date?: string;
  time?: string;
  volunteer?: boolean;
  volunteersNeeded: number;
  volunteersJoined: number;
  tags?: string[];
  onRegister?: () => void;
}

export const ActivityVolunteerCard: React.FC<ActivityVolunteerCardProps> = ({
  image,
  type,
  matchPercentage,
  title,
  tertiaryTitle,
  organization,
  location,
  date,
  time,
  volunteer,
  volunteersNeeded,
  volunteersJoined,
  tags,
  onRegister,
}) => {
  const progress = (volunteersJoined / volunteersNeeded) * 100;

  return (
    <div className="bg-white rounded-2xl hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      {image && (
        <div className="relative">
          <Image
            src={image}
            alt={title}
            className="w-full h-56 object-cover rounded-t-2xl rounded-b-none"
            width={300}
            height={300}
          />
          <div className="absolute top-3 px-4 flex w-full justify-between">
            {type && (
              <div className="bg-white text-emerald-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                {type}
              </div>
            )}
            {matchPercentage && (
              <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                ★ {matchPercentage}% Match
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-teal-700 mb-1">{title}</h3>
        <p className="text-teal-600 text-sm mb-4">{organization}</p>

        {/* Location */}
        {location && (
          <div className="flex items-center gap-2 text-emerald-700 text-sm mb-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        )}

        {/* Date */}
        {date && (
          <div className="flex items-center gap-2 text-emerald-700 text-sm mb-2">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
        )}

        {/* Time */}
        {time && (
          <div className="flex items-center gap-2 text-emerald-700 text-sm mb-2">
            <Clock size={16} />
            <span>{time}</span>
          </div>
        )}

        {/* Volunteers */}
        {volunteer && (
          <div className="flex items-center gap-2 text-emerald-700 text-sm mb-4">
            <Users size={16} />
            <span>
              {volunteersJoined}/{volunteersNeeded} volunteer
            </span>
          </div>
        )}

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-2 mb-4 overflow-hidden">
          <div
            className="bg-gray-800 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-teal-600 text-teal-600 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Register Button */}
        {onRegister && (
          <button
            onClick={onRegister}
            className="w-full bg-emerald-700 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Daftar Sekarang
          </button>
        )}

        {tertiaryTitle && (
          <p className="text-teal-600 text-sm mb-4">{tertiaryTitle}</p>
        )}
      </div>
    </div>
  );
};
