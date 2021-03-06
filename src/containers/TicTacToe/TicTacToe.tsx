import React, { useState, useContext, useEffect } from "react";

import {
  Players,
  Winners,
  SquareStates,
  I_TurnData,
  I_MatchData
} from "./typedefs";

import { GameHistoryContext } from "./GameHistoryContext/GameHistoryContext";

import Board from "./Board/Board";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import GameStatus from "./GameStatus/GameStatus";
import GameControls from "./GameControls/GameControls";

import "./TicTacToe.scss";

const initialTurn: I_TurnData = {
  player: Players.X,
  board: Array(9).fill(SquareStates.EMPTY)
};

const initialMatch: I_MatchData = {
  winner: Winners.EMPTY,
  squares: "",
  history: []
};

/**
 * Check if there is a winner combination on the board
 * @param match: I_MatchData
 */
const establishWinner = (match: I_MatchData) => {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  if (match.history.length > 0) {
    const board = match.history[match.history.length - 1].board;
    for (let i = 0; i < combinations.length; i++) {
      const [k1, k2, k3] = combinations[i];
      const v1 = board[k1];
      const v2 = board[k2];
      const v3 = board[k3];
      if (v1 && v1 === v2 && v1 === v3) {
        match.winner = v1;
        match.squares = [k1, k2, k3].join("");
        break;
      }
    }
    if (
      match.winner === Winners.EMPTY &&
      match.history.length >= board.length
    ) {
      match.winner = Winners.NO_WIN;
      match.squares = Winners.NO_WIN;
    }
  }
};

function TicTacToe() {
  const gameHistory = useContext(GameHistoryContext);
  const [match, setMatch] = useState(initialMatch);
  const [gameSaved, setGameSaved] = useState(false);

  useEffect(() => {
    if (match.winner !== Winners.EMPTY && !gameSaved) {
      gameHistory.save(match);
      setGameSaved(true);
    }
  }, [match, gameHistory, gameSaved]);

  // Display new move and establish winner
  const playerMoved = (id: number) => {
    const lastTurn =
      match.history.length > 0
        ? match.history[match.history.length - 1]
        : initialTurn;

    if (
      lastTurn.board[id] === SquareStates.EMPTY &&
      match.winner === Winners.EMPTY
    ) {
      setMatch((prevMatch) => {
        const newTurn = Object.assign({}, lastTurn);
        if (lastTurn !== initialTurn) {
          newTurn.player =
            lastTurn.player === Players.X ? Players.O : Players.X;
        }
        newTurn.board = lastTurn.board.slice();
        newTurn.board[id] = newTurn.player;
        let newMatch = Object.assign({}, prevMatch, {
          history: prevMatch.history.slice()
        });
        newMatch.history.push(newTurn);
        establishWinner(newMatch);
        return newMatch;
      });
    }
  };

  // Undo last move
  const undoMove = () => {
    if (match.history.length > 0 && match.winner === Winners.EMPTY) {
      setMatch((prevMatch) =>
        Object.assign({}, match, { history: match.history.slice(0, -1) })
      );
    }
  };

  // Start new game
  const startNewGame = () => {
    setGameSaved(false);
    setMatch(initialMatch);
  };

  // Prepare turn data for rendering
  const turn = Object.assign({}, initialTurn, {
    board: initialTurn.board.slice()
  });
  if (match.history.length > 0) {
    const prevTurn = match.history[match.history.length - 1];
    turn.board = prevTurn.board;
    if (match.winner === Winners.EMPTY) {
      turn.player = prevTurn.player === Players.X ? Players.O : Players.X;
    } else {
      turn.player = prevTurn.player;
    }
  }

  return (
    <div className="tic-tac-toe-game">
      <ScoreBoard
        x={gameHistory.winsX}
        o={gameHistory.winsO}
        noWin={gameHistory.noWins}
      />
      <Board winner={match.squares} squares={turn.board} onMove={playerMoved} />
      <GameStatus player={turn.player} />
      <GameControls
        undoDisabled={
          match.winner !== Winners.EMPTY || match.history.length < 1
        }
        newGameDisabled={match.history.length === 0}
        onUndoMove={undoMove}
        onNewGame={startNewGame}
      />
    </div>
  );
}

export default TicTacToe;
