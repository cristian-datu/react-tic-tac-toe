import React from "react";
import Layout from "../../Layout/Layout";
import { TicTacToe } from "../../TicTacToe";

function Home() {
  document.title = "Tic Tac Toe";
  return (
    <Layout>
      <TicTacToe />
    </Layout>
  );
}

export default Home;
