# frozen_string_literal: true

FactoryBot.define do
  factory :favorite do
    user_id { 1 }
    movie_id { 1 }
  end
end
