//backend script js
exports.Repo = function() {

}

var apiKey = "d7c82bf02f2aa3b923efbc2aef62cf02bc17432d";

exports.Repo.prototype.apiRequest = function(userName) {
	$.get("https://api.github.com/users/" + userName + "?access_token=" + apiKey).then(function(response) {
      console.log(JSON.stringify(response));
      $("#displayImage").append("<img src=" + response.avatar_url + ">");
      $("#divName").text(response.login);
      $("#divRepo").text(response.public_repos);
      $("#display").slideToggle();
    //$("#divRepoName").text();
    //$("#repoLinks").text();  
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });

    //second api call to get repo mames description and links to github
    $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++){
      $("#divRepoName").append("<h4>" + response[i].name + "</h4><p>" + response[i].description + "<a href=" + response[i].html_url + 
        "><br><h5>view on github</h5></a>" + "</p><br><br>");
    }
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
};


