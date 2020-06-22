import React from "react";
import PropTypes from "prop-types";

export interface SquareProps {
  id: string;
  value: string | null;
  onClick: (e: React.SyntheticEvent<Element, Event>) => void;
}

function Square({ id, value, onClick }: SquareProps) {
  let displayValue = value;

  const classes = ["board-square", "board-square-" + id.toLocaleLowerCase()];

  const clickHandler = (e: React.SyntheticEvent) => {
    if (!value) {
      onClick(e);
    }
  };

  if (value !== "X" && value !== "O") {
    displayValue = " ";
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
  value: PropTypes.oneOf([null, "X", "O"]),
  onClick: PropTypes.func.isRequired
};

Square.defaultProps = {
  id: ""
};

export default Square;
