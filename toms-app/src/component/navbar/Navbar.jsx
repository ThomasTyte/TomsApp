import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onHomeClick, onContactClick }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item" onClick={onHomeClick}>
                    <span>Home</span>
                </li>
                <li className="navbar-item" onClick={onContactClick}>
                    <span>Contact</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;