var app = app || {};
app.plane = Backbone.Model.extend({
  urlRoot: '/planes',
  default:{
   name: "death machine 01",
   row: 1,
   column: 10
  },
  initialize:function(){
  }
});