export const correctImages: string[] = [
  "https://preview.redd.it/ohio-impressed-v0-oc72kazv77ig1.png?width=1170&format=png&auto=webp&s=b35a32e666a9e084cf3ecbd0ad50875fc12ddfcd",
  "https://i.ytimg.com/vi/4MbT9crhTwE/maxresdefault.jpg",
  "https://media.tenor.com/2zeEpwGZAQ4AAAAe/spongebob-driving.png",
  "https://i.pinimg.com/736x/fa/95/a5/fa95a5adba0b448a4866d3c78598ed9f.jpg",
  "https://media.tenor.com/LEIWAEsO53IAAAAe/meme.png",
  "https://preview.redd.it/please-help-me-find-the-original-artist-for-this-v0-hmz0dflk09kb1.jpg?width=2800&format=pjpg&auto=webp&s=d6dff326698baf566b30bd06bff01f367451de63",
];

export function pickRandomImage(): string {
  return correctImages[Math.floor(Math.random() * correctImages.length)];
}
