import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'hi, how are you?', likesCount: 4 },
        { id: 2, message: 'It\'s my first post', likesCount: 7}
    ],
    newPostText: '',
    profile: null,
    isFetching: false,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 3, message: state.newPostText, likesCount: 0}, ...state.posts],
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ( { type: ADD_POST } );
export const onPostChangeActionCreator = (text) => ( { type: UPDATE_NEW_POST_TEXT, newText: text } );
export const setUserProfile = (profile) => ( { type: SET_USER_PROFILE, profile } );
export const setStatus = (status) => ( { type: SET_STATUS, status } );
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getUserProfile = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getProfile(userId).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;