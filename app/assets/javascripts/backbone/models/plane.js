var app = app || {};
app.Plane = Backbone.Model.extend({
  urlRoot: '/app/planes',
  default:{
   name: "death machine 01",
   seats: 20
  }
});