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
    'flights/create': "createFlight",
    'planes/create': "createPlane",
    'flights/:id': 'viewFlight',
    'planes/:id': 'viewPlane',
    'user': 'viewUser'
  },

  createFlight: function () {
    // Create an instance of the view - pass in the collection
    // And then render it
    var createFlight = new app.FlightPgView({
      flights: app.appFlights,
      planes: app.appPlanes
    })
    createFlight.render()
  },
  createPlane: function() {
    console.log('create plane is running ')
    var createPlane = new app.PlanePgView
    createPlane.render();
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
    var searchView = new app.SearchView({
      flights: app.appFlights,
      planes: app.appPlanes
    });
    searchView.render();
  },

  viewUser: function () {
    var user = new app.UserView({model: user});
    user.render();
  }



});