# frozen_string_literal: true

# Movies table migration
class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name, null: false
      t.string :thumbnail, null: false
      t.string :director, null: false
      t.string :actor, null: false
      t.integer :year, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
