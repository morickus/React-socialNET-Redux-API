import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <span>New post</span>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='hi, how are you?' likeCount='4' />
                <Post message="It's my first post" likeCount='7' />
            </div>
        </div>
    );
}

export default MyPosts;