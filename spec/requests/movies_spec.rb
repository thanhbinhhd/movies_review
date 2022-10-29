# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Movies', type: :request do
  let!(:movie1) { create(:movie, name: 'movie 1') }
  let!(:movie2) { create(:movie, name: 'movie 2') }
  let!(:orther_movie) { create(:movie, name: 'name as movie 2') }

  describe 'GET /movies' do
    it 'returns movies list' do
      get '/movies'
      expect(response).to have_http_status(200)
      result = JSON.parse(response.body)
      expect(result.size).to eq 3
    end

    it 'returns movies list have name as search key' do
      get '/movies?search=movie 2'
      expect(response).to have_http_status(200)
      result = JSON.parse(response.body)
      expect(result.size).to eq 2
    end
  end

  describe 'GET /movies/:id' do
    it 'returns movie detail' do
      get "/movies/#{movie1.id}"
      expect(response).to have_http_status(200)
      result = JSON.parse(response.body)
      expect_result = {
        'name' => movie1.name,
        'description' => movie1.description,
        'thumbnail' => movie1.thumbnail,
        'director' => movie1.director,
        'actor' => movie1.director,
        'year' => movie1.year
      }
      expect(result).to eq expect_result
    end

    it 'returns movie detail' do
      get '/movies/10000'
      expect(response).to have_http_status(404)
    end
  end
end
