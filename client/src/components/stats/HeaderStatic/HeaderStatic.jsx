import React from "react";
import styled from "./HeaderStatic.module.css";

const { wrpHeader, appco, appCoFont } = styled;

function HeaderStatic() {
  return (
    <div className={wrpHeader}>
      <div className={appco}>
        <p className={appCoFont}>AppCo</p>
      </div>
    </div>
  );
}

export default HeaderStatic;
