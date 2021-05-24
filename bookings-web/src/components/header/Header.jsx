import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
    <header>
        <div>
            <NavLink className="active" to={'/signup'}>Register</NavLink>
            <br/>
            <NavLink className="active" to={'/'}>Home</NavLink>
        </div>
    </header>
    )
}