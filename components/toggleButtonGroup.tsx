"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./button";
import React from "react";

interface ToggleButton {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

interface ToggleButtonGroupProps {
  className?: string;
  buttons: ToggleButton[];
  defaultActive?: string;
  onChange?: (id: string) => void;
}

export default function ToggleButtonGroup({
  className = "",
  buttons,
  defaultActive,
  onChange,
}: ToggleButtonGroupProps) {
  const [active, setActive] = useState(defaultActive || buttons[0].id);
  const router = useRouter();

  const handleClick = (id: string) => {
    setActive(id);
    onChange?.(id);

    const href = buttons.find((btn) => btn.id === id)?.href;
    if (href) {
      router.push(href);
    }
  };

  return (
    <div
      className={`inline-flex border border-emerald-300 rounded-lg overflow-hidden ${className}`}
    >
      {buttons.map((btn, index) => {
        const isActive = active === btn.id;

        return (
          <Button
            key={btn.id}
            onClick={() => handleClick(btn.id)}
            href={btn.href}
            variant={isActive ? "primary" : "gray"}
            className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-xs md:text-sm font-medium rounded-none first:rounded-l-lg last:rounded-r-lg border-none ${
              !isActive ? "bg-white text-emerald-700 hover:bg-emerald-100" : ""
            } ${index !== 0 ? "border-l border-emerald-300" : ""}`}
          >
            {btn.icon && (
              <span className="text-sm md:text-base">{btn.icon}</span>
            )}
            <span className="hidden sm:inline">{btn.label}</span>
            <span className="sm:hidden">{btn.label.split(" ")[0]}</span>
          </Button>
        );
      })}
    </div>
  );
}
