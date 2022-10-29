# frozen_string_literal: true

FactoryBot.define do
  factory :movie do
    name { 'user name' }
    description { ' movie description' }
    thumbnail { 'movie_thumbnail.png' }
    director { 'movie director' }
    actor { 'actor1, actor2' }
    year { 2022 }
  end
end
