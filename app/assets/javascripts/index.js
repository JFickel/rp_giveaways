$(function () {
  var giveawayDate = new Date(2014, 3, 13);
  newYear = new Date(giveawayDate);
  $('#countdown').countdown({until: newYear});
});