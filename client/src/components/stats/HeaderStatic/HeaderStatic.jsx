import React from "react";
import styled from "./HeaderStatic.module.css";

const { wrpHeader, appco, appCoFont } = styled;

function HeaderStatic() {
  return (
    <div className={wrpHeader}>
      <div className={appco}>
        <snap className={appCoFont}>AppCo</snap>
      </div>
    </div>
  );
}

export default HeaderStatic;
