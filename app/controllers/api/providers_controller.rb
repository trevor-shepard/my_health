class Api::ProvidersController < ApplicationController
    def index
        @providers = current_user.providers
      end
  
    def show
        @provier = Provier.find(params[:id])
    end
end
