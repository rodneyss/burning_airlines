var app = app || {};
app.FlightView=Backbone.View.extend({
	el: '#views',
	events: {
		"click .seat": "test"
	},
	test: function () {
		console.log("WHAT THE FUCJ")
	},
	render: function(){
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

		$.get('/app').done(function(data){
		
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
				$('#flightSeats').append('<div class="'+seatClass+'"id="'+i+'">'+i+'</div>');
			}
			for(var i=0; i<takenseats.length; i++){

				$('#'+takenseats[i]).addClass('taken');
			}
			$('body').on('click','.seats',function(e){
				// e.stopPropagation();
				e.stopImmediatePropagation();
				console.log("CLIKEC")
				var seat=parseInt($(e.currentTarget).attr('id'));
					if($(this).hasClass('taken')!==true){
						console.log("This space is not taken", seat);
						$('#'+ seat).toggleClass('selected');
						// view.reserveSeat({
						// 	seat_id: seat,
						// 	flight_id: view.model.get('id'),
						// 	user_id: userID });
					}
			});
			$('body').on('click','#reserveSeat',function(e){
				e.stopPropagation();
				e.stopImmediatePropagation();
				var seat_id = parseInt($(".selected").attr('id'));
				console.log(seat_id);
				view.reserveSeat({
					seat_id: seat_id,
					flight_id: view.model.get('id'),
					user_id: userID
				});
			});
		});
	},

	reserveSeat: function(option){
		//CHECK ALL THE OPTIONS ARE PASSING THROUGH CORRECTLY
		// console.log(option.flight_id);
		// console.log(option.seat_id);
		// console.log(option.user_id);
		this.flight_id = option.flight_id;
		var view = this;
		var reservation = new app.Reservation({
			flight_id: option.flight_id,
			seat: option.seat_id,
			user_id: option.user_id
		});
		reservation.save().done(function(){
			console.log("save complete");
			app.flightView.reservations.fetch().done(function(){
				var flight = app.appFlights.get(view.flight_id);
				var flightViewRef = new app.FlightView({model:flight});
				$(".seats").off("click");
				flightViewRef.render();
			});

		})
	},
	initialize: function(options){
		this.plane = app.appPlanes.get(this.model.get('plane_id'));
	},
});