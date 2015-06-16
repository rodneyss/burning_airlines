# == Route Map
#
#      Prefix Verb   URI Pattern                 Controller#Action
#      planes GET    /planes(.:format)           planes#index
#             POST   /planes(.:format)           planes#create
#   new_plane GET    /planes/new(.:format)       planes#new
#  edit_plane GET    /planes/:id/edit(.:format)  planes#edit
#       plane GET    /planes/:id(.:format)       planes#show
#             PATCH  /planes/:id(.:format)       planes#update
#             PUT    /planes/:id(.:format)       planes#update
#             DELETE /planes/:id(.:format)       planes#destroy
#     flights GET    /flights(.:format)          flights#index
#             POST   /flights(.:format)          flights#create
#  new_flight GET    /flights/new(.:format)      flights#new
# edit_flight GET    /flights/:id/edit(.:format) flights#edit
#      flight GET    /flights/:id(.:format)      flights#show
#             PATCH  /flights/:id(.:format)      flights#update
#             PUT    /flights/:id(.:format)      flights#update
#             DELETE /flights/:id(.:format)      flights#destroy
#       users GET    /users(.:format)            users#index
#             POST   /users(.:format)            users#create
#    new_user GET    /users/new(.:format)        users#new
#   edit_user GET    /users/:id/edit(.:format)   users#edit
#        user GET    /users/:id(.:format)        users#show
#             PATCH  /users/:id(.:format)        users#update
#             PUT    /users/:id(.:format)        users#update
#             DELETE /users/:id(.:format)        users#destroy
#

Rails.application.routes.draw do
  resources :planes
  resources :flights do
    resources :reservations
  end
  resources :users

  root :to => "session#new"

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy' 

  get '/search' => 'search#index'

  
end
