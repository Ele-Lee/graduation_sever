module.exports = function(app){
    app.route('/admin/getAdmins').get(app.controllers.Admin.list);
    app.route('/admin/deleteAdmin').get(app.controllers.Admin.delete);
    app.route('/admin/addAdmin').get(app.controllers.Admin.add);
    app.route('/admin/login').post(app.controllers.Admin.login);
};