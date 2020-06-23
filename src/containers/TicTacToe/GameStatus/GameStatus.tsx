import React from "react";
import PropTypes from "prop-types";

import "./GameStatus.scss";
import { Players } from "../typedefs";

export interface GameStatusProps {
  player: Players;
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
  player: PropTypes.oneOf([Players.X, Players.O])
};

GameStatus.defaultProps = {
  player: Players.X
};

export default GameStatus;
