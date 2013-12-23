class EventsController < ApplicationController
  before_action :set_product, only[:show, :edit, :destroy, :show]

  def new
    @event = Event.new
  end

  def show
  end

  def index
    @event = Event.all
  end

  def create
    @event = Event.new(event_params)
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

  private
  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:events).permit(:name, :url, :date)
  end
end
