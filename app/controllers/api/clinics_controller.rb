class Api::ClinicsController < ApplicationController
    def index
      @clinics = current_user.clinics
    end
end
