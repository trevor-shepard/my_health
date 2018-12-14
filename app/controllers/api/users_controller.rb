class Api::UsersController < ApplicationController
    before_action :require_login, only: [:show]
    def create
      @user = User.new(userparams)

      if @user.save
        login(@user)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 400
      end
    end


    def show
      @user = current_user
    end

    private
    def userparams
      params.require(:user).permit(:username, :password, :fname, :lname, :dob)
    end
end
