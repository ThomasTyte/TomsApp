import React from 'react';

const Navbar = ({ onPageChange }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button onClick={() => onPageChange('home')}>Home</button>
                </li>
                <li className="navbar-item">
                    <button onClick={() => onPageChange('contact')}>Contact</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;