class Api::AppointmentsController < ApplicationController
    def show
      @appointment = Appointment.find(params[:id])
    end

    def index
      @appointments = current_user.appointments

    end

    def create

        @appointment = Appointment.create(appointment_params)

        if @appointment
            render :show
        else
            response json: @appointment.errors.full_messages
        end
    end

    def update
        @appointment = Appointment.find(params[:id])

        if @appointment && @appointment.update_attributes(appointment_params)
          render :show
        else
          response json: @appointment.errors.full_messages
        end
    end

    def destroy
        @appointment = Appointment.find(params[:id])

        if @appointment
            @appointment.destroy
            render :show
        else
            render josn: ['not found']
        end
    end

    private

    def appointment_params
        params.require(:appointment).permit(:provider_id, :user_id, :start, :end, :reason, :notes)
    end
end
