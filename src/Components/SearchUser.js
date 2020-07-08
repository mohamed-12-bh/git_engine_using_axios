import React, { Component } from "react";

class SearchUser extends Component {
  state = {
    searchInput: "",
  };
  searchUser = (e) => {
    e.preventDefault();
    this.props.getSearchUser(this.state.searchInput);
  };
  render() {
    return (
      <form className="form-group " onSubmit={this.searchUser}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search User ..."
          value={this.state.searchInput}
          onChange={(e) =>
            this.setState({
              searchInput: e.target.value,
            })
          }
        />
        <button className="btn btn-danger btn-lg btn-block">Search </button>
      </form>
    );
  }
}

export default SearchUser;
