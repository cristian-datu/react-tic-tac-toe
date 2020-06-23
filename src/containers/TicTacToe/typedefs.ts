export enum Players {
  X = "X",
  O = "O"
}

export enum Winners {
  EMPTY = "",
  X = "X",
  O = "O",
  NO_WIN = "no-win"
}

export enum SquareStates {
  EMPTY = "",
  X = "X",
  O = "O"
}

export type T_Winners = Players | SquareStates.X | SquareStates.O | Winners;
export type T_Board = Array<Players | SquareStates>;

export interface Turn {
  player: Players;
  board: T_Board;
}

export type T_MatchHistory = Array<Turn>;

export interface GameHistory {
  x: number;
  o: number;
  noWin: number;
  games: Array<T_MatchHistory>;
}

export interface CurrentGameWinner {
  player: T_Winners;
  squares: string;
}
