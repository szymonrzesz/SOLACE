const track = document.querySelector(".carousel-track");
const images = Array.from(track.children);
const imageWidth = images[0].clientWidth + 10;
let position = 0;
let index = 0;
function moveCarousel() {
  position -= imageWidth;
  track.style.transition = 'transform 1s ease';
  track.style.transform = `translateX(${position}px)`;
  setTimeout(() => {
    track.style.transition = 'none';
    track.appendChild(track.firstElementChild);
    position += imageWidth; 
    track.style.transform = `translateX(${position}px)`;
    setTimeout(() => {
      track.style.transition = 'transform 1s ease';
    }, 50);
  }, 1000);
}
setInterval(moveCarousel, 2000);
