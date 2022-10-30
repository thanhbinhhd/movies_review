# frozen_string_literal: true

# movie controller
class MoviesController < ApplicationController
  before_action :page_setting

  def index
    movies = if params[:search]
               Movie.where('name LIKE ?', "%#{Movie.sanitize_sql_like(params[:search])}%")
             else
               Movie.order(:name).page(@page).per(@per)
             end

    render json: movies.map { |movie| movie_response(movie) }
  end

  def show
    movie = Movie.find_by(id: params[:id])
    if movie
      render json: movie_detail_response(movie)
    else
      render json: {
        errors: 'movie not found'
      }, status: :not_found
    end
  end

  private

  def movie_response(movie)
    {
      id: movie.id,
      name: movie.name,
      description: movie.description,
      thumbnail: movie.thumbnail
    }
  end

  def movie_detail_response(movie)
    {
      name: movie.name,
      description: movie.description,
      thumbnail: movie.thumbnail,
      director: movie.director,
      actor: movie.director,
      year: movie.year,
      reviews: movie.movie_reviews.pluck(:content)
    }
  end
end
