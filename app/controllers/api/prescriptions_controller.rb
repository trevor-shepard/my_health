class Api::PrescriptionsController < ApplicationController
    def index
        @prescriptions = current_user.prescriptions
    end

    def update
        @prescription = Prescription.find(params[:id])
        @prescription.refills -= 1
        @prescription.request_pending = true
        @prescription.save
        render :show
    end
end
