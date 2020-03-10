import React, { Component } from "react";
import styles from "./Statistics.module.css";
import Publication from "../Publication/Publication";
import Counter from "../Counter/Counter";
import HeaderStatic from "../HeaderStatic/HeaderStatic";
import FooterStatic from "../FooterStatic/FooterStatic";

const { reader, footer } = styles;

const urlParams = new URLSearchParams(window.location.search);

class Statistics extends Component {
  state = {
    currentPage: 1,
    articles: null
  };

  num_page = urlParams.get("num_page");

  componentDidMount() {
    Number(this.num_page) !== 0
      ? this.handleCounter(Number(this.num_page))
      : this.handleCounter(this.state.currentPage);
  }

  countAllArticles = col => {
    this.setState({
      articles: col
    });
  };

  handlePageName = ({ currentTarget: { name } }) => {
    if (name === undefined) {
      return;
    }

    this.setState(prevState => ({
      currentPage:
        name === "left" ? prevState.currentPage - 1 : prevState.currentPage + 1
    }));
  };

  handleCounter(num) {
    if (num === undefined) {
      return;
    }
    console.log(num);
    this.setState({ currentPage: num });
  }

  render() {
    const { currentPage, articles } = this.state;
    return (
      <div className={reader}>
        <HeaderStatic />
        {currentPage && (
          <Publication num={currentPage - 1} allartic={this.countAllArticles} />
        )}
        <Counter
          numPage={currentPage - 1}
          getPageName={this.handlePageName}
          getCounter={this.handleCounter.bind(this)}
          currentPage={currentPage}
          articles={articles}
        />
        <div className={footer}>
          <FooterStatic />
        </div>
      </div>
    );
  }
}

export default Statistics;
