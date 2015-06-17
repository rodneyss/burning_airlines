var app = app || {};
app.FlightView=Backbone.View.extend({
	el: '#views',
	render: function(){
		var nav = $('#adminNavTemplate').html();
		$('#navigation nav').html(nav);
		var flightTemplate = $('#flightTemplate').html();
		var flightHTML = _.template(flightTemplate);
		var view = this;

		// Checking for the flight id of this view
		// console.log(this.model.get('id'));
		console.log(this.model.get('id'));
		app.flightView.reservations = new app.Reservations({flight_id: this.model.get('id')});
		app.flightView.reservations.fetch();
		//CHECKING FOR THE RESERVATION MODEL OF THIS VIEW 
		// console.log(app.flightView.reservations.models);

		$.get('/app',function(){

		}).done(function(data){
			var userID = data;
			console.log(data);
			view.$el.html(flightHTML(view.model.toJSON()));
			var plane = view.plane;
			var seats = view.plane.get('seats');
			var takenseats = []
			app.flightView.reservations.each(function(reservation){
				takenseats.push(reservation.get('seat'));
			});
			var takenseats = _.uniq(takenseats);
			console.log(takenseats);
			for(var i=1; i<=seats; i++){
				var seatClass = "seats";
				view.$el.append('<div class="'+seatClass+'"id="'+i+'">'+i+'</div>');
			}
			for(var i=0; i<takenseats.length; i++){

				$('#'+i).addClass('taken');
			}
			$('body').on('click','.seats',function(e){
				var seat=parseInt($(e.currentTarget).attr('id'));
					if($(this).hasClass('taken')!==true){
						$(seat).toggleClass('selected');
						view.reserveSeat({
							seat_id: seat,
							flight_id: view.model.get('id'),
							user_id: userID });
					}
			});
		});
		

	},

	reserveSeat: function(option){
		//CHECK ALL THE OPTIONS ARE PASSING THROUGH CORRECTLY
		// console.log(option.flight_id);
		// console.log(option.seat_id);
		// console.log(option.user_id);
		var reservation = new app.Reservation({
			flight_id: option.flight_id,
			seat: option.seat_id,
			user_id: option.user_id
		});
		reservation.save().done(function(){
			console.log("save complete");
			app.flightView.reservations.fetch().done(function(data){
				console.log(app.flightView.reservations);
			});
		})
	},
	initialize: function(options){
		this.plane = app.appPlanes.get(this.model.get('plane_id'));

	},
});