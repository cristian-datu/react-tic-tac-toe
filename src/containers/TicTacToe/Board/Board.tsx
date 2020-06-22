import React from "react";
import PropTypes from "prop-types";

import Square from "./Square/Square";

export interface BoardProps {
  squares: Array<string>;
  winner: string;
  onMove: (squareId: number) => void;
}

function Board({ squares, winner, onMove }: BoardProps) {
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
      propValue[key] !== null &&
      propValue[key] !== "X" &&
      propValue[key] !== "O"
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
  squares: Array(9).fill(null),
  winner: "",
  onMove: () => {}
};

export default Board;
