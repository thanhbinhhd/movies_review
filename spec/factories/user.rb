# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    name { 'user name' }
    avatar { nil }
    password { 'password' }
  end
end
