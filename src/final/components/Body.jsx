import React from "react";
import ActiveNote from "./ActiveNote";
import Archive from "./Archive";

export default function Body({
  onDelete,
  onActive,
  onArchive,
  activeDatas,
  archiveDatas,
}) {
  return (
    <>
      <section className="container">
        <div className="bg-blue-50 px-5 sm:px-24 py-10 md:py-20">
          <h2 className="text-2xl font-bold mb-8">Catatan</h2>
          {activeDatas.length !== 0 ? (
            <ActiveNote
              onDelete={onDelete}
              notes={activeDatas}
              onActive={onActive}
            />
          ) : (
            <p className="text-black">Tidak ada catatan</p>
          )}
        </div>
      </section>
      <section className="container">
        <div className="bg-white-50 px-5 sm:px-24 py-10 md:py-20">
          <h2 className="text-2xl font-bold mb-8">Arsip</h2>
          {archiveDatas.length !== 0 ? (
            <Archive
              onDelete={onDelete}
              notes={archiveDatas}
              onArchive={onArchive}
            />
          ) : (
            <p className="text-black">Tidak ada catatan</p>
          )}
        </div>
      </section>
    </>
  );
}
