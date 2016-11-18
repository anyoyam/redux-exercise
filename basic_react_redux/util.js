export const actionGeneration = function(type, ...arg) {
    return function(...argv) {
        let action = {type};
        argv.map((it, id) => {
            action[arg[id]] = it;
        });
        return action;
    }
}

export const reducerGeneration = function(initialState, funcMap) {
    return function(state = initialState, action) {
        if (funcMap.hasOwnProperty(action.type)) {
            return funcMap[action.type](state, action);
        } else {
            return state;
        }
    }
}

export const deepClone = function(...args) {
    let target = args[0],
        tpof,
        spof,
        source,
        ts = Object.prototype.toString;
    for(let i = 1; i < args.length; i++) {
        source = args[i];
        for (let key in source) {
            if (!source.hasOwnProperty(key)) continue;
            tpof = ts.call(target[key]);
            spof = ts.call(source[key]);
            if (/^\[object [Array|Object]\]$/.test(spof)) {
                if (spof == '[object Object]' && tpof != '[object Object]') {
                    target[key] = {};
                } else if (spof == '[obejct Array]' && spof != '[obejct Array]') {
                    target[key] = [];
                }
                deepClone(target[key], source[key]);
            }
            else if (source[key] != undefined) target[key] = source[key];
        }
    }
    return target;
}
