import React from "react";
import Image from "./Image";
import Body from "./Body";

export default function Item({ imageUrl, name, tag }) {
  return (
    <div className="w-full px-4 py-6">
      <Image imageUrl={imageUrl} />
      <Body name={name} tag={tag} />
    </div>
  );
}
