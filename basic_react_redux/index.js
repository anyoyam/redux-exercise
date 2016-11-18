import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import favApp from './reducers/index';
import AppMain from './components/AppMain';

const store = createStore(favApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <AppMain />
    </Provider>,
    document.getElementById('main')
);
