(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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



},{}],2:[function(require,module,exports){
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



},{"./../js/backend-script.js":1}]},{},[2]);
