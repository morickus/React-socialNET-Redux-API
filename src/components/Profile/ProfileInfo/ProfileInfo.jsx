import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div>
            <div>
                <img alt='banner' src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;