import "./List.css";
import "./Header.css";
import React, { Component } from "react";
import ShowList from "./ShowList"; 

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchShow: "",
    };
  }
  
  handleInput = (value) => {
    this.setState({ searchShow: value });
  };

  render() {
    return (
      <div className="Search">
        <div className="Web-name">
          <h1>REACT APP</h1>
        </div>
        <div>
          <input
            className="Input"
            onChange={e => this.handleInput(e.target.value)}
            type="text"
            placeholder="Search Title"
          />
        </div>
        <div className="Sign-in">
          <button className="Button">Sign-In</button>
        </div>
      </div>
    );
  }
}
export default Header;
