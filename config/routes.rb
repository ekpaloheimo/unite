Rails.application.routes.draw do   
  root 'welcome#index'

  get ':locale/video' => 'welcome#video', as: :video
  get ':locale/' => 'welcome#index'
#  get ':locale/appeal' => 'welcome#appeal', as: :appeal
  get 'votes/recently_added' => 'votes#recently_added', as: :recently_added_votes
  get 'votes/add_parent' => 'votes#add_parent', as: :add_parent_vote

  post 'votes/email_invite' => 'votes#email_invite', as: :email_invite_votes

  scope "(:locale)" do
    resources :votes, :only => [:new, :index, :create]
    resources :comments, :only => [:new, :index, :create]
  end

  get ':locale/votes/:secret_token' => 'votes#show', as: :vote

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
