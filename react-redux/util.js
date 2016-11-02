export const reducerGeneration = function(initialState, rmap) {
    return function reducer(state = initialState, action) {
        if (rmap.hasOwnProperty(action.type)) {
            return rmap[action.type](state, action);
        } else {
            return state;
        }
    }
}
