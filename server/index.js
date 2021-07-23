const express = require("express");
const { getShows , addReviews} = require('./Controller')

const app = express();
app.use(express.json());

app.get('/api/shows', getShows)

app.post('/api/shows', addReviews )



app.listen(5050, () => console.log('listening on 5050'));