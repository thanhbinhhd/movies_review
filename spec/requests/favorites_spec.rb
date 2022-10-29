# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Favories', type: :request do
  let!(:user) { create(:user) }
  let!(:movie1) { create(:movie, name: 'movie 1') }
  let!(:movie2) { create(:movie, name: 'movie 2') }
  let!(:favorite) { create(:favorite, user_id: user.id, movie_id: movie1.id) }

  before do
    allow_any_instance_of(ActionDispatch::Request).to receive(:session).and_return({ user_id: user.id })
  end

  describe 'GET /favorites' do
    it 'returns favorited movies list' do
      get '/favorites'
      expect(response).to have_http_status(200)
      result = JSON.parse(response.body)
      expect(result.size).to eq 1
      expect_result = {
        'name' => movie1.name,
        'description' => movie1.description,
        'thumbnail' => movie1.thumbnail
      }
      expect(result[0]).to eq expect_result
    end
  end

  describe 'POST /favorites/:id' do
    it 'returns movie detail' do
      post "/favorites/#{movie1.id}"
      expect(response).to have_http_status(200)
      expect(user.favorites.first.movie).to eq movie1
    end

    it 'returns 404 error' do
      post '/favorites/10000'
      expect(response).to have_http_status(404)
    end
  end
end
