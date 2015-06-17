class AppController < ApplicationController

  def index
  	@user_id = session[:user_id]
  	if request.xhr?
  		render :json => @user_id
  	end
  end

end
