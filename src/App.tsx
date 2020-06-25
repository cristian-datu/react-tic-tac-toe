import React from "react";

import "./assets/scss/app.scss";

import { GameHistoryProvider } from "./containers/TicTacToe";
import Router from "./containers/Router/Router";

function App() {
  return (
    <GameHistoryProvider>
      <Router />
    </GameHistoryProvider>
  );
}

export default App;
