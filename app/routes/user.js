module.exports = function(app){
	app.route('/').get(app.controllers.User.index);
	app.route('/user/getUsers').get(app.controllers.User.list);
	app.route('/user/deleteUser').get(app.controllers.User.delete);
	app.route('/user/addUser').get(app.controllers.User.add);
	app.route('/login').post(app.controllers.User.login);
};