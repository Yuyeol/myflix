import React from "react";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";

export default () => (
  // Router는 하나의 child만 갖는다.
  <Router>
    <>
      <Header />
      {/* Switch는 한번에 하나의 Route만 Render하게 해줌. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" component={Search} />
        {/* 위 route이외에는 어느 페이지든 "/"로 보내준다 */}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
