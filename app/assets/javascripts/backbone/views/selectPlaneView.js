var app = app || {};

app.SelectPlaneView = Backbone.View.extend({
	el:'#flightPlane',
	initialize: function(){},
	render: function(){
		var selectPlaneTemplate = $('#selectPlane').html();
		var selectPlaneHTML = _.template(selectPlaneTemplate);
		this.$el.append(selectPlaneHTML(this.model.toJSON()));
	}
});