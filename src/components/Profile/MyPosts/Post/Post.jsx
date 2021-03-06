import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <img alt="ava" src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" />
            <span>{props.message}</span>
            <div>
                <span>{props.likesCount} like</span>
            </div>
        </div>
    );
}

export default Post;