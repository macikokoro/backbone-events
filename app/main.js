var $ = require('jquery');
var Note = require('./models/Note');
var SimpleView = require('./views/SimpleView');

var note = new Note();
var simpleView = new SimpleView({model: note});

$('#backbone-content').append(simpleView.$el);
