var ViewMeetingsPage = function() {

  var addButton = element(by.xpath("/html/body/div[1]/div/div[2]/div[1]/div/span"));

  this.openMeetingByName = function(name) {
    var addButtonString = "//*[@class='fc-event-title' and text()='{0}']".replace("{0}", name)
    element(by.xpath(addButtonString)).click();
  }

  this.addMeeting = function() {
    addButton.click();
  }
}

module.exports = ViewMeetingsPage;
