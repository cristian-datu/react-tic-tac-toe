import React from "react";
import PropTypes from "prop-types";

import "./GameControls.scss";

export interface GameControlProps {
  undoDisabled?: boolean;
  newGameDisabled?: boolean;
  onUndoMove: () => void;
  onNewGame: () => void;
}

function GameControls({
  undoDisabled,
  newGameDisabled,
  onUndoMove,
  onNewGame
}: GameControlProps) {
  const undoMoveHandle = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onUndoMove();
  };

  const newGameHandle = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onNewGame();
  };

  return (
    <div className="game-controls">
      <div>
        <button
          disabled={undoDisabled}
          onClick={undoMoveHandle}
          className="game-controls__btn btn__undo"
        >
          Undo move
        </button>
        <button
          disabled={newGameDisabled}
          onClick={newGameHandle}
          className="game-controls__btn btn__new-game"
        >
          New game
        </button>
      </div>
    </div>
  );
}

GameControls.propTypes = {
  undoDisabled: PropTypes.bool,
  newGameDisabled: PropTypes.bool,
  onUndoMove: PropTypes.func,
  onNewGame: PropTypes.func
};

GameControls.defaultProps = {
  undoDisabled: false,
  newGameDisabled: false,
  onUndoMove: () => {},
  onNewGame: () => {}
};

export default GameControls;
