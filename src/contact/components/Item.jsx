import React from "react";
import Image from "./Image";
import Body from "./Body";
import Button from "./Button";

export default function Item({ id, imageUrl, name, tag, onDelete }) {
  return (
    <div className="w-full flex justify-between items-center gap-8 px-4 py-6">
      <Image imageUrl={imageUrl} />
      <Body name={name} tag={tag} />
      <Button label="Hapus" id={id} action={onDelete} />
    </div>
  );
}
