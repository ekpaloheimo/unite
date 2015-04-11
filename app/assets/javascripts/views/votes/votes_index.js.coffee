class StopDisaster.Views.VotesIndex extends Backbone.View
  template: JST['votes/index']
  
  renderVotes: ->
    this.collection.each (model) => 
      view = new StopDisaster.Views.VotesShow(model: model)
      row = view.render().$el
      this.$el.find(".recent_votes_header").after( row.html() )
    
  render: ->
    this.$el.html( this.template() )
    this.renderVotes()
    this
