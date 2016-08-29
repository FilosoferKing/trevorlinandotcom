import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';

import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers,
    window.devToolsExtension ? window.devToolsExtension() : f => f) // Code for Google Chrome Dev Tools Redux Plugin)
    }>
        <Router history={browserHistory} routes={routes} />
    </Provider>
  , document.querySelector('.container'));
