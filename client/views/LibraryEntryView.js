// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize : function(){
    this.model.on('change', this.render, this);
    this.model.on('upvote', this.render, this);
    this.model.on('downVote', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td><td><%= rank %></td>'),

  events: {
    'click td': function() {
      this.model.play();
      this.model.enqueue();
    },
    'click .up' : function(){
      this.model.upvote();
    },
    'click .downvote' : function(){
      this.model.downVote();
    }

  },

  render: function(){
    return this.$el.html('<button class="up">upvote</button>'+'<button class="downvote">down</button>'+this.template(this.model.attributes));
  }

});
