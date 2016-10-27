import {createStore} from 'redux';
import todoApp from './reducers';
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './actions';

let store = createStore(todoApp);


// 记录初始state
console.log(store.getState());

// 每次state变化时，记录日志
// 注意 `subscribe()` 会返回一个正在注销的监听器的方法
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// 发送一些actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

//停止监听state的更新
unsubscribe();
