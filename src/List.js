import React from 'react'

const List = ({arr, position, changeState, deleteItem}) => {
    
    return(
        <div className="lists">
        {arr.map(el => 
            {if(el.position === position){
                return(
                    <div key={el.id} className="list">
                        {el.position === 'completed' ?
                            <input id={el.id} type="checkbox" onClick={changeState} defaultChecked/>
                        :
                            <input id={el.id} type="checkbox" onClick={changeState}/>
                        }
                        <div><p>{el.text}</p></div>
                        <div className="delete"><button id={el.id} onClick={deleteItem}>X</button></div>
                    </div>
                )
            }else if(position === 'all'){
                return(
                    <div key={el.id} className="list">
                        {el.position === 'completed' ?
                            <input id={el.id} type="checkbox" onClick={changeState} defaultChecked/>
                        :
                            <input id={el.id} type="checkbox" onClick={changeState}/>
                        }
                        <div><p>{el.text}</p></div>
                        <div className="delete"><button id={el.id} onClick={deleteItem}>X</button></div>
                    </div>
                )
            }}
            
        )}
        </div>
    )
}

export default List