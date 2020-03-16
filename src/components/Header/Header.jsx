import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return(
        <header className= {css.header}>
            <h1>
                <img src='logo.png'/>
                <span>First of the World Social network for animals!</span>
            </h1>
        </header>
    )};


export default Header;