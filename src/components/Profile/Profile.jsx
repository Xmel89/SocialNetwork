import React from 'react';
import css from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return(
        <div className={css.profile}>
            <div>
                <img src='main.jpg'/>
            </div>
            <MyPosts/>
        </div>
    )};


export default Profile;