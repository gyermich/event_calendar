class CommentsController < ApplicationController
  def create
    @event   = Event.find_by_id(params[:event_id])
    @comment = @event.comments.create(comment_params)
    redirect_to event_path(@event)
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :event_id)
  end
end
