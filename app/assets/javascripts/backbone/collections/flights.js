var app = app || {};

// Collection of our particular model.
app.Flights = Backbone.Collection.extend({
  model: app.Flight,
  url: function(){
  	// return '/app/planes/'+this.plane_id+'/flights';
  	return '/app/flights';
  },
  initialize:function(){
  	// this.plane_id
  	this.on('add', function(flight){
  		var flightPgRef = new app.FlightsListView({model: flight});
  		flightPgRef.render();
  	});
  }
});