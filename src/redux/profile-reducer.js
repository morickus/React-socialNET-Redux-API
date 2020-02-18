const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    posts: [
        { id: 1, message: 'hi, how are you?', likesCount: 4 },
        { id: 2, message: 'It\'s my first post', likesCount: 7}
    ],
    newPostText: '',
    profile: null,
    isFetching: false
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: state.newPostText, likesCount: 0}],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ( { type: ADD_POST } );
export const onPostChangeActionCreator = (text) => ( { type: UPDATE_NEW_POST_TEXT, newText: text } );
export const setUserProfile = (profile) => ( { type: SET_USER_PROFILE, profile } );
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default profileReducer;