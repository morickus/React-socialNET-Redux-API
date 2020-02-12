import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
    return (
        <main>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </main>
    );
}

export default Profile;