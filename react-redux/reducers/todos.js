import {reducerGeneration} from '../util';

const todo = reducerGeneration({}, {
    ADD_TODO(state, action) {
        return {
            id: action.id,
            text: action.text,
            completed: false
        };
    },
    TOGGLE_TODO(state, action) {
        if (state.id !== action.id) {
            return state;
        }
        return Object.assign({}, state, {
            completed: !state.completed
        });
    }
});

const todos = reducerGeneration([], {
    ADD_TODO(state, action) {
        return [...state, todo(undefined, action)];
    },
    TOGGLE_TODO(state, action) {
        return state.map(t => todo(t, action));
    }
});

export default todos;
