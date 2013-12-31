class EventsController < ApplicationController
  before_action :set_event, only:[:show, :edit, :destroy, :join, :not_going]
  before_filter :authorize, only:[:new, :create, :join]

  def new
    @event = Event.new
  end

  def show
  end

  def index
    @events = Event.all
  end

  def create
    @event = Event.new(event_params)
    @event[:user_id] = session[:user_id]
    if @event.save
      User.all.each do |user|
        UserMailer.event_notification(user, @event).deliver
      end
      redirect_to event_path(@event)
    else
      render :new
    end
  end

  def edit
  end

  def destroy
  end

  def calendar_view
    @events = Event.all
  end

  def join
    @events_user = EventsUser.create(:event_id => @event.id,:user_id => session[:user_id])
    redirect_to event_path(@event)
  end

  def not_going
    @events_user = EventsUser.find_by(user_id: current_user.id, event_id:@event.id)
    @events_user.destroy
    redirect_to event_path(@event)
  end

  private
  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:name, :url, :date)
  end
end
