'use strict';

describe('angular-meetings-calendar', function() {

  // Import page objects.
  var ViewMeetingsPage = require('./pageobjects/viewMeetingsPage.js');
  var AddMeetingsPage = require('./pageobjects/addMeetingsPage.js');

  it('should create a meeting', function() {
    browser.get('http://localhost:3000/');

    var viewMeetingsPage = new ViewMeetingsPage();
    viewMeetingsPage.addMeeting();

    var addMeetingsPage = new AddMeetingsPage();
    addMeetingsPage.populateTitle("test1");
    addMeetingsPage.add();
  });

  it('should edit a meeting', function() {
    browser.get('http://localhost:3000/');

    var viewMeetingsPage = new ViewMeetingsPage();
    viewMeetingsPage.openMeetingByName("test1");

    var addMeetingsPage = new AddMeetingsPage();
    addMeetingsPage.populateTitle("test2");
    addMeetingsPage.add();
  });

  it('should delete a meeting', function() {
    browser.get('http://localhost:3000/');

    var viewMeetingsPage = new ViewMeetingsPage();
    viewMeetingsPage.openMeetingByName("test2");

    var addMeetingsPage = new AddMeetingsPage();
    addMeetingsPage.delete();
  });

});
