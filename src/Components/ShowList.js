import List from "./List";

const ShowList = (props) => {
  return props.filteredShows.map((show, index) => {
    return (
      <List
        showList={show}
        key={index}
        updateReviews={props.updateReviews}
      />
    );
  });
};

export default ShowList;
