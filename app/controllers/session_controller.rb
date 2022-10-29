# frozen_string_literal: true

# authentication controller
class SessionController < ApplicationController
  def login
    @user = User.find_by(name: session_params[:username])

    if @user&.valid_password?(session_params[:password])
      session[:user_id] = @user.id
      render json: {
        user: user_response(@user)
      }
    else
      render json: {
        errors: 'Login failure'
      }, status: :bad_request
    end
  end

  def logout
    session.clear

    render json: {
      message: 'Logout'
    }
  end

  def logged_in?
    if current_user
      render json: {
        user: user_response(current_user)
      }
    else
      render json: {
        message: 'Please login'
      }, status: :forbidden
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end

  def user_response(user)
    {
      username: user.name
    }
  end
end
