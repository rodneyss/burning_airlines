var app = app || {};
app.FlightView=Backbone.View.extend({
	el: '#views',
	render: function(){
		var nav = $('#adminNavTemplate').html();
		$('#navigation nav').html(nav);
		var flightTemplate = $('#flightTemplate').html();
		var flightHTML = _.template(flightTemplate);
		var userId = null;
		var view = this;
		console.log(this.model.get('id'));
		this.reservations = new app.Reservations({flight_id: this.model.get('id')});
		console.log(this.reservations);
		$.get('/app',function(){

		}).done(function(data){
			var userID = data;
			console.log(data);
			view.$el.html(flightHTML(view.model.toJSON()));
			var plane = view.plane;
			var seats = view.plane.get('seats');
			for(var i=1; i<=seats; i++){
				view.$el.append('<div class="seats"id="'+i+'">'+i+'</div>');
			}

			
			$('body').on('click','.seats',function(e){
				var seat=parseInt($(e.currentTarget).attr('id'));
				$(seat).toggleClass('selected');
				view.reserveSeat({
					seat_id: seat,
					flight_id: view.model.get('id'),
					user_id: userID });
			});
		});
		

	},

	reserveSeat: function(option){
		console.log(option.flight_id);
		console.log(option.seat_id);
		console.log(option.user_id);
		var reservation = new app.Reservation({
			flight_id: option.flight_id,
			seat: option.seat_id,
			user_id: option.user_id
		});
		reservation.save().done(function(){
			console.log("save complete");
			app.flightView.reservations.fetch({
				data: {
					id: 3
				}
			});
		})
	},
	initialize: function(options){
		this.plane = app.appPlanes.get(this.model.get('plane_id'));

	},
});