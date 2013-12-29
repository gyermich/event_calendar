class EventsController < ApplicationController
  before_action :set_event, only:[:show, :edit, :destroy]
  before_filter :authorize, only:[:new, :create]

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

  private
  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:name, :url, :date)
  end
end
