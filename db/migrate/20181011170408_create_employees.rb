class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :birth_date
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :title

      t.timestamps
    end
  end
end
