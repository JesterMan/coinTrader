class UsersController < ApplicationController

	respond_to :html, :json

	def new
		@user = User.new
	end

	def create
		@user = User.new(params[:user])
		if @user.save
			flash[:notice] = 'Your account has been created.'
		end
		respond_with @user, :location => '/default'
	end

end
