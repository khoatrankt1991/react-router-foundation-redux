import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';
import store from 'store';
import {Provider} from 'react-redux';
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

ReactDOM.render(
<Provider store={store}>
        <Main/>
</Provider>
, document.getElementById("root"));