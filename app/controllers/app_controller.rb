class AppController < ApplicationController

  def index
  	@user_id = session[:user_id]
  

  	if request.xhr?
  		render :json => @user_id
  	end

    if !@user_id
      redirect_to login_path
    end
  end


  def user_flights
    @reserves = Reservation.where :user_id => session[:user_id]

    @flights = []
    @reserves.each do | reserve |
      @flights << reserve.flight_id
    end

    
    if request.xhr?
      render :json => @flights
    end

  end

end
