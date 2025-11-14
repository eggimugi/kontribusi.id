import React from "react";
import clsx from "clsx";

interface SimpleCardProps {
  title: string;
  bigTitle?: boolean;
  description?: string;
  normalItems?: string[];
  iconItems?: { title: string; description: string; icon?: React.ReactNode }[];
  icon?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;

  className?: string; // styling wrapper card
  iconClassName?: string; // styling untuk icon background
  subIconClassName?: string; // styling untuk sub icon background
  buttonClassName?: string; // styling untuk button
}

export default function SimpleCard({
  title,
  bigTitle,
  description,
  normalItems,
  iconItems,
  icon,
  buttonText,
  onButtonClick,
  className,
  iconClassName,
  subIconClassName,
  buttonClassName,
}: SimpleCardProps) {
  return (
    <div className={clsx("rounded-2xl w-full border shadow-sm", className)}>
      {/* Header */}
      <div className="flex flex-col justify-center items-start space-y-6 md:space-y-12 mb-3">
        {icon && (
          <div
            className={clsx(
              "rounded-xl flex items-center justify-center",
              iconClassName
            )}
          >
            {icon}
          </div>
        )}

        <h3
          className={clsx(
            bigTitle
              ? "text-2xl md:text-4xl font-bold"
              : "text-sm md:text-base font-semibold"
          )}
        >
          {title}
        </h3>

        {description && (
          <p className="text-xs md:text-sm mt-2">{description}</p>
        )}
      </div>

      {/* Normal List */}
      {normalItems && (
        <ul className="list-disc list-outside space-y-2 text-xs md:text-sm pl-3 pr-4 md:pr-12 mt-6 md:mt-12">
          {normalItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {/* Icon List */}
      {iconItems && (
        <div className="space-y-4 md:space-y-6 mt-6 md:mt-12">
          {iconItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 md:space-x-4"
            >
              {item.icon && (
                <div
                  className={clsx(
                    "p-2 md:p-3 rounded-lg flex items-center justify-center shrink-0",
                    subIconClassName
                  )}
                >
                  {item.icon}
                </div>
              )}

              <div>
                <h4 className="text-xs md:text-sm font-semibold">
                  {item.title}
                </h4>
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
          className={clsx(
            "mt-6 md:mt-8 px-4 md:px-5 py-2 rounded-lg transition text-xs md:text-sm",
            buttonClassName
          )}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
