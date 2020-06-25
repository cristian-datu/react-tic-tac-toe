import React from "react";

import "./assets/scss/app.scss";

import { TicTacToe } from "./containers/TicTacToe";
import { GameHistoryProvider } from "./containers/TicTacToe";

function App() {
  return (
    <GameHistoryProvider>
      <TicTacToe />
    </GameHistoryProvider>
  );
}

export default App;
