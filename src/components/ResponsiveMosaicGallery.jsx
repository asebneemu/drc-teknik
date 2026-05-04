import React from "react";

const defaultImages = [
  "/gallery-1.jpeg",
  "/gallery-2.jpeg",
  "/gallery-3.jpeg",
  "/gallery-4.jpeg",
  "/gallery-5.jpeg",
  "/gallery-6.jpeg",
  "/gallery-7.jpeg",
  "/gallery-8.jpeg",
  "/gallery-9.jpeg",
  "/gallery-10.jpeg",
  "/gallery-11.jpeg",
];

const slots = [
  "col-start-1 col-end-5 row-start-1 row-end-3",
  "col-start-5 col-end-8 row-start-1 row-end-3",
  "col-start-8 col-end-13 row-start-1 row-end-3",

  "col-start-1 col-end-4 row-start-3 row-end-5",
  "col-start-4 col-end-7 row-start-3 row-end-5",
  "col-start-7 col-end-9 row-start-3 row-end-5",
  "col-start-9 col-end-13 row-start-3 row-end-5",

  "col-start-1 col-end-3 row-start-5 row-end-7",
  "col-start-3 col-end-7 row-start-5 row-end-7",
  "col-start-7 col-end-10 row-start-5 row-end-7",
  "col-start-10 col-end-13 row-start-5 row-end-7",
];

export default function ResponsiveMosaicGallery({ images = defaultImages }) {
  const visibleImages = images.slice(0, 11);

  return (
    <div className="w-full">
      <div className="grid h-[620px] w-full grid-cols-12 grid-rows-6 gap-3">
        {visibleImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`overflow-hidden rounded-[18px] ${slots[index]}`}
          >
            <img
              src={src}
              alt={`Galeri görseli ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
