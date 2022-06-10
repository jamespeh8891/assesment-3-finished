console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('form has been submitted!');
}

let test = document.getElementById("#duck");

test.addEventListener("mouseover", function()  {
  alert("you a cutie")
  , false);


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);