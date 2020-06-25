import React, { Fragment } from "react";
import { PageHeader, PageFooter, PageMain } from "../../components/ui";

type LayoutProps = {
  children: React.ReactNode | React.ReactNodeArray;
};

function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <PageHeader />
      <PageMain>{children}</PageMain>
      <PageFooter />
    </Fragment>
  );
}

export default Layout;
