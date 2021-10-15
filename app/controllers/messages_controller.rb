class MessagesController < ApplicationController
  # GET /message
  def index
    @message = Message.find(rand(1..5))
    render json: @message
    # respond_to do |format|
    #   format.json { render json: @message }
    #   format.html # index.html.erb
    #   format.xml { render xml: @message }
    # end
  end

  def show; end
end
