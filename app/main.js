var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Mainview = require('./views/search-view.js');

var mainview = new Mainview ({ el: $("#search-container") });
