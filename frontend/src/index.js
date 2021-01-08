import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LoginPage from "views/Login";
import Dashboard from "views/Dashboard";
// import CreateGroup from "views/CreateGroup";
// import Preferences from "views/Preferences";
// import Explore from "views/Explore";
// import Likes from "views/Likes";
// import Info from "views/Info";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact={true} component={LoginPage}/>
      <Route path="/dashboard" exact={true} component={Dashboard} />
      {/* <Route path="/create-group" exact={true} component={CreateGroup} />
      <Route path="/preferences" exact={true} component={Preferences} />
      <Route path="/explore" exact={true} component={Explore} />
      <Route path="/likes" exact={true} component={Likes} />
      <Route path="/info" exact={true} component={Info} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
