import {createStore} from 'Redux';
import favApp from './reducers/index';
import act, {addLink, filterLinkM, filterLinkE} from './actions/index';

let store = createStore(favApp);

console.dir(store.getState());

let unsubscribe = store.subscribe(() => {
    console.dir(store.getState());
});

store.dispatch(addLink('百度', 'http://www.baidu.com', {id: 0, name: "常用"}, {"1": {id: 1, name: "搜索引擎"}, "2": {id: 2, name: "国内"}}, (new Date()).getTime()));

unsubscribe();
