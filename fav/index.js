import {createStore} from 'redux';
import fav from './reducer';
import * as act from './action';

let store = createStore(fav);

console.log(store.getState());

let unsubscirbe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(act.add('http://www.baidu.com', '常用', '百度'));
store.dispatch(act.add('http://www.sina.com', '常用', '新浪'));
store.dispatch(act.add('http://www.google.com', '常用', 'Google'));
store.dispatch(act.edit(0, {url: 'http://tieba.baidu.com', tag: '热门', title: '贴吧'}));
store.dispatch(act.add('http://www.npm.org', '常用', 'Npm'));
store.dispatch(act.add('http://www.facebook.com', '常用', '脸书'));
store.dispatch(act.del(3));

store.dispatch(act.addtag(0, '常用'));
store.dispatch(act.addtag(1, '热门'));

store.dispatch(act.setpage(10, 2));

unsubscirbe();
