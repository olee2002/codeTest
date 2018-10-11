class Api::EmployeesController < ApplicationController

    def index
        @employees = Employee.all
        render json: @employees
    end

    def show
     @employee = Employee.find(params[:id])
     render json: @employee
    end

    def create
        @employee = Employee.create(employee_params)
    end

    def update
        @employee = Employee.find(params[:id])
        @employee.update(employee_params)
    end

    def destroy
        @employee = Employee.destroy(params[:id])
        @employees = Employee.all
        render json: @employees
    end

    private
    def employee_params
        params.require(:employee).permit(:birth_date, :first_name, :last_name, :gender, :title)
    end
end
