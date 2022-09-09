import React from "react";
import { Route, Switch } from "react-router-dom";
import ListSongs from "./Listsongs";
import Detailsongs from "./Detailsongs";
import Discover from "./Discover";
const Routes = ({}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Detailsongs />
        </Route>
        <Route path="/nhacmoi" exact>
          <ListSongs />
        </Route>
        <Route path="/khampha" exact>
          <Discover />
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;
