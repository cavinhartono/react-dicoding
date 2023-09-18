import React from "react";

export default function Delete({ id, onDelete }) {
  return (
    <button
      className="px-4 py-8 bg-red-600 text-white"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  );
}
