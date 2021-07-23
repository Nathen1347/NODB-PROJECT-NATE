import React, { Component } from 'react';
import ShowList from './ShowList';
import './List.css'
class AddToQueue extends Component {
    constructor(){
        super()
        this.state = { 
            queue: []
        }
    }

    addToQueue = (props) =>{
    }

    render() { 
        return (
            <div>
                <button className='Button' onClick={this.addToQueue}>+</button>
            </div>
          );
    }
}
 
export default AddToQueue;