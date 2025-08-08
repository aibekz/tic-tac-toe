import { useMemo, useState } from "react";
import { Board, GameStatus, MoveHistory } from "./components";
import { Move } from "./types/game";
import { getWinner } from "./utils/gameLogic";

export default function TicTacToe() {
  const [history, setHistory] = useState<Move[]>([
    { squares: Array(9).fill(null), lastMoveIndex: null },
  ]);
  const [step, setStep] = useState(0);

  const current = history[step];
  const xIsNext = step % 2 === 0;
  
  const { winner, line } = useMemo(
    () => getWinner(current.squares),
    [current.squares]
  );
  
  const isDraw = !winner && current.squares.every(Boolean);

  const handleClick = (i: number) => {
    if (winner || current.squares[i]) return;
    
    const nextSquares = current.squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    const newHistory = history.slice(0, step + 1).concat({
      squares: nextSquares,
      lastMoveIndex: i,
    });
    
    setHistory(newHistory);
    setStep(newHistory.length - 1);
  };

  const jumpTo = (moveIndex: number) => {
    setStep(moveIndex);
  };

  const reset = () => {
    setHistory([{ squares: Array(9).fill(null), lastMoveIndex: null }]);
    setStep(0);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-zinc-100">
      <div className="grid gap-6 md:grid-cols-[auto_1fr] w-full max-w-5xl">
        {/* Board */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-3">Tic-Tac-Toe</h1>
          
          <GameStatus winner={winner} isDraw={isDraw} xIsNext={xIsNext} />

          <Board
            squares={current.squares}
            onSquareClick={handleClick}
            winningLine={line}
          />

          <div className="mt-4 flex gap-2">
            <button
              onClick={reset}
              className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-sm"
            >
              Restart
            </button>
          </div>
        </div>

        {/* History */}
        <MoveHistory
          history={history}
          currentStep={step}
          onJumpTo={jumpTo}
        />
      </div>
    </div>
  );
}
