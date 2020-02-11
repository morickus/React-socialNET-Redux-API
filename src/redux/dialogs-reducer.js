const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const onMessageChangeActionCreator = (text) => ( { type: UPDATE_NEW_MESSAGE_TEXT, newText: text } );

export const addMessageActionCreator = () => ( { type: ADD_NEW_MESSAGE } );

export default dialogsReducer;