

class SessionController < ApplicationController
  def create  
    user = User.find_by :name => params[:name]
        if user.present?
            session[:user_id] = user.id
            redirect_to app_path
        else
            flash[:notice] = "Invalid Login, please try again"
            redirect_to login_path
        end
  end

  def destroy
        session[:user_id]=nil
        redirect_to root_path
  end
end