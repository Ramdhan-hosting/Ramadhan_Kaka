const images = [
  "https://source.unsplash.com/1600x700/?galaxy",
  "https://source.unsplash.com/1600x700/?planet",
  "https://source.unsplash.com/1600x700/?astronaut"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 4000);