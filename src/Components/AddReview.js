import React, { Component } from "react";
import axios from "axios";
import './List.css'
class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
        review: '',
    };
  }

handleReviewInput = (e) => this.setState({review: e.target.value})

submitReview = () => {
  const body = {review: this.state.review, id: this.props.showID}
  axios.post('/api/shows', body)
  .then(res => this.props.updateReviews(res.data))
  .catch(err => console.log(err))

}

  render() {
    return (
      <div>
        <div>
          <button className='Button' onClick = {this.submitReview}>Submit Review</button>
        </div>
        <div>
          <input onChange={this.handleReviewInput} type='text' placeholder="Leave Review"/>
        </div>
      </div>
    );
  }
}

export default AddReview;
