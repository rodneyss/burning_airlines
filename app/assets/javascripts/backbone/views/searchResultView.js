var app = app || {};
app.SearchResultView = Backbone.View.extend({
  tagName: 'li',
  events:{
    'click': 'showReservations'
  },
  initialize: function(options){
    flight = options
    console.log("inside SearchResultView", options);
  },
  showReservations: function(){
    console.log("this is happening");
  },
  render: function(){
    console.log("trying to render shit", this.model);
    var flightsTemplate = $('#flightsTemplate').html();
    var flightsListHTML = _.template(flightsTemplate);
    console.log(this.model.toJSON() );
    this.$el.html(flightsListHTML( this.model.toJSON() ) );
    $('#flights').append(this.$el);
  }
});