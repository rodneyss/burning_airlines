var app = app || {};
app.flightsListView = Backbone.View.extend({
	$el = '#views', 
	initialize: function(){},
	render: function(){
		var flightsListHTML = $('#flightsListTemplate').html();
		this.$el.html(flightsListHTML);
	}
});