// API Docs at:
// http://www.tvmaze.com/api
var input;


var userResults = function() {
    var browseId = document.createElement('div');
    browseId.setAttribute('id', 'browse-here');

    var searchId = document.createElement('div');
    searchId.setAttribute('id', 'search-form');
    browseId.appendChild(searchId);


    var input = document.createElement('input');
    input.setAttribute('id', 'show-search');
    input.setAttribute('type', 'search');
    input.setAttribute('placeholder', 'Search for a title....');
    searchId.appendChild(input);

    var button = document.createElement('button');
    button.textContent = "Submit";
    input.appendChild(button);
};

var changeStyle = function() {
    document.querySelector('input').style.width = "20em";
    document.getElementById('search-form').style.fontSize = "200%";
   document.getElementById('search-form').style.margin = "20em";
   document.querySelectorAll('a').style.color = "#c00";
}

var responseHandler = function() {
  console.log("response text", this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
};


// make a new request
var request = new XMLHttpRequest();

var responseHandler = function() {
  console.log("response text", this.responseText);
  var response = JSON.parse( this.responseText );
  console.log( response );

getShows(response);
};

userResults();
changeStyle();

var input = document.querySelector('#show-search');
var url = "http://api.tvmaze.com/search/shows?q="+input.value;


var getShows = function(arr){
    for (var i=0;i<arr.length;i++){
        if(arr[i].show.name === input.value){
           return arr[i];
        }
     }
};



var doSubmit = function(event){



var input = document.querySelector('#show-search');
var url = "http://api.tvmaze.com/search/shows?q="+input.value;
    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    request.open("GET", url); //>> this will be set as "url" instead as a parameter in the function.

    // send the request
    request.send();
};

document.querySelector('button').addEventListener('click', doSubmit);


var requestFailed = function(){
  console.log("response text", this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
};

request.addEventListener("error", requestFailed);




















