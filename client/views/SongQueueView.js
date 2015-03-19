// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
	tagName: "table",
  initialize: function() {
  	this.render();
  	// debugger;
  },

  render: function() {
  	console.log("entered queue render")

  	return this.$el.html('<th>My Queue</th>').append(
	    this.collection.map(function(song){
	    	console.log(song);
	    	return new SongQueueEntryView({model: song}).render();
	    })
    );
  }

});
