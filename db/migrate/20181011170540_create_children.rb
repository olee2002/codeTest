class CreateChildren < ActiveRecord::Migration[5.1]
  def change
    create_table :children do |t|
      t.string :birth_date
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.references :employee, foreign_key: true

      t.timestamps
    end
  end
end
