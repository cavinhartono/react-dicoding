import React from "react";
import Note from "./Note";

export default function Archive({ onDelete, notes, onArchive }) {
  return (
    <div className="grid grid-col-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
      {notes.map((note) => (
        <Note
          label="Pindah"
          key={note.id}
          onDelete={onDelete}
          buttonData={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}
