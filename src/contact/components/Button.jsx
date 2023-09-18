import React from "react";

export default function Button({ label, id, action, color }) {
  return (
    <button
      className={`px-4 py-2 text-white ${color}`}
      onClick={() => action(id)}
    >
      {label}
    </button>
  );
}
