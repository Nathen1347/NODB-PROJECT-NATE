import List from './List'

const ShowList = (props) => {
    return (
        props.shows.map((show, index) => {
            return(
                <List showList = {show} showIndex = {index}/>
            )
        })
    )
}

export default ShowList;