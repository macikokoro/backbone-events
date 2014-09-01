var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
      this.model.on('change', this.render, this);
        this.render();
    },

    render: function () {
        var template = require('../templates/form-template.hbs');
        var data = this.model.attributes;
        this.$el.html(template(data));
        return this;
    },
    events: {
        'click #run': 'getResults',
      },

      getResults: function() {
        this.model.set({numberArray: this.$('#input').val().split(' ')});
        this.model.findMean();
      }
});
