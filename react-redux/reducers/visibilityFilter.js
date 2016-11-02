import {reducerGeneration} from '../util';

const visibilityFilter = reducerGeneration('SHOW_ALL', {
    SET_VISIBILITY_FILTER(state, action) {
        return action.filter;
    }
});

export default visibilityFilter;
