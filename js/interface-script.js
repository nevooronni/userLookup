//custom script js
var Repo = require('./../js/backend-script.js').Repo;

var apiKey = "d7c82bf02f2aa3b923efbc2aef62cf02bc17432d";

$(document).ready(function() {
  //frontend
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


