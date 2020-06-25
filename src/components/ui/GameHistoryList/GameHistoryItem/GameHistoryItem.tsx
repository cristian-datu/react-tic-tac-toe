import React from "react";
import { I_MatchData, Winners } from "../../../../containers/TicTacToe";

type GameHistoryItemProps = {
  matchNo: number;
  match: I_MatchData;
};

function GameHistoryItem({ matchNo, match }: GameHistoryItemProps) {
  const { winner, history } = match;
  const winnerText = winner === Winners.NO_WIN ? "No winner" : winner + " wins";
  return (
    <div>
      <p>
        Round {matchNo} - <strong>{winnerText}</strong> after {history.length}{" "}
        moves
      </p>
      {/* <Board
        winner={match.squares}
        squares={match.history[match.history.length - 1].board}
        onMove={() => {}}
      /> */}
    </div>
  );
}

export default GameHistoryItem;
