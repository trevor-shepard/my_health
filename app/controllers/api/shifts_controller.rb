class Api::ShiftsController < ApplicationController
    def index

        start_date = DateTime.parse(params[:start])
        end_date = DateTime.parse(params[:end])
        
        @shifts = Shift.find_shifts_between_range(params[:id], start_date, end_date)

        if @shifts
            
            render :index
        else
            render json: ['this provider has no available appointments during this time'], status: 400             
        end
    end


    
end


