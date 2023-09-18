import React from "react";
import Item from "./Item";

export default function List({ contacts, onDelete }) {
  return (
    <div className="w-full">
      {contacts.map((contact) => (
        <Item
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  );
}
