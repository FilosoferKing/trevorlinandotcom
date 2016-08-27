import {
    LIGHT_SLIDER,
    NAVIGATOR,
    SEND_FORM
} from './types';
import axios from 'axios';

export function slideLight (lighting) {
    return {
        type: LIGHT_SLIDER,
        payload: lighting
    };
}

export function navigationRoute (route) {
    return {
        type: NAVIGATOR,
        payload: route
    };
}
// Local - http://localhost:8080/sendForm
export function sendForm (formInfo) {
    //console.log('Form Info: ', formInfo);
    const request = axios.post('https://trevorlinan.herokuapp.com/sendForm', formInfo)
        .then((success) => {
            console.log('Result: ', success.data);
            return success.data;
        });
    //console.log('Sent Information');
    return {
        type: SEND_FORM,
        payload: request
    }
}