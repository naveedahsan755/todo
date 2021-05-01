import React, {useState, useEffect} from 'react'
import './search.css'

const Search = (props) => {
    const [inputValue, setInputValue] = useState(props.Value)

    const onSubmit = (e) => {
        e.preventDefault()
        props.addTask(inputValue)
        setInputValue('')
    }

    useEffect(() => {
        setInputValue(props.Value)
    }, [props.Value])

    return(
        <form>
            <div className="Search">
                <div className="First">
                    <input className="SearchInput" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </div>
                <div className="Last">
                    <button type="submit" className="Btn" onClick={(e)=>onSubmit(e)}>Add</button>
                </div>
            </div>
        </form>
    )
}

export default Search




