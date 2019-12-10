import { ADD_TO_CART, CURRENT_PRODUCT } from '../constants';
import { Images } from '../../config';

const initialState = {

}

export default function DatabaseReducer(state = initialState, action) {
    switch (action.type) {
        case "List":

            state = {
                ...state,
                List: action.payload
            }
            break;
       
        default:
            break;
    }
    return state;
}