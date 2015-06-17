class App::ReservationsController < ApplicationController
    def index
      @flight = Flight.find params[:flight_id]
      @reservations = @flight.reservations
      respond_to do |format|
      	format.html {}
      	format.json {render :json => @reservations}
      end
    end
    
  	def create
     reservation = Reservation.create reservation_params
     render :json => reservation
  	end

  	private
  	def reservation_params
  		params.require(:reservation).permit(:flight_id, :user_id, :seat)
  	end
end