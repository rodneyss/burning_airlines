var app = app || {};

// Collection of our particular model.
app.Flights = Backbone.Collection.extend({
  model: app.Flight
});