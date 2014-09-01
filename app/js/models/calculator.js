var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Calculator = Backbone.Model.extend({
  defaults: {
    numberArray: [],
    Title: 'The meeny miny mo calculator',
    mean: ' '
  },

  findMean: function(){
    var data = this.get('numberArray');
    var sum = 0;
    for(var i = 0; i < data.length; i++) sum += Number(data[i]);
    this.set({mean: sum / (data.length)});
  }
});

module.exports = Calculator;
