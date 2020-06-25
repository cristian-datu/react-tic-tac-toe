import React from "react";

import "./PageMain.scss";

type PageMain = {
  children: React.ReactNode | React.ReactNodeArray;
};

function PageMain({ children }: PageMain) {
  return <main className="page-main">{children}</main>;
}

export default PageMain;
