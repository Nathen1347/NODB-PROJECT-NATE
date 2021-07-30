import React, { Component } from "react";
import "./List.css";
class AddToQueue extends Component {
  constructor() {
    super();
    this.state = {
      queue: [],
    };
  }



  render() {
    return (
      <div>
        <button className="Button" onClick={this.props.addToQueue}>
          +
        </button>
      </div>
    );
  }
}

export default AddToQueue;
