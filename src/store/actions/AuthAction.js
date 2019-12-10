import {
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNOUT,
    STATEUSER,
    STATEUSER_SUCCESS,
    STATEUSER_FAILURE
} from '../constants'


export default class AuthAction {

    static Signup() {
        return {
            type: SIGNUP,
        }
    }

    static SignupSuccess(data) {
        return {
            type: SIGNUP_SUCCESS,
            payload: data
        }
    }

    static SignupFailure(error) {
        return {
            type: SIGNUP_FAILURE,
            error: error
        }
    }

    static Signin() {
        return {
            type: SIGNIN,
        }
    }

    static SigninSuccess(data) {
        return {
            type: SIGNIN_SUCCESS,
            payload: data
        }
    }

    static SigninFailure(error) {
        return {
            type: SIGNIN_FAILURE,
            error: error
        }
    }

    static StateUser() {
        return {
            type: STATEUSER,
        }
    }

    static StateUserSuccess(data) {
        return {
            type: STATEUSER_SUCCESS,
            payload: data
        }
    }

    static StateUserFailure() {
        return {
            type: STATEUSER_FAILURE,
        }
    }

    static Signout() {
        return {
            type: SIGNOUT,
        }
    }

}