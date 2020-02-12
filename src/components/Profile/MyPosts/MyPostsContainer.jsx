import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

function MyPostsContainer(props) {

    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch( addPostActionCreator() );
    }

    let onPostChange = (text) => {
        props.store.dispatch( onPostChangeActionCreator(text) );
    }

    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} onPostChangeActionCreator={ onPostChange } 
        addPostActionCreator={ onAddPost } />
    );
}

export default MyPostsContainer;