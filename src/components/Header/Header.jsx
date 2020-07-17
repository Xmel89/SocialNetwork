import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return(
        <header className= {css.header}>
            <div>
                <h1>
                    <img src='logo.png'/>
                    <span>First of the World Social network for animals!</span>
                </h1>
            </div>
        </header>
    )};


export default Header;