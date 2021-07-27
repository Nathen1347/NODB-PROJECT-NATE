const express = require("express");
const {
  getShows,
  addReviews,
  editReview,
  deleteReview,
} = require("./Controller");

const app = express();
app.use(express.json());

app.get("/api/shows", getShows);

app.post("/api/shows", addReviews);

app.put("/api/show/:id/:review", editReview);

app.delete("/api/shows/:id", deleteReview);

app.listen(5050, () => console.log("listening on 5050"));
