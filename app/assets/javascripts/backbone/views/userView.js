
var app = app || {};
app.UserView = Backbone.View.extend({
  el:'#views', 

  initialize: function(options){
    
  },
  render: function(){
    var appHTML = $('#userTemplate').html();
    this.$el.html(appHTML);
    this.displayFlight();

  },
  displayFlight: function(){
    var flightResults = [];

    $.get('/user_flights',function(){

    }).done( function(userFlights){
        console.log(userFlights);


        for(var i = 0 ; i <userFlights.length; i++){
          var flight = app.appFlights.where({id: userFlights[i]});
            flightResults.push(flight);
        }

        flightResults = _.flatten(flightResults);
        flightResults = _.unique(flightResults); 
        console.log(flightResults);
        if(flightResults.length === 0){

          // alert("no flights found");

        }else{
          _(flightResults).each(function(flight){
          $('#flights').show();
          var searchResult = new app.SearchResultView({model: flight});
          searchResult.render();

          });

        }

    });

  }

});

