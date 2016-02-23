Rails.application.routes.draw do   
  root 'welcome#index'

  get 'votes/recently_added' => 'votes#recently_added', as: :recently_added_votes
  get 'votes/add_parent' => 'votes#add_parent', as: :add_parent_vote
  post 'votes/email_invite' => 'votes#email_invite', as: :email_invite_votes

  scope "(:locale)" do
    get '' => 'welcome#index', as: :locale_root
    get 'appeal' => 'welcome#appeal', as: :appeal
    resources :votes, :only => [:new, :index, :create]
    resources :comments, :only => [:new, :index, :create]
    get 'votes/:secret_token' => 'votes#show', as: :vote
  end

end
