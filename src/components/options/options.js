import React from 'react'
import './options.css'

const Options = (props) => {
    return(
        <div className="Options">
            <h4>Count: {props.count}</h4>
                <div>
                    <label htmlFor="show">Show: </label>
                    <select id="show" onChange={e => props.setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="active">Active</option>
                    </select>
                </div>
                <button onClick={() => props.deleteTasks('completed')}>Delete Completed</button>
                <button onClick={() => props.deleteTasks('all')}>Delete All</button>
        </div>
    )
}

export default Options