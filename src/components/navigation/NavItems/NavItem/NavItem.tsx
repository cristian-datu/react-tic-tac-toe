import React from "react";
import { NavLink } from "react-router-dom";

import "./NavItem.scss";

type NavItemProps = {
  exact?: boolean;
  href: string;
  title: string;
  children: React.ReactNode | React.ReactNodeArray;
};

function NavItem({ exact, href, title, children }: NavItemProps) {
  return (
    <li className="nav-item">
      <NavLink exact={exact} to={href} title={title} activeClassName="active">
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
