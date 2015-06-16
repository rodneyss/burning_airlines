var app = app || {};
app.FlightsListView = Backbone.View.extend({
	tagName: 'li',
	url:'app/planes',
	events:{
		'click': 'showReservations'
	},
	initialize: function(){

	},
	showReservations: function(){
		console.log("this is happening");
	},
	render: function(){
		var flightsListTemplate = $('#flightsListTemplate').html();
		var flightsListHTML = _.template(flightsListTemplate);
		this.$el.html(flightsListHTML(this.model.toJSON()));
		$('#flights').append(this.$el);
	}
});