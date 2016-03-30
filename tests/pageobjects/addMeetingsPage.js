var AddMeetingsPage = function() {

  var titleInput      = element(by.model('title'));
  var typeInput       = element(by.model('type'));
  var dateStartInput  = element(by.model('startTimeStr'));
  var dateEndInput    = element(by.model('endTimeStr'));
  var inviteesInput   = element(by.model('invitees'));
  var agendaInput     = element(by.model('agenda'));

  var cancelButton  = element(by.xpath("/html/body/div[1]/div/div[2]/form/div[6]/span[1]"));
  var deleteButton  = element(by.xpath("/html/body/div[1]/div/div[2]/form/div[6]/span[2]"));
  var addButton     = element(by.xpath("/html/body/div[1]/div/div[2]/form/div[6]/span[3]"));

  this.populateTitle = function(title) {
    titleInput.clear().sendKeys(title);
  }

  this.typeInput = function(title) {
    titleInput.sendKeys(title);
  }

  this.inviteesInput = function(title) {
    titleInput.sendKeys(title);
  }

  this.agendaInput = function(title) {
    titleInput.sendKeys(title);
  }

  this.cancel = function(title) {
    cancelButton.click();
  }

  this.delete = function(title) {
    deleteButton.click();
  }

  this.add = function(title) {
    addButton.click();
  }

}
module.exports = AddMeetingsPage;
