import {combineReducers} from 'redux';
import * as tp from './action';

function reducerGeneration(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

const list = reducerGeneration([], {
    [tp.LIST_ACTION_TYPE.ADD_FAV](state, action) {
        let {url, tag, title} = action;
        return [...state, {url, tag, title}];
    },
    [tp.LIST_ACTION_TYPE.EDIT_FAV](state, action) {
        let {url, tag, title} = action.new_data;
        return state.map((it, id) => {
            if (id === action.id) {
                return {url, tag, title};
            }
            return it;
        });
    },
    [tp.LIST_ACTION_TYPE.DEL_FAV](state, action) {
        let clone = state.concat([]);
        clone.splice(action.id, 1);
        return clone;
    }
});

const tag = reducerGeneration([], {
    [tp.ADD_TAG](state, action) {
        let {id, name} = action;
        return [...state, {id, name}];
    }
});

const page = reducerGeneration({}, {
    [tp.SET_PAGE_DATA](state, action) {
        let {total, index} = action;
        return {total, index};
    }
});

const fav = combineReducers({
    list,
    tag,
    page
});

export default fav;
