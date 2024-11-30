import React from 'react';

const Navbar = ({ onContactClick }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <span>Todos</span>
                </li>
                <li className="navbar-item" onClick={onContactClick}>
                    <span>Contact</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;