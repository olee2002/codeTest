class Api::ChildrenController < ApplicationController
    def index
        @employee = Employee.find(params[:employee_id])
        @children = @employee.children.all
        render json: @children
    end

    def create
        @employee = Employee.find(params[:employee_id])
        @child = @employee.children.create(child_params)
    end

    def update
        @child = Child.find(params[:id])
        @child.update(child_params)
    end

    def destroy
        @child = Employee.destroy(params[:id])
        @employee = Employee.find(params[:employee_id])
        @children = @employee.children.all
        render json: @children
    end

    private
    def child_params
        params.require(:child).permit(:birth_date, :first_name, :last_name, :gender)
    end
end
