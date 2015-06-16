var app = app || {};
app.Flight = Backbone.Model.extend({
  urlRoot: '/app/flights',
  default:{
    to: "Pen Island",
    from: "Sydney",
    plane_id: null,
    date: null
  },
  initialize:function(){

  }
});