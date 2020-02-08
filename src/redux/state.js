import {rerenderEntireTree} from "./../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'hi, how are you?', likesCount: 4 },
            { id: 2, message: 'It\'s my first post', likesCount: 7}
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Viktor' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Hello' }
        ],
    }
};

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;