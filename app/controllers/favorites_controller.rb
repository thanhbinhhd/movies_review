# frozen_string_literal: true

# faverites controller
class FavoritesController < ApplicationController
  before_action :login_require, :page_setting

  def index
    movies = current_user.favorite_movies.page(@page).per(@per)
    render json: movies.map { |movie| movie_response(movie) }
  end

  def add_favorite
    movie = Movie.find_by(id: params[:id])
    if movie
      current_user.favorite_movies << movie
      render json: { message: 'Favarite added' }
    else
      render json: { message: 'Movie not found' }, status: :not_found
    end
  end

  private

  def movie_response(movie)
    {
      name: movie.name,
      description: movie.description,
      thumbnail: movie.thumbnail
    }
  end
end
