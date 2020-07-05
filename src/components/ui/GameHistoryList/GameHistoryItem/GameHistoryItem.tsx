import React from "react";
import { I_MatchData, Winners } from "../../../../containers/TicTacToe";

import "./GameHistoryItem.scss";
import { Link } from "react-router-dom";

type GameHistoryItemProps = {
  id: number;
  matchNo: number;
  game: I_MatchData;
  url: string;
};

function GameHistoryItem({ id, matchNo, game, url }: GameHistoryItemProps) {
  const { winner, history } = game;
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
        <Link to={url} title="Details">
          Details
        </Link>
      </footer>
    </article>
  );
}

export default GameHistoryItem;
