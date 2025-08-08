import { Player } from "../types/game";

interface GameStatusProps {
  winner: Player | null;
  isDraw: boolean;
  xIsNext: boolean;
}

export default function GameStatus({ winner, isDraw, xIsNext }: GameStatusProps) {
  const getStatusText = () => {
    if (winner) return <>Winner: <span className="font-semibold">{winner}</span></>;
    if (isDraw) return <>Draw! No more moves.</>;
    return <>Next player: {xIsNext ? "X" : "O"}</>;
  };

  return (
    <p className="mb-4 text-sm text-zinc-600">
      {getStatusText()}
    </p>
  );
}
