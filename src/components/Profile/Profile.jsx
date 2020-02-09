import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
        <main>
            <ProfileInfo />
            <MyPosts 
                posts={props.state.posts} 
                dispatch={props.dispatch} 
                newPostText={props.state.newPostText} />
        </main>
    );
}

export default Profile;