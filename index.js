var totalClickGlobal = 1;
var data = [
  { imageName: 'bag', path: 'img/bag.jpg', },
  { imageName: 'banana', path: 'img/banana.jpg', },
  { imageName: 'bathroom', path: 'img/bathroom.jpg', },
  { imageName: 'boots', path: 'img/boots.jpg', },
  { imageName: 'breakfast', path: 'img/breakfast.jpg', },
  { imageName: 'bubblegum', path: 'img/bubblegum.jpg', },
  { imageName: 'chair', path: 'img/chair.jpg', },
  { imageName: 'cthulhu', path: 'img/cthulhu.jpg', },
  { imageName: 'dogduck', path: 'img/dogduck.jpg', },
  { imageName: 'dragon', path: 'img/dragon.jpg', },
  { imageName: 'pen', path: 'img/pen.jpg', },
  { imageName: 'petsweep', path: 'img/petsweep.jpg', },
  { imageName: 'scissors', path: 'img/scissors.jpg', },
  { imageName: 'shark', path: 'img/shark.jpg', },
  { imageName: 'sweep', path: 'img/sweep.jpg', },
  { imageName: 'tauntaun', path: 'img/tauntaun.jpg', },
  { imageName: 'unicorn', path: 'img/unicorn.jpg', },
  { imageName: 'usb', path: 'img/usb.jpg', },
  { imageName: 'watercan', path: 'img/watercan.jpg', },
  { imageName: 'wineglass', path: 'img/wineglass.jpg', }
];

var shown = {
  'bag': 0, 'banana': 0, 'bathroom' : 0, 'boots': 0, 'breakfast': 0, 'bubblegum': 0, 'chair': 0, 'cthulhu': 0,' dogduck': 0,'dragon': 0, 'pen': 0,'petsweep': 0, 'scissors': 0,'shark': 0,'sweep': 0, 'tauntaun': 0,'unicorn': 0,'usb': 0,
  'watercan': 0,'wineglass': 0
};
var allImages = ['../img/bag.jpg', '../img/banana.jpg','../img/bathroom.jpg','../img/boots.jpg','../img/breakfast.jpg','../img/bubblegum.jpg', '../img/chair.jpg','../img/cthulhu.jpg', '../img/dogduck.jpg', '../img/dragon.jpg','../img/pen.jpg','../img/petsweep.jpg','../img/scissors.jpg','../img/shark.jpg', '../img/sweep.jpg','../img/tauntaun.jpg', '../img/unicorn.jpg','../img/usb.jpg','../img/watercan.jpg','../img/wineglass.jpg'];
var allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu',' dogduck','dragon', 'pen','petsweep', 'scissors','shark','sweep', 'tauntaun','unicorn','usb','watercan','wineglass'];

const makeRandom = () => Math.floor(Math.random() * allImages.length);

function inital(rand1, rand2, rand3) {
  var picOne = `<img src='${data[rand1].path}' width='100%' height='auto' data-pic="${data[rand1].imageName}">`;
  var picTwo = `<img src='${data[rand2].path}' width='100%' height='auto' data-pic="${data[rand2].imageName}">`;
  var picThree = `<img src='${data[rand3].path}' width='100%' height='auto' data-pic="${data[rand3].imageName}">`;

  // HTMl Selectors
  var picLeft = document.getElementById('picLeft');
  var picMiddle= document.getElementById('picMiddle');
  var picRight = document.getElementById('picRight');

  picLeft.innerHTML = picOne;
  picMiddle.innerHTML = picTwo;
  picRight.innerHTML = picThree;
}

inital(makeRandom(), makeRandom(), makeRandom());

function BusMall(img) {
  this.name = img.imageName;
  this.path = img.path;
  this.totalClick = 0;
  this.totalViews = 0;
  this.clickPercentage = 0;
}

BusMall.all = [];

for (var i = 0; i < data.length; i++ ) {
  BusMall.all.push(new BusMall(data[i]));
}

var picLeft = document.getElementById('picLeft').addEventListener('click', handleClick);
var picMiddle= document.getElementById('picMiddle').addEventListener('click', handleClick);
var picRight = document.getElementById('picRight').addEventListener('click', handleClick);

function handleClick(event) {
  let shownImages = document.querySelectorAll('[data-pic]').forEach(e => {
    BusMall.all.find(function(img) {
      if (img.name === e.getAttribute('data-pic')) {
        img.totalViews++;
      }
    });
  });

  let img = event.target.getAttribute('data-pic');
  for(var i = 0; i < BusMall.all.length; i++) {

    if (BusMall.all[i].name === img) {
      BusMall.all[i].totalClick++;
    }

    if (BusMall.all[i].totalClick === BusMall.all[i].totalViews) {
      BusMall.all[i].clickPercentage = 100;
    } else {
      BusMall.all[i].clickPercentage = (BusMall.all[i].totalClick / BusMall.all[i].totalViews) * 100;
    }
  }

  if (totalClickGlobal < 25) {
    totalClickGlobal += 1;
    inital(makeRandom(), makeRandom(), makeRandom());
  } else {
    document.querySelector('#stats').innerHTML = `<pre>${JSON.stringify(BusMall.all, null, 3)}</pre>`;
  }

  console.log('BusMall', BusMall.all);
}
