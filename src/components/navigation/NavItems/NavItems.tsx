import React from "react";
import NavItem from "./NavItem/NavItem";

import "./NavItems.scss";

function NavItems() {
  return (
    <ul className="nav-items">
      <NavItem exact href="/" title="Game">
        Game
      </NavItem>
      <NavItem exact href="/history" title="History">
        History
      </NavItem>
    </ul>
  );
}

export default NavItems;
