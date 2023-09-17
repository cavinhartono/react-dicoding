import React from "react";
import Item from "./Item";

export default function List({ contacts }) {
  return (
    <div className="w-full">
      {contacts.map((contact) => (
        <Item key={contact.id} {...contact} />
      ))}
    </div>
  );
}
