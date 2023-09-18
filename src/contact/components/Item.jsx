import React from "react";
import Image from "./Image";
import Body from "./Body";
import Delete from "./Delete";

export default function Item({ id, imageUrl, name, tag, onDelete }) {
  return (
    <div className="w-full px-4 py-6">
      <Image imageUrl={imageUrl} />
      <Body name={name} tag={tag} />
      <Delete id={id} onDelete={onDelete} />
    </div>
  );
}
