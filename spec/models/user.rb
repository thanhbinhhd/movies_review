# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user, password: 'user_password') }
  describe 'valid_password?' do
    it 'password が nil 場合、 false を返すこと' do
      expect(user.valid_password?(nil)).to be false
    end

    it 'password が 空の場合、 false を返すこと' do
      expect(user.valid_password?('')).to be false
    end

    it 'password が 入力したパスワードと違い場合、 false を返すこと' do
      expect(user.valid_password?('unexpect_password')).to be false
    end

    it 'password が 入力したパスワードと同じ場合、 false を返すこと' do
      expect(user.valid_password?('user_password')).to be true
    end
  end
end
