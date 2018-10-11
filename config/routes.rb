Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    get "/children", to: "children#index_all"
resources :employees do
  resources :children
   end
 end
end
