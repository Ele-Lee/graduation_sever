module.exports = function(app){
    app.route('/hot/getHots').get(app.controllers.Hot.list);
    app.route('/hot/deleteHot').get(app.controllers.Hot.delete);
    app.route('/hot/addHot').get(app.controllers.Hot.add);
};