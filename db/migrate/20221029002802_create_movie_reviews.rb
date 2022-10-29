# frozen_string_literal: true

# Movie reviews table migration
class CreateMovieReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :movie_reviews do |t|
      t.text :content, null: false
      t.references :user, null: false, foreign_key: true
      t.references :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
