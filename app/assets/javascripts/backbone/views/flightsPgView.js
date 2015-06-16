var app = app || {};
app.FlightsPgView = Backbone.View.extend({
	el: '#views', 
	events:{
		'submit #searchFlight': 'displayFlight',
	},
	initialize: function(){},
	render: function(){
		var flightsPgHTML = $('#flightsPgTemplate').html();
		this.$el.html(flightsPgHTML);
		this.collection.each(function(flight){
			var flightsListView = new app.FlightsListView({model:flight})
		});
		flightsListView.render();
	},
	displayFlight: function(e){
		e.preventDefault();
		var to= $('#toLoc').val().trim();
		var from= $('#fromLoc').val().trim();
		var flight = new blog.Flight({
			to: to,
			from: from,
			plane_id: plane_id
		});
		var view = this;
		flight.fetch().done(function(){
			view.flights.fetch();
		});
	}
});