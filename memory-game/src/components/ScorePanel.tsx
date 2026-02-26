export type ScorePanelProps = {
  moves: number;
  matchedPairs: number;
  totalPairs: number;
  elapsedTime: number;
  onReset: () => void;
  onRestart: () => void;
  isGameOver: boolean;
};

export function ScorePanel({
  moves,
  matchedPairs,
  totalPairs,
  elapsedTime,
  onReset,
  onRestart,
  isGameOver,
}: ScorePanelProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-2xl">Moviments:</span>
        <span className="font-bold text-2xl">{moves}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-semibold text-2xl">Pairs:</span>
        <span className="font-bold text-2xl">
          {matchedPairs}/{totalPairs}
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-semibold text-2xl">Time:</span>
        <span className="font-bold text-2xl">{formatTime(elapsedTime)}</span>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onReset}
          className="text-2xl px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded cursor-pointer"
        >
          Reset
        </button>

        {isGameOver && (
          <button
            onClick={onRestart}
            className="text-2xl px-4 py-2 bg-purple-800 hover:bg-purple-900 text-white rounded cursor-pointer"
          >
            Restart
          </button>
        )}
      </div>
    </div>
  );
}
