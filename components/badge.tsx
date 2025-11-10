interface BadgeProps {
  text: string;
  color?: "red" | "green" | "blue" | "yellow";
  icon?: React.ReactNode;
  border?: boolean;
  bgColor?: boolean;
}

export default function Badge({
  text,
  color = "blue",
  icon,
  border = false,
  bgColor = true,
}: BadgeProps) {
  const colorMap: Record<string, { bg: string; text: string; border: string }> =
    {
      red: {
        bg: "bg-red-100 text-red-800",
        text: "text-red-800",
        border: "border border-red-800",
      },
      green: {
        bg: "bg-green-100 text-green-800",
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
  const className = `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
    bgColor ? styles.bg : ""
  } ${border ? styles.border : ""} ${!bgColor && !border ? styles.text : ""}`;

  return (
    <span className={className}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </span>
  );
}
