import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
    return (
        <main>
            <ProfileInfo profile={props.profile} isFetching={props.isFetching} 
            status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </main>
    );
}

export default Profile;