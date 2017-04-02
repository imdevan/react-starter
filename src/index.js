import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux'
import { Router } from 'react-router';
import routes from './routes';

import createHashHistory from 'history/lib/createHashHistory';

// Import css
import 'tachyons';

let history = createHashHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
