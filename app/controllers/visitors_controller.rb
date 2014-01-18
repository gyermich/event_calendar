class VisitorsController < ApplicationController
  before_action :update_pageviews_count, only: [:index]

  def index
    @visitors = Visitor.all
  end
end
