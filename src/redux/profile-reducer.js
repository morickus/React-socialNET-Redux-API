import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    posts: [
        { id: 1, message: 'hi, how are you?', likesCount: 4 },
        { id: 2, message: 'It\'s my first post', likesCount: 7}
    ],
    profile: null,
    isFetching: false,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 3, message: action.body, likesCount: 0}, ...state.posts]
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (body) => ( { type: ADD_POST, body } );
export const setUserProfile = (profile) => ( { type: SET_USER_PROFILE, profile } );
export const setStatus = (status) => ( { type: SET_STATUS, status } );
export const deletePost = (postId) => ( { type: DELETE_POST, postId } );
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