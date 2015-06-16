var app = app || {};

// Collection of our particular model.
app.Reservations = Backbone.Collection.extend({
  model: app.Reservation
});