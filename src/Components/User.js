import React, { Component } from "react";
import { Link } from "react-router-dom";
class User extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;
    return (
      <div className="card mt-4">
        <img className="card-img-top " src={avatar_url} alt="user" />
        <div className="card-body">
          <h4 className="card-title text-center">{login}</h4>
          <p className="card-text text-center">
            <Link className="btn btn-success mr-2" to={"/users/" + login}>
              Show more
            </Link>
            <a className="btn btn-warning" href={html_url}>
              Repositories
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default User;
