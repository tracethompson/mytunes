// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize : function(){
    this.set('playCount', 0);
    this.set('rank', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
    this.set('playCount', this.get('playCount') + 1);
  },

  dequeue: function(){
  	this.trigger('dequeue', this);
  },

  ended: function(){
		this.trigger('ended', this);
  },

  upvote : function(){
    this.set('rank', this.get('rank')+1)
  },

  downVote : function(){
    console.log('entered')
    this.set('rank', this.get('rank')-1)
  }
});
