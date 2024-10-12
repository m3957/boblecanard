const myImage = document.querySelector("img");
const myButton = document.querySelector("button");

/*
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/duck.webp") {
    myImage.setAttribute("src", "images/euh.png");
  } else {
    myImage.setAttribute("src", "images/duck.webp");
  }
};
*/

const images = [
    "images/duck.webp",
    "images/euh.png",
    "images/mamie.jpg",
    "images/timmy.jpg"
  ];
  
  let currentIndex = 0;
  
  myButton.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length; // Increment index and wrap around
    myImage.setAttribute("src", images[currentIndex]);
  };