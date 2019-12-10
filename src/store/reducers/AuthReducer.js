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

} from '../constants';

const initialState = {
    user: {},
    error: {},
    loader: false,

}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {

        case SIGNUP:
            state = {
                user: {},
                error: {},
                loader: true
            }
            break;

        case SIGNUP_SUCCESS:
            state = {
                user: action.payload,
                error: {},
                loader: false
            }
            break;

        case SIGNUP_FAILURE:
            state = {
                user: {},
                error: action.error,
                loader: false
            }
            break;

        case SIGNIN:
            state = {
                user: {},
                error: {},
                loader: true
            }
            break;

        case SIGNIN_SUCCESS:
            state = {
                user: action.payload,
                error: {},
                loader: false
            }
            break;

        case SIGNIN_FAILURE:
            state = {
                user: {},
                error: action.error,
                loader: false
            }
            break;

        case STATEUSER:
            state = {
                user: {},
                error: {},
                loader: true
            }
            break;

        case STATEUSER_SUCCESS:
            state = {
                user: action.payload,
                error: {},
                loader: false
            }
            break;

        case STATEUSER_FAILURE:
            state = {
                user: {},
                error: {},
                loader: false
            }
            break;

        case SIGNOUT:
            state = {
                user: {},
                error: {},
                loader: false
            }
            break;

        default:
            break;
    }
    return state;
}