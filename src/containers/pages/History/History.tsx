import React, { useContext } from "react";
import Layout from "../../Layout/Layout";
import { GameHistoryContext } from "../../TicTacToe";
import { GameHistoryList } from "../../../components/ui";
import { RouteComponentProps } from "react-router-dom";

function History({ match }: RouteComponentProps) {
  const history = useContext(GameHistoryContext);
  document.title = "History";

  const { winsX, winsO, noWins, games } = history;

  let title = "";
  if (winsX === winsO) {
    title = "It's a draw";
  } else if (winsX > winsO) {
    title = "X is the winner";
  } else {
    title = "O is the winner";
  }
  title += ` after ${games.length} games played`;

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>
        Overall score X-O: {winsX} - {winsO}
      </h2>
      {noWins > 0 && (
        <p>
          {noWins} inconclusive match{noWins > 1 && "es"}
        </p>
      )}
      <GameHistoryList games={games} baseUrl={match.path} />
    </Layout>
  );
}

export default History;
