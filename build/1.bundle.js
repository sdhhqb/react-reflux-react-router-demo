webpackJsonp([1],{

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ProductList = __webpack_require__(248);

	var _ProductList2 = _interopRequireDefault(_ProductList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var productListRoute = {
		path: 'productlist',
		component: _ProductList2.default
	};
	module.exports = productListRoute;

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProductList = _react2.default.createClass({
		displayName: 'ProductList',

		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'product list content'
			);
		}
	});
	module.exports = ProductList;

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _SaleList = __webpack_require__(250);

	var _SaleList2 = _interopRequireDefault(_SaleList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var saleListRoute = {
		path: 'salelist',
		component: _SaleList2.default
	};
	module.exports = saleListRoute;

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SaleList = _react2.default.createClass({
		displayName: 'SaleList',

		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'sale list content'
			);
		}
	});
	module.exports = SaleList;

/***/ }

});