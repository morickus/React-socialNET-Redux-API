import React from 'react';
import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';
import App from '../App';

let state = {
	posts: [
			{ id: 1, message: 'hi, how are you?', likesCount: 4 },
			{ id: 2, message: 'It\'s my first post', likesCount: 7}
	]
};

test('lenght of posts should be incremented', () => {
	let action = addPostActionCreator('sdsdf');
	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(3);
});

test('after deleting length of messages should be decrement', () => {
	let action = deletePost(1);
	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(1);
});
