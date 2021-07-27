import "./List.css";
import "./Header.css";
import React, { Component } from "react";


class Header extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }



  render() {
    return (
      <div className="Search">
        <div className="Web-name">
          <h1>REACT APP</h1>
        </div>
        <div>
          <input
            className="Input"
            onChange={e => this.props.handleInput(e.target.value)}
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
