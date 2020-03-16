import React from 'react';
import css from './NavBar.module.css'

const NavBar = () => {
    return (
    <nav className = {css.nav}>
        <div className = {css.item}>
          <a href=''>Profile</a>
        </div>
        <div className = {css.item}>
          <a href='dhdh'>Messages</a>
        </div>
        <div className = {css.item}>
          <a href='dfh'>News</a>
        </div>
        <div className = {css.item}>
          <a href='dfhdfh'>Music</a>
        </div>
        <div className = {css.item}>
          <a href='dfhdfh'>Settings</a>
        </div>
    </nav>
    )}

export default NavBar;