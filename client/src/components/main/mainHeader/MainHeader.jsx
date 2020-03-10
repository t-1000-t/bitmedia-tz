import React from "react";
import styled from "./mainHeader.module.css";

const {
  container,
  wrapper,
  logo,
  stormingFont,
  wrappStorm,
  ourFont,
  wrappOur,
  desiredFont,
  wrappBtnStat,
  btnStat,
  wrappSmall,
  wrappProj,
  projFont
} = styled;

const mainHeader = () => {
  return (
    <div className={container}>
      <svg
        viewBox="0 0 1440 655"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H1440V104.272L1378.2 217.493C1308.11 345.888 1173.41 425.778 1027.02 425.778H894.837C810.446 425.778 728.218 452.441 659.915 501.953L553.869 578.824C404.575 687.046 200.558 679.249 59.9767 559.948L0 509.05V0Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="31"
            y1="68.7909"
            x2="1412.52"
            y2="119.271"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#255D8B" />
            <stop offset="1" stop-color="#3A80BA" />
          </linearGradient>
        </defs>
      </svg>

      <div className={wrapper}>
        <div className={logo}>AppCo</div>
        <div className={wrappStorm}>
          <span className={stormingFont}>Brainstorming </span>
          <span className={desiredFont}>for desired perfect Usability</span>
        </div>
        <div className={wrappOur}>
          <span className={ourFont}>
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </span>
        </div>
        <div className={wrappBtnStat}>
          <button className={btnStat}>View Stats</button>
        </div>
        <div className={wrappSmall}>
          <span>
            Why
            <b> small business owners love </b>
            AppCo?
          </span>
        </div>
        <div className={wrappProj}>
          <span className={projFont}>
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </span>
        </div>
      </div>
    </div>
  );
};

export default mainHeader;
