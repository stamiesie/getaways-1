import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
    <header>
        <div>
            <NavLink className="active" to={'/'}>Home</NavLink>
            <br/>
            <NavLink className="active" to={'/login'}>Login</NavLink>
            <br/>
            {/* hide when no user logged in */}
            <NavLink className="active" to={'/logout'}>Logout</NavLink>
            <br/>
            <NavLink className="active" to={'/signup'}>Register</NavLink>
        </div>
    </header>
    )
}