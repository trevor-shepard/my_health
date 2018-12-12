class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_cred(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            render "api/users/show"
        else
            render json: ['Invalid username/password'], status: 401
        end
    end

    def destroy
      @user = current_user
      if @user
        logout(user)
        render "api/users/show"
      else
        render json: ['No current user signed in'], status: 404
      end
    end
end
