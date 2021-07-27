import React, { Component } from "react";
import axios from "axios";
import "./List.css";
import "./AddReview.css";
class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      editButtonForm: false,
    };
  }

  handleReviewInput = (e) => {
    console.log(e.target.value)
    this.setState({ review: e.target.value })};

  submitReview = () => {
    const body = { review: this.state.review, id: this.props.showID };
    axios
      .post("/api/shows", body)
      .then((res) => this.props.updateReviews(res.data))
      .catch((err) => console.log(err));
  };
  
  editReview = (id) => {
    axios
      .put(`/api/shows/${id}/${this.state.review}`)
      .then(({ data }) => this.setState({ shows: data }))
      .catch((err) => console.log(err));
  };

  deleteReview = (id) => {};

  render() {
    return (
      <div className="Leave-Review">
        <div>
          <button className="Button" onClick={this.submitReview}>
            Submit Review
          </button>
        </div>
        <div>
          <input
            className="Input-Review"
            onChange={this.handleReviewInput}
            type="text"
            placeholder="Leave Review"
          />
        </div>
        <div className="Edit">
          <div>
            {this.state.editButtonForm ? (
              <div>
                <input
                  className="Input-Review"
                  onChange={this.handleReviewInput}
                  type="text"
                  placeholder="Edit Review"
                />

                <div>
                  <button className="Edit-Delete">Update</button>
                  <button className="Edit-Delete">Delete Review</button>
                </div>
              </div>
            ) : (
              <button
                className="Edit-Delete"
                onClick={() => this.setState({ editButtonForm: true })}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AddReview;
