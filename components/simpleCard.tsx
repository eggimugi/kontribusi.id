import React from "react";

interface ProblemCardProps {
  title: string;
  description?: string;
  normalItems?: string[];
  iconItems?: { title: string; description: string; icon?: React.ReactNode }[];
  color?: "red" | "orange" | "blue" | "green";
  icon?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function SimpleCard({
  title,
  description,
  normalItems,
  iconItems,
  color = "red",
  icon,
  buttonText,
  onButtonClick,
}: ProblemCardProps) {
  const colorMap: Record<string, string> = {
    red: "bg-rose-50 border-rose-300 text-rose-900",
    orange: "bg-orange-50 border-orange-300 text-orange-900",
    blue: "bg-blue-50 border-blue-300 text-blue-900",
    green: "bg-green-50 border-green-300 text-green-900",
  };

  const iconBgMap: Record<string, string> = {
    red: "bg-rose-200 text-rose-700",
    orange: "bg-orange-200 text-orange-700",
    blue: "bg-blue-200 text-blue-700",
    green: "bg-green-200 text-green-700",
  };

  const buttonBgMap: Record<string, string> = {
    red: "bg-rose-600 hover:bg-rose-700",
    orange: "bg-orange-600 hover:bg-orange-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
  };

  return (
    <div
      className={`rounded-2xl p-8 w-full min-h-96 border ${colorMap[color]} shadow-sm`}
    >
      {/* Header (icon + title) */}
      <div className="flex flex-col justify-center items-start space-y-12 mb-3">
        {icon && (
          <div
            className={`p-4 rounded-xl ${iconBgMap[color]} flex items-center justify-center`}
          >
            {icon}
          </div>
        )}
        <h3 className="text-base font-semibold">{title}</h3>

        {description && <p className="text-sm mt-2">{description}</p>}
      </div>

      {/* List items */}
      {normalItems && (
        <ul className="list-disc list-outside space-y-2 text-sm pl-3 pr-12 mt-12">
          {normalItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {iconItems && (
        <div className="space-y-6 mt-12">
          {iconItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              {item.icon && (
                <div
                  className={`p-3 rounded-lg ${iconBgMap[color]} flex items-center justify-center`}
                >
                  {item.icon}
                </div>
              )}
              <div>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Button */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className={`mt-8 px-5 py-2 rounded-lg text-white ${buttonBgMap[color]} transition`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
