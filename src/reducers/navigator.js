import { NAVIGATOR } from '../actions/types';

export default function  (state = [], action) {
    switch(action.type) {
        case NAVIGATOR:
            //console.log('Route', action.payload);
            return {
                ...state,
                route: action.payload
            };
        default:
            return state;
    }
};
