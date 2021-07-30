import React, { Component } from "react";
import axios from "axios";
import "./List.css";
import "./AddReview.css";
class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      editReview: "",
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
  
  editReview = () => {
    const body = { editReview: this.state.editReview, id: this.props.showID}
    axios
      .put(`/api/shows/`, body)
      .then(({ res}) => this.props.updateReviews( res.data ))
      .catch((err) => console.log(err));
  };

  deleteReview = (id) => {;
  axios.delete(`/api/shows?deleteReview=${id}`)
  .then(({data}) => this.setState({shows: data}))
  .catch((err) => console.log(err))
  }
  
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
               

                <div>
                  <button className="Edit-Delete" onClick={this.submitReview}>Update</button>
                  <button className="Edit-Delete" onCLick={this.deleteReview}>Delete Review</button>
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
