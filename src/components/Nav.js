import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Nav() {
    return (
        <div>
            <nav>
                <li><Link to="/list">List</Link></li>
                <li><Link to="/add">Form</Link></li>
                <li><Link to="/city">Add/City</Link></li>
                <li><Link to="/country">Add/Country</Link></li>
            </nav>
        </div>
    )
}

export default Nav;
