# frozen_string_literal: true

Rails.application.routes.draw do
  resources :movies, only: %i[index show]
  resources :favorites, only: [:index]
  post 'favorites/:id', to: 'favorites#add_favorite'
  post 'login', to: 'session#login'
  delete 'logout', to: 'session#logout'
  post 'is_login', to: 'session#logged_in?'
end
