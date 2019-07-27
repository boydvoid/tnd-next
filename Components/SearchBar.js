import React, { Component } from "react";
import Input from "./Input";
import api from "../utils/api";
import PBtn from "./PBtn";
class SearchBar extends Component {
  state = {
    searchBox: ""
  };

  handleChange = e => {
    this.setState({
      searchBox: e.target.value
    });
  };

  render() {
    return (
      <form action="/my-blog">
        <Input
          className="searchBar"
          type="text"
          placeholder="Search"
          name="q"
          onChange={this.handleChange}
        />
        <PBtn className="icon-button" type="submit">
          <i className="fas fa-search"></i>
        </PBtn>
      </form>
    );
  }
}

export default SearchBar;
