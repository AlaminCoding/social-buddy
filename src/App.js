import React from "react";
import "./App.css";
import Header from "./components/header";
import AllPost from "./components/allpost";
import NoPage from "./components/nopage";
import SinglePost from "./components/singlepost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AllPost />
          </Route>
          <Route path="/post/:id">
            <SinglePost />
          </Route>
          <Route path="*">
            <NoPage />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
