import { Player, Move } from "../types/game";
import { indexToCoord } from "../utils/gameLogic";

interface MoveHistoryProps {
  history: Move[];
  currentStep: number;
  onJumpTo: (moveIndex: number) => void;
}

export default function MoveHistory({ history, currentStep, onJumpTo }: MoveHistoryProps) {
  const getLabel = (moveIndex: number, move: Move): string => {
    if (moveIndex === 0) return "Go to game start";
    
    const { row, col } = indexToCoord(move.lastMoveIndex!);
    const player: Player = moveIndex % 2 === 1 ? "X" : "O";
    return `Go to move #${moveIndex} (Player ${player} → r${row}, c${col})`;
  };

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-4">
      <h2 className="font-semibold mb-2">Move History</h2>
      <ol className="space-y-1 max-h-[60vh] overflow-auto pr-1">
        {history.map((move, moveIndex) => {
          const isCurrent = moveIndex === currentStep;
          return (
            <li key={moveIndex}>
              <button
                onClick={() => onJumpTo(moveIndex)}
                className={`w-full text-left text-sm px-3 py-2 rounded-xl border ${
                  isCurrent
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white hover:bg-zinc-50 border-zinc-200"
                }`}
                aria-current={isCurrent ? "step" : undefined}
              >
                {getLabel(moveIndex, move)}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
