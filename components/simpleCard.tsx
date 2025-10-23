import React from "react";

interface ProblemCardProps {
  title: string;
  items: string[];
  color?: "red" | "orange" | "blue" | "green";
  icon?: React.ReactNode; // Bisa diisi <AlertTriangle /> atau icon lain
}

export default function SimpleCard({
  title,
  items,
  color = "red",
  icon,
}: ProblemCardProps) {
  const colorMap: Record<string, string> = {
    red: "bg-rose-50 border-rose-300 text-rose-900",
    orange: "bg-orange-50 border-orange-300 text-orange-900",
    blue: "bg-blue-50 border-blue-300 text-blue-900",
    green: "bg-green-50 border-green-300 text-green-900",
  };

  return (
    <div
      className={`rounded-2xl p-5 w-full max-w-sm min-h-96 border ${colorMap[color]} shadow-sm`}
    >
      {/* Header (icon + title) */}
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-xl">{icon}</span>}
        <h3 className="text-base font-semibold">{title}</h3>
      </div>

      {/* List items */}
      <ul className="list-disc list-inside space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
