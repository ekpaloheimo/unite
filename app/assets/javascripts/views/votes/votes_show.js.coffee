class StopDisaster.Views.VotesShow extends Backbone.View
  template: JST['votes/show']

  render: ->
    console.log("render VoteShow")
    this.model.calculateAgo()
    this.$el.html( this.template( this.model.attributes ) )
    this