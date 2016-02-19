import React from 'react';

var User = React.createClass({
	render: function () {
		return (
			<div>user content</div>
		);
	}
});
// 使用commonjs方式返回
module.exports = User;
// export default User;