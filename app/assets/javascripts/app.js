var app = app || {}

_.templateSettings = {
 evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
 interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(function () {
 	app.appPlanes = new app.Planes();
 	app.appPlanes.fetch().done(function(){
 		app.router = new app.AppRouter();
 		Backbone.history.start();
 	})
})