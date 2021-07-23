import React, { Component } from "react";
import AddReview from "./AddReview";
import './List.css'
class Form extends Component {
  constructor() {
    super();
    this.state = {
      reviewAddForm: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.reviewAddForm ? 
          <AddReview />
         : 
          <button className='Button' onClick={() => this.setState({ reviewAddForm: true })}>
            Leave Review
          </button>
        }
      </div>
    );
  }
}

export default Form;
