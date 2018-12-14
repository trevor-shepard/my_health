import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'


// Action Creators
export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) =>({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})


// Thunk Actions
export const login = (user) => dispatch => (
    SessionApiUtil.login(user)
    .then(
        (response) => dispatch(receiveCurrentUser(response)),
        (response) => dispatch(receiveSessionErrors(response.responseJSON))
        )
);

export const logout = () => dispatch => (
    SessionApiUtil.logout()
    .then(
        () => dispatch(logoutCurrentUser()),
        (response) => dispatch(receiveSessionErrors(response.responseJSON))
    
    )
);

export const signup = (user) => dispatch => (
    SessionApiUtil.signup(user)
    .then(
        (response) => dispatch(receiveCurrentUser(response)),
        (response) => dispatch(receiveSessionErrors(response.responseJSON))
    )
)