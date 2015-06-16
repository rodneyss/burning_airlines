class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.text :to
      t.text :from
      t.integer :plane_id
      t.date :date

      t.timestamps null: false
    end
  end
end
