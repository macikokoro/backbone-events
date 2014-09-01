var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'div',

  initialize: function() {
    this.render();
  },

  render: function() {
    var template = require('../templates/simpleView.hbs');
    this.$el.html(template(this.model.attributes));
    return this;
  }
});
