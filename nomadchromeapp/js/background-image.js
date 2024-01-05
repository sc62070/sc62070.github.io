/* Random */

function randomInt(range) {
  return Math.floor(Math.random() * range);
}

function randomBackgroundImage() {
  const images = ["0.jpg", "1.jpg", "2.jpg"];
  const image = images[randomInt(3)];
  return `url(img/${image})`;
}

/* Background */

document.body.style.backgroundImage = randomBackgroundImage();
