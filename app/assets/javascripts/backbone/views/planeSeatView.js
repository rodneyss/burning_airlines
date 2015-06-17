var app = app || {}

app.PlaneSeatView = Backbone.View.extend({
  el: '#seatsgrid',
  initialize: function (option) {
    this.seats = option.seats;
    console.log(option.seats);
  },
  render: function () {
    var seats = (this.seats)
    for (var i = 1; i <= seats; i++) {
      $('#seatsgrid').append('<div class="seat">'+i+'</div>');
    };
  }
});