// src/assets/imageList.ts
export const imageList = Object.keys(
  import.meta.glob("/public/images/**/*.*", { eager: true })
).map((path) => path.replace("/public/images/", ""));
