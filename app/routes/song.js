module.exports = function(app){
    app.route('/song/getSongs').get(app.controllers.Song.list);
    app.route('/song/deleteSong').get(app.controllers.Song.delete);
    app.route('/song/addSong').get(app.controllers.Song.add);
    app.route('/song/getSong').get(app.controllers.Song.get);
    app.route('/song/likeSong').get(app.controllers.Song.like);
    app.route('/song/getSongBySinger').get(app.controllers.Song.getSongBySinger);
};