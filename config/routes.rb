Calendar::Application.routes.draw do

  get "log_in"  => "sessions#new",     :as => "login"
  get "log_out" => "sessions#destroy", :as => "logout"
  get "sign_up" => "users#new",        :as => "signup"
  get "/stats"  => "visitors#index",   :as => "stats"

  resources :events do
    resources :comments
  end

  root 'events#index'
  resources :sessions
  resources :users
  resources :events
  resources :events_users
  resources :comments
  resources :visitors

  post '/events/:id/join' => "events#join", as: :join
  delete '/events/:id/not_going' => "events#not_going", as: :not_going
end
