import React from "react";
import { I_MatchData } from "../../../containers/TicTacToe";
import GameHistoryItem from "./GameHistoryItem/GameHistoryItem";

type GameHistoryListProps = {
  games: Array<I_MatchData>;
};

function GameHistoryList({ games }: GameHistoryListProps) {
  return (
    <div>
      {games.map((match, index) => (
        <GameHistoryItem key={index} matchNo={index + 1} match={match} />
      ))}
    </div>
  );
}

export default GameHistoryList;
