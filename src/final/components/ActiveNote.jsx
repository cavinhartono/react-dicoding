import React from "react";
import Note from "./Note";

export default function ActiveNote({ notes, onDelete, onActive }) {
  return (
    <div className="grid grid-col-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
      {notes.map((note) => (
        <Note
          label="Arsip"
          key={note.id}
          onDelete={onDelete}
          buttonData={onActive}
          {...note}
        />
      ))}
    </div>
  );
}
