var app = app || {};
app.FlightsListView = Backbone.View.extend({
	el: 'li',
	events:{
		'click': showReservations
	},
	initialize: function(){

	},
	render: function(){
		var flightsListTemplate = $('#flightsListHTML').html();
		var flightsListHTML = _.template(flightsListTemplate);
		this.$el.html(flightsListHTML(this.model.toJSON()));
		$('#posts').append(this.$el);
	}
});