var app = app || {};
app.appView = Backbone.View.extend({
	el:'#views', 
	initialize: function(){},
	render: function(){
		var appHTML = $('#appTemplate').html();
		this.$el.html(appHTML);

	}      
});

