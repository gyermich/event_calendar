require 'spec_helper'

describe EventsController do
  
  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response.status).to eq(200)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end

    it "loads all of the events into @events" do
      event1, event2 = Event.create!(name:"Birthday", description:"some txt", user_id:1, date:'2014-01-08T19:00'), 
                       Event.create!(name:"OneMoreBirthday", description:"some txt", user_id:1, date:'2014-02-08T19:00')
      get :index
      expect(assigns(:events)).to match_array([event1, event2])
    end
  end
end
