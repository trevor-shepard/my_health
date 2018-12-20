class Api::ShiftsController < ApplicationController
    def index

    end

    # shows next available shift takes :id(provider), :start(date), :end(:date)
    def show
        start_date = DateTime.parse(params[:start])
        end_date = DateTime.parse(params[:end])

        

        @shift = Shift.find_next_available(params[:id], start_date, end_date)

        if @shift
            @slots = @shift.available_timeblocks
        else
            render json: ['this provider has no available appointments during this time'], status: 400 
        end
        
    end
    
end


