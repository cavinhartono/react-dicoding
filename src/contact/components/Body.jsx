import React from "react";

export default function Body({ name, tag }) {
  return (
    <div className="w-full">
      <h2 className="text-black text-2xl">{name}</h2>
      <h4 className="text-black text-md">@{tag}</h4>
    </div>
  );
}
