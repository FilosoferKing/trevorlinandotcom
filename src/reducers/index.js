import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LightSlider from './light_slider';
import Navigator from './navigator';
import SendFormInfo from './send_form';

const rootReducer = combineReducers({
    lightSlider: LightSlider,
    navigator: Navigator,
    form: formReducer,
    sendFormInfo: SendFormInfo
});

export default rootReducer;
