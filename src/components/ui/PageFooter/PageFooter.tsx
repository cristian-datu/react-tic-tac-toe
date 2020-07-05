import React, { useContext } from "react";

import "./PageFooter.scss";
import { GameHistoryContext } from "../../../containers/TicTacToe";

function PageFooter() {
  const history = useContext(GameHistoryContext);
  return (
    <footer className="page-footer">
      {history.games.length} games played.
      {history.games.length > 0 && (
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            history.clearHistory();
          }}
        >
          Clear history
        </button>
      )}
    </footer>
  );
}

export default PageFooter;
