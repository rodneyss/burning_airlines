var app = app || {};
app.user = Backbone.Model.extend({
  urlRoot: '/users',
  default:{
    name: "Joel Turnbull",
  },
  initialize:function(){
  }
});