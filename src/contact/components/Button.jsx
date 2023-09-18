import React from "react";

export default function Button({ label, id, action }) {
  const colors = {
    hapus: "px-4 py-2 bg-red-600 text-white",
    tambah: "px-4 py-2 bg-green-600 text-white",
    edit: "px-4 py-2 bg-yellow-600 text-white",
  };

  const color = colors[label.toLowerCase()];

  return (
    <button className={color} onClick={() => action(id)}>
      {label}
    </button>
  );
}
