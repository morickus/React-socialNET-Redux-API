const ADD_NEW_MESSAGE = 'dialogs/ADD-NEW-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.body}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (body) => ( { type: ADD_NEW_MESSAGE, body } );

export default dialogsReducer;