# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    name { 'user name' }
    avatar { nil }
    encrypted_password { BCrypt::Password.create('password') }
  end
end
