# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Sessions', type: :request do
  let!(:user) { create(:user, name: 'username', password: 'user_password') }
  describe 'POST /login' do
    it 'returns login success' do
      login_params = { user: { username: 'username', password: 'user_password' } }
      post '/login', params: login_params
      expect(response).to have_http_status(200)
    end

    it 'returns login error' do
      login_params = { user: { username: 'not_found_username', password: 'user_password' } }
      post '/login', params: login_params
      expect(response).to have_http_status(400)
    end
  end

  describe 'POST /logout' do
    it 'returns login success' do
      post '/logout'
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST /is_login' do
    it 'returns error' do
      post '/is_login'
      expect(response).to have_http_status(403)
    end

    it 'returns logged in user info' do
      allow_any_instance_of(ActionDispatch::Request).to receive(:session).and_return({ user_id: user.id })
      post '/is_login'
      expect(response).to have_http_status(200)
      result = JSON.parse(response.body)
      expect(result).to eq({ 'user' => { 'username' => user.name } })
    end
  end
end
