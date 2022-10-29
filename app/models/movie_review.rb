# frozen_string_literal: true

class MovieReview < ApplicationRecord
  belongs_to :user
  belongs_to :movie
end
