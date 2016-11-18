import {reducerGeneration} from '../util';
import act from '../actions/index';

let id = 0;
let initialState = [
    {id: 0, title: "百度", url: "http://www.baidu.com", mtag: {id: 1, name: "常用"}, etag: [{id: 2, name: "检索"}], ctime: "2016-11-10"}
];
const list = reducerGeneration(initialState, {
    [act.link.add](state, action) {
        let {title, url, mtag, etag, ctime} = action;
        return [...state, {id: id++, title, url, mtag, etag, ctime}];
    },
    [act.link.rp](state, action) {
        return state.map(i => {
            if (i.id == action.id) {
                return Object.assign({}, i, action.ndata);
            } else {
                return i;
            }
        });
    },
    [act.link.rm](state, action) {
        let nstate = state.concat([]);
        nstate.splice(action.id, 1);
        return nstate;
    }
});

export default list;
