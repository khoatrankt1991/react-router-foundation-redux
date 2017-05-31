var redux = require('redux');

var username = (state = null, action) => {
    switch (action.type) {
        case "LOG_IN": return action.username;
        case "LOG_OUT": return null;
        default:
            return state;
    }
};
var listproduct = (state = [], action)=>{
    switch(action.type) {
        case "LIST_PRODUCT" : return action.listproduct;
        default: return state;
    }
};
var reducer = redux.combineReducers({username, listproduct});
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension?window.devToolsExtension():f=>{console.log("Please Add Extension Redux Dev Tools")}
));

store.subscribe(()=>{console.log(store.getState())});
module.exports = store;

