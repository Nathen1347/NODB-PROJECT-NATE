import "./Queue.css";
import AddToQueue from "./AddToQueue";

const Queue = (props) => {
  return (
    <div className="Queue">
      <div className="Watchlist-con">
        <div>
          <h2 className="Font-link">WatchList</h2>
        </div>
        <div>
          <button className="Button1">Play</button>
        </div>
      </div>
      <div className="Queue-con">
        <AddToQueue queue={props.queue} addToQueue={props.addToQueue} />
      </div>
    </div>
  );
};

export default Queue;
