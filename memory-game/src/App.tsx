import GameBoard from "./components/GameBoard";
import { Logo } from "./components/Logo";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center  bg-linear-to-br from-purple-300 via-blue-200 to-purple-500 pb-2">
      <Logo />
      <GameBoard />
    </div>
  );
}

export default App;
