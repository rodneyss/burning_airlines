# == Route Map
#
#                            Prefix Verb   URI Pattern                                                              Controller#Action
#     app_plane_flight_reservations GET    /app/planes/:plane_id/flights/:flight_id/reservations(.:format)          app/reservations#index
#                                   POST   /app/planes/:plane_id/flights/:flight_id/reservations(.:format)          app/reservations#create
#  new_app_plane_flight_reservation GET    /app/planes/:plane_id/flights/:flight_id/reservations/new(.:format)      app/reservations#new
# edit_app_plane_flight_reservation GET    /app/planes/:plane_id/flights/:flight_id/reservations/:id/edit(.:format) app/reservations#edit
#      app_plane_flight_reservation GET    /app/planes/:plane_id/flights/:flight_id/reservations/:id(.:format)      app/reservations#show
#                                   PATCH  /app/planes/:plane_id/flights/:flight_id/reservations/:id(.:format)      app/reservations#update
#                                   PUT    /app/planes/:plane_id/flights/:flight_id/reservations/:id(.:format)      app/reservations#update
#                                   DELETE /app/planes/:plane_id/flights/:flight_id/reservations/:id(.:format)      app/reservations#destroy
#                 app_plane_flights GET    /app/planes/:plane_id/flights(.:format)                                  app/flights#index
#                                   POST   /app/planes/:plane_id/flights(.:format)                                  app/flights#create
#              new_app_plane_flight GET    /app/planes/:plane_id/flights/new(.:format)                              app/flights#new
#             edit_app_plane_flight GET    /app/planes/:plane_id/flights/:id/edit(.:format)                         app/flights#edit
#                  app_plane_flight GET    /app/planes/:plane_id/flights/:id(.:format)                              app/flights#show
#                                   PATCH  /app/planes/:plane_id/flights/:id(.:format)                              app/flights#update
#                                   PUT    /app/planes/:plane_id/flights/:id(.:format)                              app/flights#update
#                                   DELETE /app/planes/:plane_id/flights/:id(.:format)                              app/flights#destroy
#                        app_planes GET    /app/planes(.:format)                                                    app/planes#index
#                                   POST   /app/planes(.:format)                                                    app/planes#create
#                     new_app_plane GET    /app/planes/new(.:format)                                                app/planes#new
#                    edit_app_plane GET    /app/planes/:id/edit(.:format)                                           app/planes#edit
#                         app_plane GET    /app/planes/:id(.:format)                                                app/planes#show
#                                   PATCH  /app/planes/:id(.:format)                                                app/planes#update
#                                   PUT    /app/planes/:id(.:format)                                                app/planes#update
#                                   DELETE /app/planes/:id(.:format)                                                app/planes#destroy
#                             users GET    /users(.:format)                                                         users#index
#                                   POST   /users(.:format)                                                         users#create
#                          new_user GET    /users/new(.:format)                                                     users#new
#                         edit_user GET    /users/:id/edit(.:format)                                                users#edit
#                              user GET    /users/:id(.:format)                                                     users#show
#                                   PATCH  /users/:id(.:format)                                                     users#update
#                                   PUT    /users/:id(.:format)                                                     users#update
#                                   DELETE /users/:id(.:format)                                                     users#destroy
#                              root GET    /                                                                        session#new
#                             login GET    /login(.:format)                                                         session#new
#                                   POST   /login(.:format)                                                         session#create
#                                   DELETE /login(.:format)                                                         session#destroy
#                               app GET    /app(.:format)                                                           app#index
#                            search GET    /search(.:format)                                                        search#index
#

Rails.application.routes.draw do
  namespace :app do

    resources :planes do
      resources :flights do
        resources :reservations
      end
    end
  end

  resources :users

  root :to => "session#new"

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy' 
  get '/app' => 'app#index'

  get '/search' => 'search#index'

  
end
