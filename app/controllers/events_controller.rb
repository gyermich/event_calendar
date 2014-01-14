class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :destroy, :join, :not_going, :update]
  before_filter :authorize, only: [:new, :create, :join, :edit, :destroy]

  def new
    @event = Event.new
  end

  def show
  end

  def edit
  end

  def index
    raise
    @events = Event.all
  end

  def create
    @event           = Event.new(event_params)
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

  def update
    if @event.update(event_params)
      redirect_to event_path(@event)
    else
      render :edit
    end
  end

  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to root_url }
    end
  end

  def calendar_view
    @events = Event.all
  end

  def join
    @events_user = EventsUser.create(event_id: @event.id, user_id: session[:user_id])
    redirect_to event_path(@event)
  end

  def not_going
    @events_user = EventsUser.find_by(user_id: current_user.id, event_id: @event.id)
    @events_user.destroy
    redirect_to event_path(@event)
  end

  private
  
  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:name, :description, :date)
  end
end
