var app = app || {};
app.SearchPgView = Backbone.View.extend({
  el:'#views', 
  events:{
    'submit #searchFlight': 'displayFlight',
  },
  initialize: function(options){

    this.flights= options.flights
  },
  render: function(){
    var flightsPgHTML = $('#flightsPgTemplate').html();
    this.$el.html(flightsPgHTML);

  },
  displayFlight: function(e){
    e.preventDefault();
    var to= $('#toLoc').val().trim();
    var from= $('#fromLoc').val().trim();
    var plane_id = $('#flightPlane').val().trim();

    var flightResults = _.where(app.Flights, {from: to, to: to} );


    flightResults.each(function(flight){
      var flightsListView = new app.FlightsListView({model:flight});
      flightsListView.render();
    }); 

  }

});