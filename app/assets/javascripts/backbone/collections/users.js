var app = app || {};

// Collection of our particular model.
app.Users = Backbone.Collection.extend({
  model: app.User
});