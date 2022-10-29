# frozen_string_literal: true

class Movie < ApplicationRecord
  has_many :movie_reviews, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :favorite_users, through: :favorites, source: :user
end
