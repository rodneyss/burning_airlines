var app = app || {};

// Collection of our particular model.
app.Planes = Backbone.Collection.extend({
  url: '/app/planes',
  model: app.plane
});