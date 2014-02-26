module EventsHelper
  def zoom
    event = Event.find(params[:id])
    case 
      when event.distance < 0.4
        zoom = 16
      when event.distance < 0.6
        zoom = 15
      when event.distance < 1
        zoom = 14
      when event.distance < 1.5
        zoom = 13
      when event.distance < 3
        zoom = 12
      when event.distance < 6
        zoom = 11
      else
        zoom = 10
    end
    zoom
  end
end
