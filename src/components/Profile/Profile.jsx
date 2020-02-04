import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <main className={s.content}>
            <div>
                <img alt='banner' src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </main>
    );
}

export default Profile;