import React, { useState } from "react";
import { I_MatchData, I_Game, Winners } from "../typedefs";

type GameHistoryValue = {
  winsX: number;
  winsO: number;
  noWins: number;
  games: Array<I_MatchData>;
  save(match: I_MatchData): void;
};

export const GameHistoryContext = React.createContext<GameHistoryValue>({
  winsX: 0,
  winsO: 0,
  noWins: 0,
  games: [],
  save: (match: I_MatchData) => {}
});

GameHistoryContext.displayName = "GameHistory";

type T_GameHistoryProviderProps = {
  children: React.ReactNode | React.ReactNodeArray;
};

function GameHistoryProvider({ children }: T_GameHistoryProviderProps) {
  const [state, setState] = useState<I_Game>({
    winsX: 0,
    winsO: 0,
    noWins: 0,
    games: []
  });

  const save = (match: I_MatchData) => {
    if (match.winner !== Winners.EMPTY) {
      setState((prevState) => {
        const newState = Object.assign({}, prevState, {
          games: prevState.games.slice()
        });

        switch (match.winner) {
          case Winners.X:
            newState.winsX++;
            break;
          case Winners.O:
            newState.winsO++;
            break;
          case Winners.NO_WIN:
            newState.noWins++;
            break;
          default:
            break;
        }

        newState.games.push(
          Object.assign({}, match, {
            history: match.history.slice()
          })
        );

        return newState;
      });
    }
  };

  return (
    <GameHistoryContext.Provider
      value={{
        winsX: state.winsX,
        winsO: state.winsO,
        noWins: state.noWins,
        games: state.games,
        save: save
      }}
    >
      {children}
    </GameHistoryContext.Provider>
  );
}

export default GameHistoryProvider;
