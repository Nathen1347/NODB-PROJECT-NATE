import React, { Component } from "react";
import axios from "axios";
import Header from "./Components/Header";
import ShowList from "./Components/ShowList";
import "./App.css";
import Queue from "./Components/Queue";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      queue: [],
      searchShow: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/shows")
      .then(({ data }) => this.setState({ shows: data }))
      .catch((err) => console.log(err));
  }

  updateReviews = (shows) => {
    this.setState({ shows });
  };

  addToQueue = (add) => {
    this.setState({ shows: [...this.state.shows, add] });
  };

  handleInput = (search) => {
    console.log(search);
    this.setState({ searchShow: search });
  };

  render() {
    let filteredShows = this.state.shows.filter((show, index) => {
      return show.title.toString().toLowerCase().includes(this.state.searchShow.toString().toLowerCase());
    })
    return (
      <div>
        <Header shows={this.state.shows} handleInput={this.handleInput} />
        <div className="Show-list">
          <ShowList
            shows={this.state.shows}
            updateReviews={this.updateReviews}
            filteredShows={filteredShows}
          />
        </div>
        <Queue queue={this.state.queue} addToQueue={this.addToQueue} />
      </div>
    );
  }
}

export default App;
