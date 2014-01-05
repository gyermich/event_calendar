require 'spec_helper'

describe Comment do
  let(:comment){Comment.new(body:"some txt", event_id:3, user_id:2)}

  it 'must have content' do
    comment.body = nil
    expect(comment).to be_invalid
  end
end
