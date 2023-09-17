import React from "react";

export default function Image({ imageUrl }) {
  return (
    <div className="w-50 h-50">
      <img
        src={imageUrl}
        alt={imageUrl}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
