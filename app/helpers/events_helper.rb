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
      when event.distance < 4
        zoom = 12
      when event.distance < 8
        zoom = 11
      when event.distance < 12
        zoom = 10
      when event.distance < 50
        zoom 9
      when event.distance < 100
        zoom = 8
      when event.distance < 120
        zoom = 7
      when event.distance < 150
        zoom = 6
      else
        zoom = 5
    end
    zoom
  end
end
