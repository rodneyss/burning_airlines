var app = app || {}

_.templateSettings = {
 evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
 interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(function () {
 	app.appFlights = new app.Flights();
 	app.appPlanes = new app.Planes();
 	app.appPlanes.fetch().done(function () {
   	app.appFlights.fetch().done(function(){
   		app.router = new app.AppRouter();
  		Backbone.history.start();
    $('body').on('click', "#navigation", function(e){
      console.log("Your navigation is being clicked");
    });
    $('body').on('click',"#homeLink",function(e){
      console.log('boopity boop boop');
      app.router.navigate('', true);
    });
    $('body').on('click',"#flightPgLink",function(e){
      console.log('Navigating to flight creation page');
      app.router.navigate('/flights/create', true);
    });
    $('body').on('click',"#planePgLink",function(e){
      app.router.navigate('/planes/create', true);
      console.log('Navigating to plane creation page');
    });
   	});
  });
})