class EventsUsersController < ApplicationController

  before_action :set_events_user, only: [:show, :edit, :update, :destroy]

  def new
  end

  def create
  end

  private

   def events_user_params
     params.require(:events_user).permit(:user_id, :event_id)
  end

  def set_events_user
    @events_user = EventsUser.find(params[:id])
  end
end
