// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){

	 this.on('add', function(){
	 	if(this.length === 1){
	 		this.playFirst();
	 	}
	 });

	 this.on('ended', function(){
	 	if(this.length>1){
	 		this.ended();
	 		this.playFirst();
	 	} else{
	 		this.ended();
	 	}
	 });

	 this.on('dequeue', function(song){
	 	this.remove(song);
	 });

	},
  


  //targets first song in collection and plays
  playFirst : function(){
  	this.at(0).play();
  },

  //removes first song
  ended : function(){
  	this.shift();
	}
});