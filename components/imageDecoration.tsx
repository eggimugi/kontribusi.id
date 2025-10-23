import React from "react";

interface ImageDecorationProps {
  imageSrc: string;
  imageAlt?: string;
  backgroundColor?: string;
  rotate?: number;
  borderRadius?: string;
  width?: string;
  height?: string;
}

export const ImageDecoration: React.FC<ImageDecorationProps> = ({
  imageSrc,
  imageAlt = "decoration",
  backgroundColor = "#5AD79C",
  rotate = 2,
  borderRadius = "24px",
  width = "100%",
  height = "300px",
}) => {
  return (
    <div className="relative" style={{ width, height }}>
      {/* Background Box Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor,
          borderRadius,
          transform: `rotate(${rotate}deg)`,
        }}
      />

      {/* Image Layer */}
      <div className="absolute inset-0" style={{ borderRadius }}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ borderRadius }}
        />
      </div>
    </div>
  );
};
