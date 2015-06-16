var app = app || {};

// Collection of our particular model.
app.Planes = Backbone.Collection.extend({
  model: app.plane
});