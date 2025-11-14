import { Award } from "lucide-react";
import clsx from "clsx";

interface BadgeProps {
  text: string;
  color?: "red" | "green" | "blue" | "yellow";
  icon?: React.ReactNode;
  border?: boolean;
  bgColor?: boolean;
  className?: string;
}

export default function Badge({
  text,
  color = "green",
  icon = <Award size={16} />,
  border = false,
  bgColor = true,
  className,
}: BadgeProps) {
  const colorMap: Record<string, { bg: string; text: string; border: string }> =
    {
      red: {
        bg: "bg-red-100 text-red-800",
        text: "text-red-800",
        border: "border border-red-800",
      },
      green: {
        bg: "bg-emerald-600 text-white",
        text: "text-green-600",
        border: "border border-green-600",
      },
      blue: {
        bg: "bg-blue-100 text-blue-800",
        text: "text-blue-800",
        border: "border border-blue-800",
      },
      yellow: {
        bg: "bg-yellow-100 text-yellow-800",
        text: "text-yellow-800",
        border: "border border-yellow-800",
      },
    };

  const styles = colorMap[color];
  const combinedClassName = clsx(`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`, {
    [styles.bg]: bgColor,
    [styles.border]: border,
    [styles.text]: !bgColor && !border,
  }, className);

  return (
    <span className={combinedClassName}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </span>
  );
}
