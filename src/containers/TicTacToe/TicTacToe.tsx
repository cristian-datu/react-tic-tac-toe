import React, { useState, useEffect } from "react";
import Board from "./Board/Board";
import "./TicTacToe.scss";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import GameStatus from "./GameStatus/GameStatus";

import {
  Players,
  Winners,
  I_Turn,
  I_CurrentGameWinner,
  I_GameHistory,
  T_MatchHistory,
  SquareStates,
  T_Board
} from "./typedefs";
import GameControls from "./GameControls/GameControls";

const initialTurn: I_Turn = {
  player: Players.X,
  board: Array(9).fill(SquareStates.EMPTY)
};

const initialHistory: T_MatchHistory = [];

const initialWinner: I_CurrentGameWinner = {
  player: Winners.EMPTY,
  squares: ""
};

const initialGameHistory: I_GameHistory = {
  x: 0,
  o: 0,
  noWin: 0,
  games: []
};

/**
 * Check if there is a winner combination on the board
 * @param board Array<string>
 */
const establishWinner = (
  board: T_Board,
  moves: number
): I_CurrentGameWinner => {
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

  for (let i = 0; i < combinations.length; i++) {
    const [k1, k2, k3] = combinations[i];
    const v1 = board[k1];
    const v2 = board[k2];
    const v3 = board[k3];
    if (v1 && v1 === v2 && v1 === v3) {
      return {
        player: v1,
        squares: [k1, k2, k3].join("")
      };
    }
  }
  if (moves >= board.length) {
    return {
      player: Winners.NO_WIN,
      squares: Winners.NO_WIN
    };
  } else {
    return initialWinner;
  }
};

function TicTacToe() {
  const [turn, setTurn] = useState(initialTurn);
  const [history, setHistory] = useState(initialHistory);
  const [winner, setWinner] = useState(initialWinner);
  const [gameHistory, setGameHistory] = useState(initialGameHistory);

  /**
   * Change turns after current move was saved to history
   */
  useEffect(() => {
    if (history.length > 0) {
      const board = history[history.length - 1].board.slice();
      const newWinner = establishWinner(board, history.length);
      setTurn((prevTurn) => ({
        player: prevTurn.player === Players.X ? Players.O : Players.X,
        board: board
      }));
      if (newWinner.player !== Winners.EMPTY) {
        setWinner(newWinner);
      }
    } else {
      setTurn(initialTurn);
    }
  }, [history]);

  useEffect(() => {
    if (winner.player !== Winners.EMPTY) {
      setGameHistory((prevHistory) => {
        const newState = Object.assign({}, prevHistory);
        if (winner.player) {
          switch (winner.player) {
            case Winners.X:
              newState.x++;
              break;
            case Winners.O:
              newState.o++;
              break;
            case Winners.NO_WIN:
              newState.noWin++;
              break;
            default:
              break;
          }
          newState.games.push(history.slice());
        }
        return newState;
      });
    }
  }, [winner, history]);

  const playerMoved = (id: number) => {
    if (
      turn.board[id] === SquareStates.EMPTY &&
      winner.player === Winners.EMPTY
    ) {
      const newTurn = Object.assign({}, turn);
      newTurn.board = turn.board.slice();
      newTurn.board[id] = newTurn.player;
      setHistory((prevHistory) => {
        const newState = prevHistory.slice();
        newState.push(newTurn);
        return newState;
      });
    }
  };

  const undoMove = () => {
    if (history.length > 0) {
      setHistory(history.slice(0, -1));
    }
  };

  const startNewGame = () => {
    setWinner(initialWinner);
    setHistory(initialHistory);
  };

  return (
    <div className="tic-tac-toe-game">
      <ScoreBoard
        x={gameHistory.x}
        o={gameHistory.o}
        noWin={gameHistory.noWin}
      />
      <Board
        winner={winner.squares}
        squares={turn.board}
        onMove={playerMoved}
      />
      <GameStatus player={turn.player} />
      <GameControls
        undoDisabled={winner.player !== Winners.EMPTY || history.length < 1}
        newGameDisabled={history.length === 0}
        onUndoMove={undoMove}
        onNewGame={startNewGame}
      />
    </div>
  );
}

export default TicTacToe;
