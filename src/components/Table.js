import React, { Component } from "react";
import axios from "axios";

import "./styles.css";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        this.setState({ users: response.data.users }); // Extract the 'users' array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Dummy Data</h1>
        <div>
          <table className="div1">
            <tr>
              <th>Sno</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>E-mail</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>

            {users.map((user) => (
              <tr key={users.id}>
                <td>{user.id}</td>
                <td>
                  <img src={user.image} alt="here" height={100} />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
