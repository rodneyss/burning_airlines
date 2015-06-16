var app = app || {};
app.flight = Backbone.Model.extend({
  urlRoot: '/flights',
  default:{
    to: "Pen Island",
    from: "Sydney",
    plane_id: null
  },
  initialize:function(){

  }
});