import React from "react";
import styled from "./FooterStatic.module.css";

const { wrpFooter, appco, appCoFont, ThemeTagsFont, copyrightsFont } = styled;

function HeaderStatic() {
  return (
    <div className={wrpFooter}>
      <div className={appco}>
        <snap className={appCoFont}>AppCo</snap>
        <snap className={ThemeTagsFont}>All rights reserved by ThemeTags</snap>
        <snap className={copyrightsFont}>Copyrights &copy; 2019</snap>
      </div>
    </div>
  );
}

export default HeaderStatic;
