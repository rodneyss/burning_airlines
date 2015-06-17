var app = app || {}
app.PlanePgView = Backbone.View.extend({
  el: '#views',
  events:{
    'submit #createPlane': 'planeCreation',
  },
  render: function (){
    var nav = $('#adminNavTemplate').html();
    $('#navigation nav').html(nav);
    var planesPgHTML = $('#PlanePgTemplate').html()
    this.$el.html(planesPgHTML);
  },
  planeCreation: function (e) {

  e.preventDefault();
  // e.stopPropagation();
  var name = $('#planeName').val().trim()
  var seats = $('#planeSeats').val().trim()
  var plane = new app.Plane({
    name: name,
    seats: seats
  });
  var view = this;
  plane.save().done(function (data){
    app.planediagram = new app.PlaneSeatView({seats:data.seats});
    app.planediagram.render();
    });
  }	
});

//Pass back the plane object that just got created to GET the available seats. so we can make a grid out of it. 