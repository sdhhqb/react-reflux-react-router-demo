import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import MyApp from './components/MyApp.react';

var rootRoute = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: MyApp,
    childRoutes: [
      require('./routes/Product'),
      require('./routes/User'),
    ]
  }]
};

render((
  <Router history={hashHistory} routes={rootRoute} />
), document.getElementById('reactapp'));