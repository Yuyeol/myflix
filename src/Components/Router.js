import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import Header from "Components/Header";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

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
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        {/* 위 route이외에는 어느 페이지든 "/"로 보내준다 */}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
