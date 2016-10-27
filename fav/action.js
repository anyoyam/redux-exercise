// export function add(url, tag, title) {
//     return {
//         type: 'add',
//         url,
//         tag,
//         title
//     }
// }

// export function edit(id, url, tag, title) {
//     return {
//         type: 'edit',
//         id,
//         url,
//         tag,
//         title
//     }
// }

// export function del(id) {
//     return {
//         type: 'del',
//         id
//     }
// }

function actionGeneration(type, ...argNames) {
    return function(...args) {
        let action = {type};
        args.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    }
}

export const LIST_ACTION_TYPE = {
    ADD_FAV: 'ADD_FAV',
    DEL_FAV: 'DEL_FAV',
    EDIT_FAV: 'EDIT_FAV'
};

export const SET_PAGE_DATA = 'SET_PAGE_DATA';
export const ADD_TAG = 'ADD_TAG';

export const add = actionGeneration(LIST_ACTION_TYPE.ADD_FAV, 'url', 'tag', 'title');
export const edit = actionGeneration(LIST_ACTION_TYPE.EDIT_FAV, 'id', 'new_data');
export const del = actionGeneration(LIST_ACTION_TYPE.DEL_FAV, 'id');

export const addtag = actionGeneration(ADD_TAG, 'id', 'name');
export const setpage = actionGeneration(SET_PAGE_DATA, 'total', 'index');
