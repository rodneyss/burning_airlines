var app = app || {};

// Collection of our particular model.
app.Reservations = Backbone.Collection.extend({
  model: app.Reservation,
  longPolling: false,
  startPolling: function(interval){
  	console.log("START POLLING")
  	this.longPolling = true;
  	console.log(this.longPolling);
  	if(interval){
  		console.log(interval);
  		this.interval = interval;
  		console.log(this.interval);
  	}
  	this.executePolling();
  },
  stopPolling: function(){
  	this.longPolling = false;
  },
  executePolling: function(){
  	console.log("Fetching shit");
  	console.log(app.reservations);
  	console.log(this);
  	app.reservations.fetch({success: app.reservations.onFetch});
  },
  onFetch: function(){
  	console.log("are you doing this shit?")
  	if(app.reservations.longPolling){
  		console.log("longPolling is true");
  		setTimeout(app.reservations.executePolling, 100 * app.reservations.interval);
  	}
  },
  url:function(){
  	return '/app/flights/' + this.flight_id + '/reservations';
  },

  initialize: function (data) {
  	this.flight_id = data.flight_id;
  	this.on('add', function(){
  		console.log("THIS IS BEING RUN");
  		var flight = app.appFlights.get(this.flight_id);
  		app.flightViewRef = new app.FlightView({model:flight});
  		app.flightViewRef.render();
  	});
  }
});