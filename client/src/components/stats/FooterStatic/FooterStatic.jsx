import React from "react";
import styled from "./FooterStatic.module.css";

const { wrpFooter, appco, appCoFont, ThemeTagsFont, copyrightsFont } = styled;

function HeaderStatic() {
  return (
    <div className={wrpFooter}>
      <div className={appco}>
        <p className={appCoFont}>AppCo</p>
        <p className={ThemeTagsFont}>All rights reserved by ThemeTags</p>
        <p className={copyrightsFont}>Copyrights &copy; 2019</p>
      </div>
    </div>
  );
}

export default HeaderStatic;
