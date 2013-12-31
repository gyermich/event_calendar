class UserMailer < ActionMailer::Base
  default from: "noreply@adacalendar.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.event_notification.subject
  #
  def welcome_email(user)
    @user = user
    mail to: user.email, subject: "Welcome to Ada Event Calendar!"
  end

  def event_notification(user, event)
    @user = user
    @event = event
    mail to: user.email, subject: "Check Out This New Ada Event!"
  end
end
