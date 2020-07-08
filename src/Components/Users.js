import React, { Component } from "react";
import axios from "axios";
import User from "./User";
import SearchUser from "./SearchUser";
class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users").then((res) => {
      this.setState({ users: res.data });
    });
  }

  getSearchUser = (data) => {
    if (data) {
      axios.get(`https://api.github.com/search/users?q=${data}`).then((res) => {
        this.setState({
          users: res.data.items,
        });
        console.log(res);
      });
    }
  };
  render() {
    return (
      <div className="row ">
        <div className="col-12 ">
          <SearchUser getSearchUser={this.getSearchUser} />
        </div>
        <div className="row">
          {this.state.users.map((user) => (
            <div className="col-4 " key={user.id}>
              <User user={user} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
