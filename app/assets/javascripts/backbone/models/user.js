var app = app || {};
app.User = Backbone.Model.extend({
  urlRoot: '/users',
  default:{
    name: "Joel Turnbull",
  },
  initialize:function(){
  }
});