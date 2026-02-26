import LogoMemoryGame from "../assets/images/Logo.png";

export function Logo() {
  return (
    <div className="w-65 sm:w-80 md:w-96">
      <img
        src={LogoMemoryGame}
        alt="purple logo memory game"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
