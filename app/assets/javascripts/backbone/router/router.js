// var app = app || {};

// // Router is similar to routes.rb in Rails but with code actions as well.
// app.AppRouter = Backbone.Router.extend({
//   routes: {
//     '': 'index',
//     'posts/:id': 'viewPost'
//   },

//   // GET /
//   index: function () {
//     var appView = new app.AppView({collection: app.blogPosts});
//     appView.render();
//   },

//   // GET /posts/:id
//   viewPost: function (id) {
//     var post = app.blogPosts.get(id);
//     var postView = new PostView({model: post});
//     postView.render();
//   }
// });

var app = app || {};

// Router is similar to routes.rb in Rails but with code actions as well.
app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'flights/:id': 'viewFlight',
    'planes/:id': 'viewPlane',
  },

  viewPlane: function (id) {
    var plane = app.planes.get(id);
    var planeView = new PlaneView({model: plane})
    viewPlane.render()
  },

  viewFlight: function (id) {
    app.reservations = new app.Reservations({flight_id: id});
    app.reservations.fetch();

    
    app.flight = app.appFlights.get(id);
    app.flightView = new app.FlightView({model: app.flight, collection: app.reservations});
    app.reservations.startPolling(5);
    console.log("Routing now");
    app.flightView.render();
  },

  home: function () {
    // var appView = new app.AppView({})
    // appView.render()
    var searchView = new app.SearchView({
      flights: app.appFlights,
      planes: app.appPlanes
    });
    searchView.render();
  }

});