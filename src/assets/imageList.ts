// src/assets/imageList.ts
export const imageList = Object.keys(
  import.meta.glob("/public/images/*.webp", { eager: true })
).map((path) => path.replace("/public/images/", ""));
