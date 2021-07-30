const data = require("./showData");
let shows = [...data.shows];

function addReviews(req, res) {
  console.log(req.body);
  const { review, id } = req.body;
 

 for(let i = 0; i < shows.length; i++){
    if(shows[i].id === id){
        shows[i].review = review;
    }
 }

  res.status(200).send(shows);
}

function getShows(req, res) {
  res.status(200).send(shows);
}

function editReview() {}

function deleteReview(req, res) {

res.status(200).send(shows)
}
module.exports = {
  addReviews,
  getShows,
  editReview,
  deleteReview,
};
