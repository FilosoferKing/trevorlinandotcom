import { LIGHT_SLIDER } from '../actions/types';

export default function  (state = [], action) {
    switch(action.type) {
        case LIGHT_SLIDER:
            //console.log('Light Slider', action.payload);
            return {
                ...state,
                lighting: action.payload
            };
        default:
            return state;
    }
};
