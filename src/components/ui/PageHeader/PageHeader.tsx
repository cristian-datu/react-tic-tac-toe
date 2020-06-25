import React from "react";
import NavItems from "../../navigation/NavItems/NavItems";

import "./PageHeader.scss";
import { Link } from "react-router-dom";

function PageHeader() {
  return (
    <header className="page-header">
      <div className="page-header__logo">
        <Link to="/" title="Tic-Tac-Toe">
          Tic Tac Toe
        </Link>
      </div>
      <nav className="page-header__nav">
        <NavItems />
      </nav>
    </header>
  );
}

export default PageHeader;
