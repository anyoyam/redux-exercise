import {combineReducers} from 'redux';
import list from './list';
import filter from './filter';

const favApp = combineReducers({
    list,
    filter
});

export default favApp;
