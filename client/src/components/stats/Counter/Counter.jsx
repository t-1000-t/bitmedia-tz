import React, { Component } from "react";
import styles from "./Counter.module.css";

const {
  counter,
  listNum,
  slider_btn_left,
  slider_btn_left_disable,
  slider_btn_right,
  slider_btn_right_disable,
  arrow_right,
  arrow_left,
  boxCounter,
  arrow_left_disable,
  arrow_right_disable,
  pageItem,
  pageItemDisable,
  disableCursorPointer,
  liNum
} = styles;

class Counter extends Component {
  render() {
    const {
      numPage,
      articles,
      getPageName,
      getCounter,
      currentPage
    } = this.props;

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
            onClick={getPageName}
            className={
              currentPage === 1 ? slider_btn_left_disable : slider_btn_left
            }
            disabled={currentPage === 1}
          >
            <span
              className={currentPage === 1 ? arrow_left_disable : arrow_left}
            ></span>
          </button>
          <div className={listNum}>
            <nav className={counter}>
              <ul className="pagination pagination-lg">
                <li className={pageItem}>
                  <span className={liNum}>
                    {currentPage === articles ? articles : currentPage}
                  </span>
                </li>

                <li
                  type="button"
                  className={
                    numPage + 2 <= articles
                      ? pageItemDisable
                      : disableCursorPointer
                  }
                  onClick={() => getCounter(numPage + 2)}
                >
                  <span className={liNum}>{currentPage + 1}</span>
                </li>

                <li
                  className={
                    numPage + 3 <= articles
                      ? pageItemDisable
                      : disableCursorPointer
                  }
                  type="button"
                  onClick={() => getCounter(numPage + 3)}
                >
                  <span className={liNum}>{currentPage + 2}</span>
                </li>
                <li
                  className={
                    numPage + 4 <= articles
                      ? pageItemDisable
                      : disableCursorPointer
                  }
                  type="button"
                  onClick={() => getCounter(numPage + 4)}
                >
                  <span className={liNum}>{currentPage + 3}</span>
                </li>
                <li
                  className={
                    numPage + 5 <= articles
                      ? pageItemDisable
                      : disableCursorPointer
                  }
                  type="button"
                  onClick={() => getCounter(numPage + 5)}
                >
                  <span className={liNum}>{currentPage + 4}</span>
                </li>
              </ul>
            </nav>
          </div>
          <button
            type="button"
            name="right"
            onClick={getPageName}
            className={
              currentPage === articles
                ? slider_btn_right_disable
                : slider_btn_right
            }
            disabled={currentPage === articles}
          >
            <span
              className={
                currentPage + 4 >= articles ? arrow_right_disable : arrow_right
              }
            ></span>
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
