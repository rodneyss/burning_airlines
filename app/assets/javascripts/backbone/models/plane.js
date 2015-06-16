var app = app || {};
app.plane = Backbone.Model.extend({
  urlRoot: '/app/planes',
  default:{
   name: "death machine 01",
   seats: 20
  },
  initialize:function(){
  }
});