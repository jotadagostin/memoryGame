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
      className="w-24 h-24 cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform:
            isFlipped || card.isMatched ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-md flex items-center justify-center text-2xl font-bold"
          style={{ backfaceVisibility: "hidden" }}
        >
          ?
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={card.image}
            alt="Memory card"
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
