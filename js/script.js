$(function(){
//Joke's website address 
var url = 'http://api.icndb.com/jokes/random';

//Listener 
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});	

//Joke display
var paragraph = document.getElementById('joke');	

//XMLHttpRequest
function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
//JavaScript Object Notation
  var response = JSON.parse(xhr.response);
}
//Joke generator
  getJoke();
});