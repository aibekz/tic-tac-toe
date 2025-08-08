import { Player } from "../types/game";

interface SquareProps {
  value: Player | null;
  onClick: () => void;
  isWinning: boolean;
}

export default function Square({ value, onClick, isWinning }: SquareProps) {
  return (
    <button
      onClick={onClick}
      className={`h-20 w-20 md:h-24 md:w-24 rounded-2xl text-3xl md:text-4xl font-bold flex items-center justify-center border transition ${
        isWinning
          ? "bg-green-100 border-green-400"
          : "bg-white border-zinc-300 hover:bg-zinc-50"
      }`}
      aria-label={`Square ${value || "empty"}`}
    >
      {value}
    </button>
  );
}
