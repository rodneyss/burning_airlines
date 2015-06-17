var app = app || {};
app.SearchView = Backbone.View.extend({
  el:'#views', 
  events:{
    'submit #searchFlight': 'displayFlight',
  },
  initialize: function(options){
    console.log( options );

    this.flights = options.flights;
    this.planes = options.planes;
    
  },

  render: function(){
    console.log( this );
    var nav = $('#adminNavTemplate').html()
    $('#navigation nav').html(nav)
    var appHTML = $('#appTemplate').html();
    this.$el.html(appHTML);
  },
  displayFlight: function(e){
    e.preventDefault();
    $('#flights').hide();
    $('#flights tr:not(:first-child) ').remove();
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
        $('#flights').show();
        var searchResult = new app.SearchResultView({model: flight});
        searchResult.render();

        });

    }
  },





});