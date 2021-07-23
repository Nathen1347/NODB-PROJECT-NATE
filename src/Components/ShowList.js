import List from './List'

const ShowList = (props) => {
    return (
        props.shows.map((show, index) => {
            return(
                <List showList = {show} showIndex = {index} updateReviews={props.updateReviews}/>
            )
        })
    )
}

export default ShowList;