# frozen_string_literal: true

# User model define
class User < ApplicationRecord
  has_many :movie_reviews, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :favorite_movies, through: :favorites, source: :movie

  def valid_password?(password)
    return false if password.blank?

    BCrypt::Password.new(encrypted_password) == password.to_s
  end

  def password=(new_password)
    @password = new_password
    self.encrypted_password = BCrypt::Password.create(@password)
  end
end
