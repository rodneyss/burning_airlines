class CreateReservation < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :flight_id
      t.integer :row
      t.integer :column
      t.timestamps 
    end
  end
end
