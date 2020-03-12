import React from 'react';
import css from './Profile.module.css'

const Profile = () => {
    return(
        <div className={css.profile}>
            <div>
                <img src='main.jpg'/>
            </div>
            <div>
                <div>
                    ava+ descr
                </div>
                <div>
                    ava+ descr
                </div>
                <div>
                    My postr
                </div>
                <div>
                    New Post
                </div>
            </div>
        </div>
    )};


export default Profile;