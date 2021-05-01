import React from 'react'
import './items.css'

const Items = (props) => {

    const {taskList, setActive, editTask, deleteTasks, filterTask} = props

    const displayItems = () => {
        if(filterTask === 'all'){
            return taskList
        }

        if(filterTask === 'active'){
            return taskList.filter(task => task.active)
        }
        
        if(filterTask === 'completed'){
            return taskList.filter(task => !task.active)
        }
    }

    return(
        displayItems().map(task => {
            let pstyle = task.active? null : {textDecoration: "line-through"};
                return(
                    <div className="Item" key={task.id}>
                        <p style={pstyle} onClick={() => setActive(task.id)}>{task.body}</p>
                        <div>
                            <button className="Purple" onClick={() => editTask(task.id)}><i className="far fa-edit"></i></button>
                            <button className="Red" onClick={() => deleteTasks('one', task.id)}><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                )
        })
    )
}

export default Items



