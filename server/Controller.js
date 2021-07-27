const data = require("./showData");
let shows = [...data.shows];

function addReviews(req, res) {
  console.log(req.body);
  const { review, id } = req.body;
  const newReview = {
    review,
    id,
  };

  shows.push(newReview);
  res.status(200).send(shows);
}

function getShows(req, res) {
  res.status(200).send(shows);
}

function editReview() {}

function deleteReview() {}

module.exports = {
  addReviews,
  getShows,
  editReview,
  deleteReview,
};
