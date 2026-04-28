const images = [
  "https://source.unsplash.com/1600x700/?ai",
  "https://source.unsplash.com/1600x700/?coding",
  "https://source.unsplash.com/1600x700/?cybersecurity"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 4000);