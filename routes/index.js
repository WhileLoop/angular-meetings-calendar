'use strict';

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var router = express.Router();

var Meeting = mongoose.model('Meeting');

router.get('/meetings', function(req, res, next) {
  Meeting.find(function(err, meetings){
    if(err) return next(err);
    res.json(meetings);
  });
});

router.post('/meetings', function(req, res, next) {
  Meeting.create(req.body, function(err, meeting){
    if(err) return next(err);
    res.json(meeting);
  });
});

router.get('/meetings/:meeting', function(req, res, next) {
  Meeting.findById(req.params.meeting, req.body, function (err, meeting) {
    if (err) return next(err);
   res.json(meeting);
  });
});

router.put('/meetings/:meeting', function(req, res, next) {
  Meeting.findByIdAndUpdate(req.params.meeting, req.body, function (err, meeting) {
    if (err) return next(err);
    res.json(meeting);
  });
});

router.delete('/meetings/:meeting', function(req, res, next) {
  Meeting.findByIdAndRemove(req.params.meeting, req.body, function (err, meeting) {
    if (err) return next(err);
    res.json(meeting);
  });
});

module.exports = router;
