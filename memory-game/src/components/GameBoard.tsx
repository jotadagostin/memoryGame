import { useEffect } from "react";
import { useMemoryGame } from "../hooks/useMemoryGame";
import { generateShuffledCards } from "../utils/shuffle";
import { Card } from "./Card";
import { ScorePanel } from "./ScorePanel";
import flower1 from "../assets/images/flower1.jpg";
import flower2 from "../assets/images/flower2.jpg";
import flower3 from "../assets/images/flower3.jpg";
import flower4 from "../assets/images/flower4.jpg";
import flower5 from "../assets/images/flower5.jpg";
import flower6 from "../assets/images/flower6.jpg";

export default function GameBoard() {
  const images = [flower1, flower2, flower3, flower4, flower5, flower6];

  const shuffledCards = generateShuffledCards(images);

  const { cards, flippedIndexes, moves, matchedPairs, elapsedTime, dispatch } =
    useMemoryGame(shuffledCards);

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      dispatch({ type: "CHECK_MATCH" });

      setTimeout(() => {
        dispatch({ type: "RESET_TURN" });
      }, 1000);
    }
  }, [flippedIndexes, dispatch]);

  useEffect(() => {
    const totalPairs = images.length;
    const isGameOver = matchedPairs === totalPairs;

    if (isGameOver) return;

    const timer = setInterval(() => {
      dispatch({ type: "INCREMENT_TIME" });
    }, 1000);

    return () => clearInterval(timer);
  }, [matchedPairs, dispatch, images.length]);

  const totalPairs = images.length;

  const handleReset = () => {
    // generate a fresh deck and reset state
    const newDeck = generateShuffledCards(images);
    dispatch({ type: "RESET_GAME", payload: newDeck });
  };

  const isGameOver = matchedPairs === totalPairs;

  return (
    <div className="flex flex-col items-center  w-full max-w-md sm:max-w-2xl ">
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            isFlipped={flippedIndexes.includes(index)}
            onClick={() => dispatch({ type: "FLIP_CARD", payload: index })}
          />
        ))}
      </div>

      <ScorePanel
        moves={moves}
        matchedPairs={matchedPairs}
        totalPairs={totalPairs}
        elapsedTime={elapsedTime}
        onReset={handleReset}
        onRestart={handleReset}
        isGameOver={isGameOver}
      />
    </div>
  );
}
