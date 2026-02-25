import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-8 text-blue-600">Memory Game</h1>

      <GameBoard />
    </div>
  );
}

export default App;
