import React from "react";
import PropTypes from "prop-types";

import { T_Board, SquareStates, Winners } from "../typedefs";
import Square from "./Square/Square";

import "./Board.scss";

type T_BoardProps = {
  squares: T_Board;
  winner: string;
  onMove: (squareId: number) => void;
};

function Board({ squares, winner, onMove }: T_BoardProps) {
  const handleClick = (e: React.SyntheticEvent, id: number) => {
    e.preventDefault();
    onMove(id);
  };

  const classes = ["board"];
  if (winner) {
    if (winner !== "no-win") {
      classes.push("board-has-winner");
    }
    classes.push("board-" + winner);
  }

  return (
    <div className={classes.join(" ")}>
      {squares.map((square, index) => (
        <Square
          key={index}
          id={index.toString()}
          value={square}
          onClick={(e) => handleClick(e, index)}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(function (
    propValue,
    key,
    componentName,
    location,
    propFullName
  ) {
    if (
      propValue[key] !== SquareStates.EMPTY &&
      propValue[key] !== SquareStates.X &&
      propValue[key] !== SquareStates.O
    ) {
      return new Error(
        "Invalid prop `" +
          propFullName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    } else {
      return null;
    }
  }).isRequired,
  winner: PropTypes.oneOf([
    "",
    "no-win",
    "012",
    "345",
    "678",
    "036",
    "147",
    "258",
    "048",
    "246"
  ]),
  onMove: PropTypes.func
};

Board.defaultProps = {
  squares: Array(9).fill(SquareStates.EMPTY),
  winner: Winners.EMPTY,
  onMove: () => {}
};

export default Board;
