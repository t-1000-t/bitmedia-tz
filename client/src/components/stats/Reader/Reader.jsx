import React, { Component } from "react";
import styles from "./Reader.module.css";
import Publication from "../Publication/Publication";
import Counter from "../Counter/Counter";
import HeaderStatic from "../HeaderStatic/HeaderStatic";
import FooterStatic from "../FooterStatic/FooterStatic";

const { reader, footer } = styles;

class Reader extends Component {
  state = {
    currentPage: 1,
    articles: null
  };

  countAllArticles = col => {
    this.setState({
      articles: col
    });
  };

  handleCounter = ({ currentTarget: { name } }) => {
    console.log(name);
    if (name === undefined) {
      return;
    }

    this.setState(prevState => ({
      currentPage:
        name === "left" ? prevState.currentPage - 1 : prevState.currentPage + 1
    }));
  };

  handleCounter(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ currentPage: pageNumber });
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
          onCounter={this.handleCounter}
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

export default Reader;
