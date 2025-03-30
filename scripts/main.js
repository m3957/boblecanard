// Get the third image element
const thirdImage = document.querySelectorAll("img")[2];
const myButton = document.querySelector("button");

const images = [
	"images/duck.webp",
	"images/euh.png",
	"images/mamie.jpg",
	"images/timmy.jpg",
];

let currentIndex = 0;

myButton.onclick = () => {
	currentIndex = (currentIndex + 1) % images.length; // Increment index and wrap around
	thirdImage.setAttribute("src", images[currentIndex]);
};
