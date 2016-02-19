import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import MyApp from './components/MyApp.react';
import NotFound from './components/NotFound.react';

var rootRoute = {
	component: 'div',
	childRoutes: [{
		path: '/',
		component: MyApp,
		childRoutes: [
			require('./routes/Product'),
			require('./routes/User'),
			{
				path: '*',
				component: NotFound
			}
		]
	}]
};

render((
	<Router history={hashHistory} routes={rootRoute} />
), document.getElementById('reactapp'));