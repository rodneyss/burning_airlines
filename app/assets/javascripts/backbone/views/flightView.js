var app = app || {};
app.FlightView=Backbone.View.extend({
	el: '#views',
	render: function(){
		var flightTemplate = $('#flightTemplate').html();
		var flightHTML = _.template(flightTemplate);
		
		
		this.$el.html(flightHTML(this.model.toJSON()));
		var plane = this.plane;
		var seats = this.plane.get('seats');
		for(var i=1; i<=seats; i++){
			this.$el.append('<div class="seats"id="'+i+'">'+i+'</div>');
		}
		var view = this;
		$('body').on('click','.seats',view.getSeat);
	},
	getSeat: function(e){
		var seat=$(e.currentTarget).attr('id');
		$(seat).toggleClass('selected');
	},
	initialize: function(options){
		this.plane = app.appPlanes.get(this.model.get('plane_id'));
	},
});