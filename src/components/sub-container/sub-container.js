import React, {useState} from 'react';
import { v4 as uid } from 'uuid'
import './sub-container.css'

import Search from '../search/search'
import Options from '../options/options'
import Items from '../items/items'
import Footer from '../footer/footer'

const initialTasks = [
    {
        id:1,
        active: true,
        body: "Bring food for dinner."
    },
    {
        id:2,
        active: false,
        body: "Go to office."
    },
    {
        id:3,
        active: true,
        body: "Go to sleep."
    },
]

const SubContainer = () => {
    const [tasks, setTasks] = useState(initialTasks)
    const [searchValue, setSearchValue] = useState('')
    const [edit, setEdit] = useState({isEdit: false, id: 0})
    const [count, setCount] = useState(3)
    const [filterTask, setFilterTask] = useState('all')

    const addTask = (taskBody) => {
        if(edit.isEdit){
            if(taskBody){
                const newTasks = [...tasks]
                const index = newTasks.findIndex(task => task.id === edit.id)
                newTasks[index].body = taskBody
                setTasks(newTasks)
            }
            setSearchValue('')
            setEdit({isEdit: false, id: 0})
        }else{

            if(taskBody){
                setTasks([...tasks,{id: uid(), active: true, body: taskBody}])
                setCount((oldCount) => oldCount + 1)
    
            }
        }

    }

    const toggleActive = (id) => {
        const newtasks = [...tasks]
        const index = newtasks.findIndex(task => task.id === id)
        newtasks[index].active = !newtasks[index].active
        setTasks(newtasks)
    }

    const editTask = (id) => { 
        setSearchValue(tasks.find(task => task.id === id).body)
        setEdit({isEdit: true, id})
    }

    const deleteTasks = (type, id=0) => {
        if(type === 'one'){
            setTasks(tasks.filter(task => task.id !== id))
            setCount(count - 1)
        }

        if(type === 'completed'){
            const newTasks = tasks.filter(task => task.active)
            setTasks(newTasks)
            setCount(newTasks.length)
        }

        if(type === 'all'){
            setTasks([])
            setCount(0)
        }
    }

    return(
        <div className="SubContainer">
            <Search addTask={addTask} Value={searchValue} />
            <Options count={count} deleteTasks={deleteTasks} setFilter={(filterValue)=> setFilterTask(filterValue)} />
            <Items taskList={tasks} setActive={toggleActive} editTask={editTask} deleteTasks={deleteTasks} filterTask={filterTask} />
            <Footer />
        </div>
    )
}

export default SubContainer