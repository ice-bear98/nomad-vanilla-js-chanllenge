const images = [
  "background1.jpeg",
  "background2.jpg",
  "background3.jpg",
  "background4.jpg",
  "background5.jpg",
  "background6.png",
  "background7.png",
  "background8.jpg",
  "background9.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style = ` background: url(
"/img/${randomImage}") no-repeat center fixed;
background-size: cover;
`;
