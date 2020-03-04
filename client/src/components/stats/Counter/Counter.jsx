import React, { Component } from "react";
import styles from "./Counter.module.css";

const {
  // counter,
  listNum,
  slider_btn_left,
  slider_btn_right,
  arrow_right,
  arrow_left,
  boxCounter,
  arrow_left_disable,
  arrow_right_disable
} = styles;

class Counter extends Component {
  render() {
    const { numPage, articles, onCounter, currentPage } = this.props;
    console.log(numPage);
    console.log(articles);

    let pages = [];
    if (articles) {
      for (let i = 0; i < articles; i++) {
        pages.push(i);
      }
    }

    return (
      <>
        <div className={boxCounter}>
          <button
            type="button"
            name="left"
            onClick={onCounter}
            className={slider_btn_left}
            disabled={currentPage === 1}
          >
            <span
              className={currentPage === 1 ? arrow_left_disable : arrow_left}
            ></span>
          </button>
          <div className={listNum}>
            <nav aria-label="...">
              <ul class="pagination pagination-lg">
                <li
                  class={
                    currentPage !== pages[numPage + 1]
                      ? "page-item disabled"
                      : "page-item active"
                  }
                >
                  <span class="page-link">
                    {currentPage === articles ? articles : pages[numPage + 1]}
                  </span>
                </li>
                <li
                  class={
                    currentPage !== pages[numPage + 2]
                      ? "page-item disabled"
                      : "page-item active"
                  }
                >
                  <span class="page-link">{pages[numPage + 2]}</span>
                </li>
                <li
                  class={
                    currentPage !== pages[numPage + 3]
                      ? "page-item disabled"
                      : "page-item active"
                  }
                >
                  <span class="page-link">{pages[numPage + 3]}</span>
                </li>
                <li
                  class={
                    currentPage !== pages[numPage + 4]
                      ? "page-item disabled"
                      : "page-item active"
                  }
                >
                  <span class="page-link">{pages[numPage + 4]}</span>
                </li>
                <li
                  class={
                    currentPage !== pages[numPage + 5]
                      ? "page-item disabled"
                      : "page-item active"
                  }
                >
                  <span class="page-link">{pages[numPage + 5]}</span>
                </li>
              </ul>
            </nav>
          </div>
          {/* <div>
            <p className={counter}>
              {numPage + 1}/{articles}
            </p>
          </div> */}
          <button
            type="button"
            name="right"
            onClick={onCounter}
            className={slider_btn_right}
            disabled={currentPage === articles}
          >
            <span
              className={
                currentPage === articles ? arrow_right_disable : arrow_right
              }
            ></span>
          </button>
        </div>
        {/* <div>
          <nav aria-label="...">
            <ul class="pagination pagination-lg">
              <li
                class={
                  currentPage !== pages[numPage + 1]
                    ? "page-item disabled"
                    : "page-item active"
                }
              >
                <span class="page-link">
                  {currentPage === articles ? articles : pages[numPage + 1]}
                </span>
              </li>
              <li
                class={
                  currentPage !== pages[numPage + 2]
                    ? "page-item disabled"
                    : "page-item active"
                }
              >
                <span class="page-link">{pages[numPage + 2]}</span>
              </li>
              <li
                class={
                  currentPage !== pages[numPage + 3]
                    ? "page-item disabled"
                    : "page-item active"
                }
              >
                <span class="page-link">{pages[numPage + 3]}</span>
              </li>
              <li
                class={
                  currentPage !== pages[numPage + 4]
                    ? "page-item disabled"
                    : "page-item active"
                }
              >
                <span class="page-link">{pages[numPage + 4]}</span>
              </li>
              <li
                class={
                  currentPage !== pages[numPage + 5]
                    ? "page-item disabled"
                    : "page-item active"
                }
              >
                <span class="page-link">{pages[numPage + 5]}</span>
              </li>
            </ul>
          </nav>
        </div> */}
      </>
    );
  }
}

export default Counter;
