import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class UserItem extends Component {
  state = {
    user: {},
  };
  componentDidMount() {
    const id_user = this.props.match.params.id;
    axios.get(`https://api.github.com/users/${id_user}`).then((response) => {
      console.log(response);
      this.setState({
        user: response.data,
      });
    });
  }
  getUser() {
    axios.get("https://api.github.com/users").then((res) => {
      this.setState({ users: res.data });
    });
  }
  render() {
    const { avatar_url, login, html_url } = this.state.user;
    return (
      <div className="container ">
        <div className="my-4 ">
          <div className="text-center">
            <img
              style={{ borderRadius: "100%", width: "33%" }}
              src={avatar_url}
              alt="user"
            />
          </div>
          <div className="card-body">
            <h4 className=" text-center">{login}</h4>
            <p className="text-center">
              <Link className="btn btn-success mr-2" to={"/users"}>
                Back
              </Link>
              <a className="btn btn-warning" href={html_url}>
                Repositories
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserItem;
