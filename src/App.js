// import "./App.css";
import React from "react";
import TodoFeature from "./feature/Todo/Page";
import { Route, Link } from "react-router-dom";
import AnimeFeature from "./feature/Album/pages";
import {
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
// import ColorBox from "./components/ColorBox";
// import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <p1>Header</p1>
      <br></br>
      <p1>
        <NavLink to="/todos">Here is Todo Feature</NavLink>
      </p1>
      <br></br>
      <p1>
        <NavLink to="/albums">Here is Album List</NavLink>
      </p1>
      <Switch>
        <Redirect from="/homes" to="/" exact />
        <Redirect from="/post-list/:postid" to="/post/:postid" />
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AnimeFeature} />
      </Switch>
      <h1>Footer</h1>
    </div>
  );
}
export default App;
