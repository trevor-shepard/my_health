class Api::ShiftsController < ApplicationController
    def index

    end

    # shows next available shift
    def show
        start_date = DateTime.new(params[:start])
        end_date = DateTime.new(params[:end])
        @shift = Shift.find_next_available(params[:id], start_date, end_date)
        render :json, ['this provider has no available appointments during this time'], status: 400 unless @shift
        @slots = @shift.available_timeblocks
    end
    
end
