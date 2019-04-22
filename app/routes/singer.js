module.exports = function(app){
    app.route('/singer/getSinger').get(app.controllers.Singer.get);
    app.route('/singer/getSingers').get(app.controllers.Singer.list);
    app.route('/singer/deleteSinger').get(app.controllers.Singer.delete);
    app.route('/singer/addSinger').get(app.controllers.Singer.add);
};