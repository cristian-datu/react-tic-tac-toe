import React from "react";
import { I_MatchData, Winners } from "../../../../containers/TicTacToe";

import "./GameHistoryItem.scss";

type GameHistoryItemProps = {
  matchNo: number;
  match: I_MatchData;
};

function GameHistoryItem({ matchNo, match }: GameHistoryItemProps) {
  const { winner, history } = match;
  const winnerText = winner === Winners.NO_WIN ? "Draw" : winner;
  return (
    <article className="game-history-item">
      <header className="game-history-item__header">
        <h1 className="game-history-item__title">Round {matchNo}</h1>
      </header>
      <main className="game-history-item__main">
        <dl className="game-history-item__stats">
          <dt className="game-history-item__stats-label">Winner</dt>
          <dd className="game-history-item__stats-value">{winnerText}</dd>
          <dt className="game-history-item__stats-label">Moves</dt>
          <dd className="game-history-item__stats-value">{history.length}</dd>
        </dl>
      </main>
      <footer className="game-history-item__footer">
        <button>Details</button>
      </footer>
      {/* <Board
        winner={match.squares}
        squares={match.history[match.history.length - 1].board}
        onMove={() => {}}
      /> */}
    </article>
  );
}

export default GameHistoryItem;
