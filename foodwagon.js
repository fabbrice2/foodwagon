const foodImages = document.querySelectorAll('.foodimg');


const imageUrls = [
  'images/burger-de-luxe.jpg',
  'images/Image.png',
  'images/Image2.png',
  'images/Image3.png'
];


foodImages.forEach((foodImg, index) => {
    if (index < imageUrls.length) {
      const imageUrl = imageUrls[index];
      foodImg.style.backgroundImage = `url(${imageUrl})`;
    }
  });




