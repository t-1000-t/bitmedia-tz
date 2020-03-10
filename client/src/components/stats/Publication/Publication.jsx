import React, { Component } from "react";
import T from "prop-types";
import styles from "./Publication.module.css";
import fullStatisticsFetch from "../../../services/fullStatisticsFetch";

const {
  wrapperPublish,
  generic,
  wrapperTable,
  linkColor,
  boxLink,
  statistic,
  rowThead
} = styles;

class Publication extends Component {
  state = {
    publications: []
  };

  statsFetch = () => {
    fullStatisticsFetch.statisticFetch().then(data => {
      this.setState({
        publications: data
      });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.publications.length !== prevState.publications.length) {
      this.props.allartic(this.state.publications.length);
    }
  }

  componentDidMount() {
    this.statsFetch();
  }

  render() {
    const { publications } = this.state;
    const { num } = this.props;

    return (
      <div className={wrapperPublish}>
        <div className={boxLink}>
          <a className={linkColor} href="">
            Main page &gt;
          </a>
          <a href=""> User statistics</a>
        </div>
        <caption className={statistic}>User statistics</caption>
        <div className={wrapperTable}>
          <table className={generic}>
            <thead className={rowThead}>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>IP address</th>
                <th>Total click</th>
                <th>Total page views</th>
              </tr>
            </thead>
            <tbody>
              {publications.length > 0 &&
                publications[num].map(elem => (
                  <tr key={elem.id}>
                    <td data-column="id">{elem.id}</td>
                    <td data-column="First Name">{elem.first_name}</td>
                    <td data-column="Last Name">{elem.last_name}</td>
                    <td data-column="Email">{elem.email}</td>
                    <td data-column="Gender">{elem.gender}</td>
                    <td data-column="IP address">{elem.ip_address}</td>
                    <td data-column="Total click">{elem.clicks}</td>
                    <td data-column="Total page views">{elem.page_views}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Publication.propTypes = {
  items: T.shape({
    id: T.string,
    title: T.string,
    text: T.string
  })
};

export default Publication;
