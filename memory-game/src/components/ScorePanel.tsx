export type ScorePanelProps = {
  moves: number;
  matchedPairs: number;
  totalPairs: number;
  onReset: () => void;
  onRestart: () => void;
  isGameOver: boolean;
};

export function ScorePanel({
  moves,
  matchedPairs,
  totalPairs,
  onReset,
  onRestart,
  isGameOver,
}: ScorePanelProps) {
  return (
    <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-xl">Moviments:</span>
        <span>{moves}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-semibold text-xl">Pairs:</span>
        <span>
          {matchedPairs}/{totalPairs}
        </span>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onReset}
          className="text-xl px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded cursor-pointer"
        >
          Reset
        </button>

        {isGameOver && (
          <button
            onClick={onRestart}
            className="text-xl px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded cursor-pointer"
          >
            Restart
          </button>
        )}
      </div>
    </div>
  );
}
