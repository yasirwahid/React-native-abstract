import { AuthAction } from '../actions';
import NavigationService from '../../config/NavigationService';

export default class AuthMiddleware {

    static SignUp(email, password) {

        return (dispatch) => {

            dispatch(AuthAction.Signup())
           

        }
    }

    static SignIn(email, password) {
        return (dispatch) => {
            dispatch(AuthAction.Signin())
          
        }
    }

    static StateUser() {
        return (dispatch) => {
            dispatch(AuthAction.StateUser())
            
        }
    }

    static SignOut() {
        return (dispatch) => {
            NavigationService.navigate("Login")
           
        }
    }

    static ForgotPassword(email) {
        return () => {
           
        }
    }
}