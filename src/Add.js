import React, {useRef} from 'react'

const Add = ({setState, state}) => {
    const step = useRef(1)
    const press = (e) => {
        if(e.key === 'Enter'){
            if(e.target.value !== ''){
                setState([...state, {id: step.current, text: e.target.value, position: 'active'}])
                step.current++
            }
        }
    }

    return(
        <div className="add">
            <input type="text" placeholder="write" onKeyDown={press}/>
        </div>
    )
}

export default Add