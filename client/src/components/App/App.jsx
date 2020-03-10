import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "../../routes/routes";
import Statistics from "../../components/stats/Statistics/Statistics";
// import MainHeader from "../main/MainHeader/mainHeader";
import Main from "../main/Main";
import styles from "./App.css";
// import "./App.scss";

const { wrapper } = styles;

const App = () => (
  <div className={wrapper}>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={routes.HOME}
          render={props => <h1>Aboute Page 2020</h1>}
        />
        <Route path={routes.MAIN} component={Main} />
        <Route path={routes.STATISTICS} component={Statistics} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
