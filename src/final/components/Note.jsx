import React from "react";
import { showFormattedDate } from "../../utills/todolist";

export default function Note({
  id,
  title,
  body,
  createdAt,
  onDelete,
  buttonData,
  label,
}) {
  return (
    <div className="mx-auto p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="pb-2">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-black">
          {title}
        </h5>
        <span className="text-sm text-black opacity-75">
          {showFormattedDate(createdAt)}
        </span>
        <p className="my-3 font-normal text-black h-max">{body}</p>
      </div>
      <div className="flex w-full gap-2">
        <button
          onClick={() => onDelete(id)}
          className="inline-flex w-full justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
        >
          Delete
        </button>
        <button
          onClick={() => buttonData(id)}
          className="inline-flex w-full justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
        >
          {label}
        </button>
      </div>
    </div>
  );
}
