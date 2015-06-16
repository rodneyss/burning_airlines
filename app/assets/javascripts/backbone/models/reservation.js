var app = app || {};
app.reservations = Backbone.Model.extend({
  urlRoot: '/reservations',
  default:{
    user_id: nil,
    flight_id: nil,
    row: nil,
    column: nil

  },
  initialize:function(){
  }
});