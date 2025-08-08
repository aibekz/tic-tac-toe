export type Player = "X" | "O";

export type Move = {
  squares: (Player | null)[];
  lastMoveIndex: number | null; // 0..8 or null for start
};

export type GameResult = {
  winner: Player | null;
  line: number[] | null;
};
