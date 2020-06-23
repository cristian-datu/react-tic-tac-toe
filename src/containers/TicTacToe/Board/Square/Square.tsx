import React from "react";
import PropTypes from "prop-types";

import "./Square.scss";
import { SquareStates, T_SquareState } from "../../typedefs";

export interface SquareProps {
  id: string;
  value: T_SquareState;
  onClick: (e: React.SyntheticEvent<Element, Event>) => void;
}

function Square({ id, value, onClick }: SquareProps) {
  let displayValue = value;

  const classes = ["board-square", "board-square-" + id.toLocaleLowerCase()];

  const clickHandler = (e: React.SyntheticEvent) => {
    if (value === SquareStates.EMPTY) {
      onClick(e);
    }
  };

  if (value !== SquareStates.X && value !== SquareStates.O) {
    displayValue = SquareStates.EMPTY;
    classes.push("board-square__empty");
  } else {
    classes.push("board-square__used");
    classes.push("board-square__" + value.toLocaleLowerCase());
  }

  return (
    <div onClick={clickHandler} className={classes.join(" ")}>
      {displayValue}
    </div>
  );
}

Square.propTypes = {
  id: PropTypes.string,
  value: PropTypes.oneOf([SquareStates.EMPTY, SquareStates.X, SquareStates.O]),
  onClick: PropTypes.func.isRequired
};

Square.defaultProps = {
  id: "",
  value: SquareStates.EMPTY
};

export default Square;
