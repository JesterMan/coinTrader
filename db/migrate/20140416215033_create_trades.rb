class CreateTrades < ActiveRecord::Migration
  def change
    create_table :trades do |t|
      t.string :action_type
      t.decimal :valuation
      t.decimal :amount
      t.datetime :expiration
      t.boolean :active
      t.datetime :executed
      t.boolean :suspended
      t.string :user_id

      t.timestamps
    end
  end
end
