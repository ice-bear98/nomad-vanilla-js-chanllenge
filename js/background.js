// 실시간 시계

// 로컬 스토리지를 사용한 로그인

// 로컬 스토리지를 사용한 투두리스트

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

// 날씨와 위치 (geolocation)
