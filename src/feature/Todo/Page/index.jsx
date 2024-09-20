import React from "react";
import {
  Router,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import DetailPage from "./DetailPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Router path={match.path} component={DetailPage} />
      {/* <Router path={``} component={ListPage} /> */}
    </Switch>
  );
}

export default TodoFeature;
