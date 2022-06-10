console.log("hello world");



const element = document.querySelector("#color");

element.addEventListener("click", () => {
	console.log("clicked element");
    alert('Red')
});

const elementTwo = document.querySelector("#place");

elementTwo.addEventListener("click", () => {
	console.log("clicked element");
    alert('Hawaii')
});

const elementThree = document.querySelector("#ritual");

elementThree.addEventListener("click", () => {
	console.log("clicked element");
    alert('Working out after class')
});