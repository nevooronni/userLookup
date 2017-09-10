//custom script js
var apiKey = require('./../.env').apiKey;

var Repo = require('./../js/backend-script.js').Repo;

$(document).ready(function() {
  //frontend
  $("#display").hide();
  var newUser = new Repo(); 
  $("#submit").click(function(event) {
    event.preventDefault();
    var userName = $("#username").val();
    $("#username").val(""); 
    newUser.apiRequest(userName); 
    //var output = github.getProfile(userName);
    //return output;
  });
}); 




