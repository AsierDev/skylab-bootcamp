import React, { Component } from 'react'
import ReactDOM from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {



    render() {
        return (
            <ul className="nav nav-pills justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/">List Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register Users</NavLink>
                </li>
            </ul>
        )
    }
}


export default NavBar
