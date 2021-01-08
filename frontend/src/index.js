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
      <Route path="/" component={LoginPage} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route path="/create-group" component={CreateGroup} />
      <Route path="/preferences" component={Preferences} />
      <Route path="/explore" component={Explore} />
      <Route path="/likes" component={Likes} />
      <Route path="/info" component={Info} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
