export default {
	path: 'product',
	getComponents(location, callback) {
    require.ensure([], function (require) {
      callback(null, require('./components/Product'))
    })
  }
}