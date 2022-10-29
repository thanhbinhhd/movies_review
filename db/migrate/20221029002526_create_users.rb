# frozen_string_literal: true

# factory for User model
class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.text :encrypted_password, null: false
      t.string :avatar, null: true

      t.timestamps
    end
  end
end
