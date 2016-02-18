import React from 'react';
import Header from './Header.react';
import Footer from './Footer.react';
import SideMenu from './menu/SideMenu.react';
import MenuStore from '../stores/MenuStore';
import MenuAction from '../actions/MenuAction';
import Constants from '../constants/Constants';

var MyApp = React.createClass({
	getInitialState: function () {
		return {
			menuData: [],
    	curActive: "",
    	curPath: ""
		};
	},
	componentDidMount: function () {
		this.unsubscribe = MenuStore.listen(this._onChange);
		MenuAction.receive_menu_data(Constants.MENUDATA);
	},
	componentWillUnmount: function() {
		this.unsubscribe();
	},
	render: function () {
		return (
			<div>
				<Header />
				<div id="mainSection" className="mainSection">
					<SideMenu 
						curPath={this.state.curPath}
						curActive={this.state.curActive}
						menuData={this.state.menuData} />
					
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	},
	_onChange: function(status) {
		this.setState(status);
	}
});
if (typeof module !== "undefined") {
	module.exports = MyApp;
	console.log("module : ", module);
}
export default MyApp;