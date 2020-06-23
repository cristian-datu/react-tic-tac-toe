import React from "react";
import PropTypes from "prop-types";

import "./GameStatus.scss";

export interface GameStatusProps {
  player: string;
}

function GameStatus({ player }: GameStatusProps) {
  return (
    <div className="game-status">
      Current Player:{" "}
      <strong className={"player-" + player.toLocaleLowerCase()}>
        {player}
      </strong>
    </div>
  );
}

GameStatus.propTypes = {
  player: PropTypes.oneOf(["X", "O"])
};

GameStatus.defaultProps = {
  player: "X"
};

export default GameStatus;
