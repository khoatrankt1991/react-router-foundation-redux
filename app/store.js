var redux = require('redux');

var username = (state = null, action) => {
    switch (action.type) {
        case "LOG_IN": return action.username;
        case "LOG_OUT": return null;
        default:
            return state;
    }
};
var reducer = redux.combineReducers({username});
var store = redux.createStore(reducer);
store.dispatch({
    type: "LOG_IN",
    username: "khoatran"
});
store.dispatch({
    type: "LOG_OUT"
});
store.subscribe(()=>{console.log(store.getState())});
module.exports = store;

