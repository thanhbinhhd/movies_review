# frozen_string_literal: true

# common controller
class ApplicationController < ActionController::API
  include ActionController::Cookies

  def login_require
    return if current_user

    render json: {
      errors: ['Please login']
    }, status: :forbidden
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def set_user
    @user = User.find_by(id: session[:user_id])
  end

  def page_setting
    @page = params[:page] || 1
    @per = params[:per] || 10
  end
end
