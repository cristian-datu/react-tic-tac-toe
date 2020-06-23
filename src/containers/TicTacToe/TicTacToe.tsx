import React, { useState, useEffect } from "react";
import Board from "./Board/Board";
import "./TicTacToe.scss";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import GameStatus from "./GameStatus/GameStatus";

const initialTurn = {
  player: "",
  board: Array(9).fill(null)
};

const initialHistory = [initialTurn];

const initialWinner = {
  player: "",
  squares: ""
};

interface GameHistory {
  x: number;
  o: number;
  noWin: number;
  games: Array<typeof initialHistory>;
}

const initialGameHistory: GameHistory = {
  x: 0,
  o: 0,
  noWin: 0,
  games: []
};

function TicTacToe() {
  const [turn, setTurn] = useState(initialTurn);
  const [history, setHistory] = useState(initialHistory);
  const [winner, setWinner] = useState(initialWinner);
  const [gameHistory, setGameHistory] = useState(initialGameHistory);

  useEffect(() => {
    setGameHistory((prevHistory) => {
      const newState = Object.assign({}, prevHistory);
      if (winner.player) {
        switch (winner.player) {
          case "X":
            newState.x++;
            break;
          case "O":
            newState.o++;
            break;
          case "no-win":
            newState.noWin++;
            break;
          default:
            break;
        }
        newState.games.push(history.slice());
      }
      return newState;
    });
  }, [winner, history]);

  /**
   * Check for winning player on every move
   */
  useEffect(() => {
    if (!establishWinner(turn.board)) {
      // No winner, but all moves exhausted
      if (history.length > 9) {
        setWinner({
          player: "no-win",
          squares: "no-win"
        });
      }
    }
  }, [turn, history]);

  /**
   * Change turns after current move was saved to history
   */
  useEffect(() => {
    if (history.length > 0) {
      setTurn((prevTurn) => ({
        player: prevTurn.player === "X" ? "O" : "X",
        board: history[history.length - 1].board.slice()
      }));
    }
  }, [history]);

  /**
   * Check if there is a winner combination on the board
   * @param board Array<string>
   */
  const establishWinner = (board: Array<string>) => {
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
      const first = board[combinations[i][0]];
      const second = board[combinations[i][1]];
      const third = board[combinations[i][2]];
      if (first && first === second && first === third) {
        setWinner({
          player: first,
          squares:
            "" + combinations[i][0] + combinations[i][1] + combinations[i][2]
        });
        return true;
      }
    }
    return false;
  };

  const playerMoved = (id: number) => {
    if (turn.board[id] === null && !winner.player) {
      const newTurn = Object.assign({}, turn);
      newTurn.board = turn.board.slice();
      //newTurn.player = turn.player === "X" ? "O" : "X";
      newTurn.board[id] = newTurn.player;
      setHistory((prevHistory) => {
        const newState = prevHistory.slice();
        newState.push(newTurn);
        return newState;
      });
    }
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
      <div>
        <button onClick={(e) => {}}>Undo move</button>
        <button onClick={(e) => {}}>New game</button>
      </div>
    </div>
  );
}

export default TicTacToe;
