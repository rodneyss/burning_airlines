var app = app || {};
app.Reservation = Backbone.Model.extend({
  urlRoot: function(){
  	return '/app/flights/'+this.get('flight_id')+'/reservations'
  },
  default:{
    user_id: null,
    flight_id: null,
	seat: null

  },
  initialize:function(){

  }
});