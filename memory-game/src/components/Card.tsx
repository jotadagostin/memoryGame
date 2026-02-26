//

import type { CardType } from "../hooks/useMemoryGame";

type CardProps = {
  card: CardType;
  isFlipped: boolean;
  onClick: () => void;
};

export function Card({ card, isFlipped, onClick }: CardProps) {
  const handleClick = () => {
    if (!card.isMatched) {
      onClick();
    }
  };

  return (
    <div
      role="button"
      aria-pressed={isFlipped}
      onClick={handleClick}
      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        className={`
          relative w-full h-full transition-all duration-500
          ${card.isMatched ? "scale-105" : ""}
        `}
        style={{
          transformStyle: "preserve-3d",
          transform:
            isFlipped || card.isMatched ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-md flex items-center justify-center text-purple-600 text-5xl font-bold"
          style={{ backfaceVisibility: "hidden" }}
        >
          ?
        </div>

        {/* BACK */}
        <div
          className={`
            absolute w-full h-full rounded-xl overflow-hidden
            transition-all duration-300
            ${
              card.isMatched
                ? "shadow-[0_0_20px_rgba(34,197,94,0.7)]"
                : "shadow-md"
            }
          `}
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={card.image}
            alt="Memory card"
            className={`
              w-full h-full object-cover
              ${card.isMatched ? "ring-4 ring-green-400" : ""}
            `}
          />
        </div>
      </div>
    </div>
  );
}
