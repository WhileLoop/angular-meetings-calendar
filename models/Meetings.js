'use strict';

var mongoose = require('mongoose');

var MeetingSchema = new mongoose.Schema({
  title: String,
  start: { type: Date },
  end: { type: Date }
});

mongoose.model('Meeting', MeetingSchema);
