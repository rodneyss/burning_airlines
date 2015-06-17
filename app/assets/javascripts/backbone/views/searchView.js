var app = app || {};
app.SearchView = Backbone.View.extend({
  el:'#views', 
  events:{
    'submit #searchFlight': 'displayFlight',
  },
  initialize: function(options){

    
  },
  render: function(){
    var appHTML = $('#appTemplate').html();
    this.$el.html(appHTML);

  },
  displayFlight: function(e){
    e.preventDefault();
    var to= $('#toLoc').val().trim();
    var from= $('#fromLoc').val().trim();
    this.flightResults = app.appFlights.where({
      from:from,
      to:to
    })
  
    if(this.flightResults.length === 0){
          
          alert("no flights found");

    }else{
        _(this.flightResults).each(function(flight){
        var searchResult = new app.SearchResultView({model: flight});
        searchResult.render();

        });

    }
  },





});