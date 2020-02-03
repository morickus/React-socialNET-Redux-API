import React from 'react';
import s from './Profile.module.css';

function Profile() {
    return (
        <main className={s.content}>
            <div>
                <img alt='banner' src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New post</div>
                <div className={s.posts}>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                    <div className={s.item}>post 3</div>
                </div>
            </div>
        </main>
    );
}

export default Profile;