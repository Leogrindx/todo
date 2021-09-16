import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <div className="nav">
            <Link to="/"><button className="button">All</button></Link>
            <Link to="/active"><button className="button">Active</button></Link>
            <Link to="/completed"><button className="button">Completed</button></Link>
        </div>
    )
}

export default Nav