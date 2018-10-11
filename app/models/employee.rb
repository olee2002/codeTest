class Employee < ApplicationRecord
    has_many :children, dependent: :delete_all
end
