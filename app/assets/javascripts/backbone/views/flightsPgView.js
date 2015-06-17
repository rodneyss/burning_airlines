var app = app || {};
app.FlightPgView = Backbone.View.extend({
	el:'#views', 
	events:{
		'submit #searchFlight': 'displayFlight',
	},
	initialize: function(options){
		debugger
		this.planes = options.planes;
		this.flights= options.flights;
	},
	render: function(){
		var nav = $('#adminNavTemplate').html();
		$('#navigation nav').html(nav);
		var flightsPgHTML = $('#flightsPgTemplate').html();
		this.$el.html(flightsPgHTML);
		this.flights.each(function(flight){
			var flightsListView = new app.FlightsListView({model:flight});
			flightsListView.render();
		});	
		this.planes.each(function(plane){
			var selectPlaneView = new app.SelectPlaneView({model:plane});
			selectPlaneView.render();
		})
	},
	displayFlight: function(e){
		e.preventDefault();
		var to= $('#toLoc').val().trim();
		var from= $('#fromLoc').val().trim();
		var plane_id = $('#flightPlane').val().trim();
		var flight = new app.Flight({
			to: to,
			from: from,
			plane_id: plane_id
		});
		var view = this;
		flight.save().done(function(){
			view.flights.fetch();
		});
	}
});