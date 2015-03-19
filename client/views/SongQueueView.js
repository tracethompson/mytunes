// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
	tagName: "table",
  id: "queue",
  
  initialize: function() {
  	this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('dequeue', this.render, this);
    this.collection.on('ended', this.render, this);
  },

  render: function() {
  	return this.$el.html('<th>My Queue</th>').append(
	    this.collection.map(function(song){
	    	return new SongQueueEntryView({model: song}).render();
	    })
    );
  }

});
