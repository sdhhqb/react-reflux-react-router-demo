var userRoute = {
	path: 'userlist',
	getComponents(location, callback) {
    require.ensure([], function (require) {
      callback(null, require('./components/User'))
    })
  }
}
module.exports = userRoute;