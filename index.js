import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import MyApp from './components/MyApp.react';
import ProductRouter from './routes/Product';
import UserRouter from './routes/User';

var rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: MyApp,
    childRoutes: [
      ProductRouter,
      UserRouter
    ]
  } ]
};

render((
  <Router history={hashHistory} routes={rootRoute} />
), document.getElementById('reactapp'));