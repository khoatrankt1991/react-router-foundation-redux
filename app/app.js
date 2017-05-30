import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';
import store from './store.js';
import {Provider} from 'react-redux';
ReactDOM.render(
<Provider store={store}>
    <Main/>
</Provider>
, document.getElementById("root"));