const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let store = {
    _state: {
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
            newMessageText: '',
        }
    },
    _callSubscriber() { },

    getState() {
        return this._state;
    },subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            
        } else if (action.type === ADD_NEW_MESSAGE) {
            let newMessage = {
                id: 3,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);

        }
    }
}

export const addPostActionCreator = () => ( { type: ADD_POST } );

export const onPostChangeActionCreator = (text) => 
    ( { type: UPDATE_NEW_POST_TEXT, newText: text } );

export const onMessageChangeActionCreator = (text) => ( { type: UPDATE_NEW_MESSAGE_TEXT, newText: text } );

export const addMessageActionCreator = (text) => 
    ( { type: ADD_NEW_MESSAGE, newText: text } );

export default store;