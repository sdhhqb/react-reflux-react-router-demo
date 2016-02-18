export default {
	path: 'userlist',
	getComponents(location, callback) {
    require.ensure([], function (require) {
      callback(null, require('./components/User'))
    })
  }
}