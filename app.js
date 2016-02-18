import React from 'react';
import { Link } from 'react-router'

var App = React.createClass({
	render: function () {
		return (
			<div>
				<h1 className={"header"}>React Router Tutorial</h1>
        <ul role="nav" className={"sideMenu"}>
          <li className={"menuItem"}><Link to="/header">Header</Link></li>
          <li className={"menuItem"}><Link to="/about">About</Link></li>
        </ul>
        <div className={"content"}>
        	{this.props.children}
        </div>
			</div>
		);
	}
});

export default App;