import React from "react";
import { Route, Switch } from "react-router-dom";
import ListSongs from "./Listsongs";
import Detailsongs from "./Detailsongs";
import Discover from "./Discover";
import Category from "./Category";
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
        <Route path="/category" exact>
          <Category />
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;
