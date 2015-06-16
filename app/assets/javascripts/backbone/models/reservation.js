var app = app || {};
app.reservations = Backbone.Model.extend({
  urlRoot: '/reservations',
  default:{
    user_id: null,
    flight_id: null,
    seat: null

  },
  initialize:function(){
  }
});