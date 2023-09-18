import React from "react";

export default function Image({ imageUrl }) {
  return (
    <div className="w-4 h-4">
      <img
        src={imageUrl}
        alt={imageUrl}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
