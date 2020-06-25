import React from "react";
import PropTypes from "prop-types";

import "./ScoreBoard.scss";

type T_ScoreBoardProps = {
  x: number;
  o: number;
  noWin: number;
};

function ScoreBoard({ x, o, noWin }: T_ScoreBoardProps) {
  return (
    <div className="score-board">
      <div className="score-board__column score-board__header">
        Overall Score
      </div>
      <div className="score-board__column score-board__column-x">
        X: <strong>{x}</strong>
      </div>
      <div className="score-board__column score-board__column-o">
        O: <strong>{o}</strong>
      </div>
      <div className="score-board__column score-board__column-no-win">
        Draws: <strong>{noWin}</strong>
      </div>
    </div>
  );
}

ScoreBoard.propTypes = {
  x: PropTypes.number,
  o: PropTypes.number,
  noWin: PropTypes.number
};

ScoreBoard.defaultProps = {
  x: 0,
  o: 0,
  noWin: 0
};

export default ScoreBoard;
