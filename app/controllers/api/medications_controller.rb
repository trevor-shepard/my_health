class Api::MedicationsController < ApplicationController
    def index
      @medications = current_user.medications 
    end
end
