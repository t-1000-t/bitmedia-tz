import React, { Component } from "react";
import T from "prop-types";
import styles from "./Publication.module.css";
import statsUsersFetch from "../../../services/statsUsersFetch";

const { wrapperPublish, generic, statistic, wrapperTable } = styles;

class Publication extends Component {
  state = {
    publications: []
  };

  statsFetch = () => {
    statsUsersFetch.usersFetch().then(data => {
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
        <caption className={statistic}>User statistic</caption>
        <div className={wrapperTable}>
          <table className={generic}>
            <thead>
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
                    <td data-column="Total click">{elem.ip_address}</td>
                    <td data-column="Total page views">{elem.ip_address}</td>
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
