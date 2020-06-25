import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Spinner from "../../components/ui/Spinner/Spinner";

const HistoryAsync = React.lazy(() => import("../pages/History/History"));

function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/history" component={HistoryAsync} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Router;
