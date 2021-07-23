import React, { Component } from "react";
import axios from "axios";
import Header from "./Components/Header";
import ShowList from "./Components/ShowList";
import "./App.css";
import Queue from "./Components/Queue";
import AddReview from "./Components/AddReview";


class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      queue:[]
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

  

  updateReviews = (shows) =>{
    this.setState({shows})
  }
update
  render() {

    
    return (
      <div>
        <Header shows={this.state.shows} />
        {/* <AddReview updateReview={this.updateReviews}/> */}
        <div className='Show-list'>
          <ShowList shows={this.state.shows}
            updateReviews={this.state.updateReviews} />
        </div>
        <Queue queue={this.state.queue}/>
      </div>
    );
  }
}

export default App;
