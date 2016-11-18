import {reducerGeneration} from '../util';
import act from '../actions/index';

const filter = reducerGeneration({mid: -1, eid: -1}, {
    [act.filter.mtag](state, action) {
        if (state.mid == action.mid)
            action.mid = -1;
        return Object.assign({}, state, {mid: action.mid});
    },
    [act.filter.etag](state, action) {
        if (state.eid == action.eid)
            action.eid = -1;
        return Object.assign({}, state, {eid: action.eid});
    }
});

export default filter;
