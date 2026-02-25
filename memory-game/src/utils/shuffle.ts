import type { CardType } from "../hooks/useMemoryGame";

// fisher-Yates shuffle algorithm:
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// creates duplicated and shuffled cards for memory game:
export function generateShuffledCards(images: string[]): CardType[] {
  const duplicated = [...images, ...images];

  const shuffledImages = shuffleArray(duplicated);

  return shuffledImages.map((image, index) => ({
    id: `${image}-${index}`,
    image,
    isFlipped: false,
    isMatched: false,
  }));
}
