var app = app || {};
app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',
  default:{
    user_id: null,
    flight_id: null,
	seat: null

  },
  initialize:function(){
  }
});