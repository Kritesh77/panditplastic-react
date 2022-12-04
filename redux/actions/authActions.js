import * as action from "constants/reduxConstants";

export const signIn = (user) => {
    console.log("SIGNIN ACITON HIT", user);
    return {
        type: action.SIGNIN,
        payload: user,
    };
};
export const signUp = (user) => {
    console.log("SIGNIN ACITON HIT", user);
    return {
        type: action.SIGNUP,
        payload: user,
    };
};
export const signUpSuccess = (user) => ({
    type: action.SIGNUP_SUCCESS,
    payload: user,
});

export const signInSuccess = (user) => ({
    type: action.SIGNIN_SUCCESS,
    payload: user,
});

export const signOut = () => ({
    type: action.SIGNOUT,
});

export const signOutSuccess = () => ({
    type: action.SIGNOUT_SUCCESS,
});

export const getAuthState = () => ({
    type: action.GET_AUTH_STATE,
});