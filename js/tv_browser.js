// API Docs at:
// http://www.tvmaze.com/api
var input;
var responseArr = [];
var response;

// var changeStyle = function() {
//     document.querySelector('input').style.width = "20em";
//     document.getElementById('search-form').style.fontSize = "200%";
//    document.getElementById('search-form').style.margin = "20em";
//    document.querySelectorAll('a').style.color = "#c00";
// }

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
}; responseArr = response;


var showDetail= document.getElementById('show-detail');
var showsListHead = document.createElement('ul');
showDetail.appendChild(showsList);

var getShows = function(event){
    for (var i=0;i<responseArr.length;i++){
        if(responseArr[i].show.name === this.value){
            var showsList = document.createElement('li');
            showsListHead.appendChild(showsList);
            var showsArr = responseArr[i].shows;
            showsList.innerHTML = `Name: ${showsArr.name}, Summary: ${showsArr.Summary}`
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




















