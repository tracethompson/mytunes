// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio class="player" controls autoplay />',

  initialize: function() {
    // cashing the current song
    var self = this;
    this.$el.on('ended', function(){
      //dequeue current song
      self.model.ended();
    })
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
