const $foodImages = document.querySelectorAll('.foodimg');
// const $bgImages = document.querySelectorAll('.bgimg');
// const $nextbtn =  document.querySelector('.arrow.next')
// const $backbtn =  document.querySelector('.arrow.back')
// const $slide = document.querySelectorAll('.slide_item')

const $imageUrls = [
  'images/burger-de-luxe.jpg',
  'images/Image.png',
  'images/Image2.png',
  'images/Image3.png'
];


$foodImages.forEach((foodImg, index) => {
    if (index < $imageUrls.length) {
      const $imageUrl = $imageUrls[index];
      foodImg.style.backgroundImage = `url(${$imageUrl})`;
    }
});


const $backgroundImages = document.querySelectorAll('.bgimg')

const $backgroundImagesUrls = [
    'images/foodworld.png',
    'images/Donutshut.png',
    'images/Pizzahub.png',
    'images/subway.png',
    'images/taco.png',
    'images/ruby.png',
    'images/red.png',
    'images/kuata.png'
];

$backgroundImages.forEach((bgImg, index) => {
  if (index < $backgroundImagesUrls.length) {
    const $backgroundImagesUrl = $backgroundImagesUrls[index];
    bgImg.style.backgroundImage = `url(${$backgroundImagesUrl})`;
  }
});

  // const bgImageUrls = [
  //   'images/foodworld.png',
  //   'images/Donuts hut.png',
  //   'images/Pizzahub.png',
  //   'images/subway.png',
  //   'images/taco.png',
  //   'images/ruby.png',
  //   'images/red.png',
  //   'images/kuata.png'
  // ];
  
  // const bgImages = document.querySelectorAll('.bgimg');
  
  // bgImages.forEach((bgImg, i) => {
  //   if (i < bgImageUrls.length) {
  //     const bgImageUrl = bgImageUrls[i];
  //     bgImg.style.backgroundImage = `url("${bgImageUrl}")`;
  //   }
  // });
  
  