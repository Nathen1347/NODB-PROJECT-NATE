const data = require('./showData');
let shows = [...data.shows]

function addReviews(req, res){
    const {review} = req.body
    shows.push({review})

    res.status(200).send(shows)
}

function getShows(req, res){
    res.status(200).send(shows)
}

module.exports = {
    addReviews,
    getShows
}