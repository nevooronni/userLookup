//custom script js

var apiKey = "d7c82bf02f2aa3b923efbc2aef62cf02bc17432d";

$(document).ready(function() {
  //var github = new UserName("username");
  $("#submit").click(function(event) {
    event.preventDefault();
    //front-end  
    var userName = $("#username").val();
    $("#username").val("");    
    apiRequest(userName);
    //var output = github.getProfile(userName);
    //return output;
  });
});


