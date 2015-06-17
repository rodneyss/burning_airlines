var app = app || {};

// Collection of our particular model.
app.Reservations = Backbone.Collection.extend({
  model: app.Reservation,
  url:function(){
  	return '/app/flights/' + this.flight_id + '/reservations';
  },
  initialize: function (data) {
  	this.flight_id = data.flight_id;
  	this.on('add', function(){

  		var flight = app.appFlights.get(this.flight_id);
  		var flightViewRef = new app.FlightView({model:flight});
  		flightViewRef.render();
  	})
  }
});