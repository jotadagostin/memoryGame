import { useReducer } from "react";

// define the type of the card:
export type CardType = {
  id: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
};

//define the state of the game:
type GameState = {
  cards: CardType[];
  flippedIndexes: number[];
  moves: number;
  isChecking: boolean;
  matchedPairs: number;
};

//define the actions:
type Action =
  | { type: "FLIP_CARD"; payload: number }
  | { type: "CHECK_MATCH" }
  | { type: "RESET_TURN" }
  | { type: "RESET_GAME"; payload: CardType[] };

//Initial state:
const initialState: GameState = {
  cards: [],
  flippedIndexes: [],
  moves: 0,
  isChecking: false,
  matchedPairs: 0,
};

//Reducer skeleton base:
function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "FLIP_CARD": {
      if (state.isChecking) return state;

      if (state.flippedIndexes.length === 2) return state;

      const card = state.cards[action.payload];

      if (!card) return state;

      if (card.isFlipped || card.isMatched) return state;

      return {
        ...state,
        flippedIndexes: [...state.flippedIndexes, action.payload],
      };
    }

    case "CHECK_MATCH": {
      if (state.flippedIndexes.length < 2) return state;

      return {
        ...state,
        moves: state.moves + 1,
        isChecking: true,
      };
    }

    case "RESET_TURN": {
      return {
        ...state,
        flippedIndexes: [],
        isChecking: false,
      };
    }

    case "RESET_GAME": {
      return {
        cards: action.payload,
        flippedIndexes: [],
        moves: 0,
        isChecking: false,
        matchedPairs: 0,
      };
    }

    default:
      return state;
  }
}

// Hook:
export function useMemoryGame(initialCards: CardType[]) {
  const [state, dispatch] = useReducer(gameReducer, {
    ...initialState,
    cards: initialCards,
  });

  return {
    ...state,
    dispatch,
  };
}
