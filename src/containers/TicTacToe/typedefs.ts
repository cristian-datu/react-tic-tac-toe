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
export type T_SquareState = Players | SquareStates;
export type T_Board = Array<T_SquareState>;

export interface I_TurnData {
  player: Players;
  board: T_Board;
}

export interface I_MatchData {
  winner: T_Winners;
  squares: string;
  history: Array<I_TurnData>;
}

export interface I_Game {
  winsX: number;
  winsO: number;
  noWins: number;
  games: Array<I_MatchData>;
}
