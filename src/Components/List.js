import Form from "./Form";
import AddToQueue from "./AddToQueue";
import "./List.css";

const List = (props) => {
  return (
    <div className="List">
      <div className="Shows">
        <div className="Title-box">
          <h2 className="Font-link">{props.showList.title}</h2>
        </div>
        <div>
          <img src={props.showList.imgUrl} alt="" className="img" />
        </div>
        <div>
          <div className="Buttons-tab">
            <div>
              <button className="Button">Play</button>
            </div>
            <div>
              <AddToQueue />
            </div>
            <div>
              <Form showID={props.showList.id}
              updateReviews={props.updateReviews}/>
            </div>
          </div>
          <div><p className='Review'>{props.showList.review}</p></div>
        </div>
      </div>
    </div>
  );
};
export default List;
