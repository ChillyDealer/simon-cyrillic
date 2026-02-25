export const correctImages: string[] = [
  "https://preview.redd.it/ohio-impressed-v0-oc72kazv77ig1.png?width=1170&format=png&auto=webp&s=b35a32e666a9e084cf3ecbd0ad50875fc12ddfcd",
  "https://i.ytimg.com/vi/4MbT9crhTwE/maxresdefault.jpg",
];

export function pickRandomImage(): string {
  return correctImages[Math.floor(Math.random() * correctImages.length)];
}
