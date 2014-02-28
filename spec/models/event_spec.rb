require 'spec_helper'

describe Event do

  describe 'validations' do
    let(:event){Event.new(name:"Birthday", description:"some txt", user_id:1, date:'2014-01-08T19:00')}

    it "must have a name" do
      event.name = nil
      expect(event).to be_invalid
    end

    it "must have a date" do
      event.date = nil
      expect(event).to be_invalid
    end

    it "must have a description" do
      event.description = nil
      expect(event).to be_invalid
    end
  end

  context 'with address' do

    describe 'before saving' do
    end

  end
end
