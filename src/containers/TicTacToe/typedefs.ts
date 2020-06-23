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

export interface I_Turn {
  player: Players;
  board: T_Board;
}

export type T_MatchHistory = Array<I_Turn>;

export interface I_GameHistory {
  x: number;
  o: number;
  noWin: number;
  games: Array<T_MatchHistory>;
}

export interface I_CurrentGameWinner {
  player: T_Winners;
  squares: string;
}
