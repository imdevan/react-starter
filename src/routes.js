import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Components
import App from './components/App';
import HomePage from './components/home/Home';
import AboutPage from './components/about/About';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={HomePage}/>
    <Route path='about' component={AboutPage} />
  </Route>
);
