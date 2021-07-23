import React, { Component } from 'react';
import './Queue.css';

const Queue = (props) => {
        return (  
            <div className='Queue'>
                <div className='Watchlist-con'>
                    <div>
                        <h2 className='Font-link'>WatchList</h2>
                    </div>
                    <div>
                        <button className='Button1'>Play</button>
                    </div>
                </div>
                <div className='Queue-con'>
                    <p>titles</p>
                    {props.queue}
                </div>
            </div>
        );
    }
 
export default Queue;