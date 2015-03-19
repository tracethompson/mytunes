// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
	initialize : function(){
		this.model.on('change', this.render, this);
	},
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),



  render: function(){
  	console.log("entered entry render")
  	return this.$el.html(this.template(this.model.attributes));
  }

});
