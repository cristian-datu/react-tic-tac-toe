import React from "react";
import { I_MatchData, Board } from "../../../containers/TicTacToe";
import GameHistoryItem from "./GameHistoryItem/GameHistoryItem";
import { Route, Link } from "react-router-dom";

type GameHistoryListProps = {
  games: Array<I_MatchData>;
  baseUrl: string;
};

function GameHistoryList({ games, baseUrl }: GameHistoryListProps) {
  return (
    <div>
      <Route
        exact
        path={baseUrl}
        render={() => {
          return games.map((match, index) => (
            <GameHistoryItem
              key={index}
              matchNo={index + 1}
              game={match}
              id={index}
              url={baseUrl + "/" + index}
            />
          ));
        }}
      />

      <Route
        path={baseUrl + "/:id"}
        render={({ match }: any) => {
          const index = match.params.id;
          const game = games[index];
          if (!game) {
            return null;
          }

          return (
            <div>
              <p className="text-right">
                <Link to={baseUrl} title="Go back" className="btn">
                  Back
                </Link>
              </p>

              {game.history.map((match, index) => (
                <div>
                  <p className="text-center">
                    <strong>Move: {index + 1}</strong>
                  </p>
                  <Board
                    key={index}
                    winner=""
                    squares={match.board}
                    onMove={() => {}}
                  />
                </div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
}

export default GameHistoryList;
