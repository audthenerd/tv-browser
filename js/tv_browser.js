// API Docs at:
// http://www.tvmaze.com/api
// window.onload = function(){

var input = document.querySelector('#show-search');
var options = document.querySelector('option');
var select = document.getElementById('show-select');
var showDetail= document.getElementById('show-detail');

var response;
var coverOption;

// var result;

// function myFunction() {
//     result = "hello world";
// }

// myFunction();
// console.log(result);




var responseHandler = function() {
  console.log("response text", this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
};


// make a new request
var request = new XMLHttpRequest();

//This gets the response.
var responseHandler = function() {
  console.log("response text", this.responseText);
  response = JSON.parse( this.responseText );
  console.log( response );
  responseArr = response;

    hidePrevious();
    showList(response);
};


//To get the data from the server.
var doSubmit = function(event){

var input = document.querySelector('#show-search');
var url = "http://api.tvmaze.com/search/shows?q="+ input.value;
    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    request.open("GET", url); //>> this will be set as "url" instead as a parameter in the function.

    // send the request
    request.send();
};



//function to clear previous filled options.
var hidePrevious = function() {
while (select.options.length>1){
    select.innerHTML = "";
}
}


//For drop-down list to select shows in options bar.



var showList = function(item) {

var showsArr = [];

var showSelect = document.getElementById('show-select');

    for(i=0; i<item.length; i++){
        showsArr.push(item[i].show.name);

        var dropDown = document.createElement('option');
        dropDown.setAttribute('value', item[i].show.name);
        dropDown.textContent = item[i].show.name;

        showSelect.appendChild(dropDown);
        select.style.visibility = "visible";

    }
        var coverOption = document.querySelector('option');
        coverOption.textContent = "Shows matching " + input.value + "...";
        showSelect.style.display="block";

        return showsArr;

}



var renderShow = function() {
    for(i=0; i<response.length; i++){

    if (response[i].show.name === select.value ){

        var info = document.createElement('p');
        info.setAttribute('value', response[i].show.name);
        info.textContent = response[i].show.name;
        showDetail.appendChild(info);

        var image = document.createElement('img');
        image.setAttribute('src', response[i].show.image.medium);
        info.appendChild(image);



    }
    }
};




document.querySelector('button').addEventListener('click', doSubmit);
select.addEventListener('change', renderShow);




var requestFailed = function(){
  console.log("response text", this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
};

request.addEventListener("error", requestFailed);



// }
