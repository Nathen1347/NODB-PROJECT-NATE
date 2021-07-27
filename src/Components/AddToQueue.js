import React, { Component } from "react";
import "./List.css";
class AddToQueue extends Component {
  constructor() {
    super();
    this.state = {
      queue: [],
    };
  }

  handleAdd = (props) => {
    this.props.add(this.state.queue);
  };

  render() {
    return (
      <div>
        <button className="Button" onClick={this.handleAdd}>
          +
        </button>
      </div>
    );
  }
}

export default AddToQueue;
