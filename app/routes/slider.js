module.exports = function(app){
    app.route('/slider/getSliders').get(app.controllers.Slider.list);
    app.route('/slider/deleteSlider').get(app.controllers.Slider.delete);
    app.route('/slider/addSlider').get(app.controllers.Slider.add);
};