import React from "react";
import { BrowserRouter } from "react-router-dom";
// import route from "../../route/route";
import Reader from "../../components/stats/Reader/Reader";
import styles from "./App.css";
// import "./App.scss";

const { wrapper } = styles;

const App = () => (
  <div className={wrapper}>
    <BrowserRouter>
      <Reader></Reader>
    </BrowserRouter>
  </div>
);

export default App;
