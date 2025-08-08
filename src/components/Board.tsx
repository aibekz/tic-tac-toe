import Square from "./Square";
import { Player } from "../types/game";

interface BoardProps {
  squares: (Player | null)[];
  onSquareClick: (index: number) => void;
  winningLine: number[] | null;
}

export default function Board({ squares, onSquareClick, winningLine }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          onClick={() => onSquareClick(i)}
          isWinning={winningLine?.includes(i) ?? false}
        />
      ))}
    </div>
  );
}
