import React from "react";

export default function Image({ imageUrl }) {
  return (
    <div className="w-[64px] h-[64px]">
      <img
        src={imageUrl}
        alt={imageUrl}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
