import React, {useState} from 'react'
import {BrowserRouter as Router, Route} 
from 'react-router-dom'
import './App.css'

import Nav from './Nav'
import List from './List'
import Add from './Add'

function App() {


  const [state, setState] = useState([])

  const changeState = (e) => {
    console.log(state)
    state.map((el, i) => {
      if(Number(e.target.id) === el.id){
        const pos = e.target.checked
        if(pos === true){
          console.log('work')
          el.position = 'completed'
        }else{
          console.log('nowork')
          el.position = 'active'
        }
        const st = [...state]
        st[i] = el
        setState(st)
      }
    })
  }


  const deleteItem = (e) => {
      const res = state.filter(el => el.id != e.target.id)
      console.log(res)
      setState(res)
  }

  return (
    <div className="content">
      <div className="todo">
        <Router>
          <Add setState={setState} state={state}/>
            <Route path="/" exact ><List arr={state} position="all" changeState={changeState} deleteItem={deleteItem}/></Route>
            <Route path="/completed"><List arr={state} position="completed" changeState={changeState} deleteItem={deleteItem}/></Route>
            <Route path="/active"><List arr={state} position="active" changeState={changeState} deleteItem={deleteItem}/></Route>
          <Nav />
        </Router>
      </div>
    </div>
  );
}

export default App;
