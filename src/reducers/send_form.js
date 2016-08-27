import { SEND_FORM } from '../actions/types';

export default function  (state = [], action) {
    switch(action.type) {
        case SEND_FORM:
            //console.log('Success', action.payload);
            return {
                ...state,
                result: action.payload
            };
        default:
            return state;
    }
};
