var app = app || {};
app.SearchResultView = Backbone.View.extend({
  tagName: 'li',
  events:{
    'click': 'showReservations'
  },
  initialize: function(options){

    
  },

  showReservations: function(){
    console.log("need to go to: ", this.model.get('id') );
    app.router.navigate('flights/' + this.model.get('id'), true);
  },

  render: function(){
   
    var flightsTemplate = $('#flightsTemplate').html();
    var flightsListHTML = _.template(flightsTemplate);
   
    this.$el.html(flightsListHTML( this.model.toJSON() ) );
    $('#flights').append(this.$el);
  },

});