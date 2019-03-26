var bag = '../img/bag.jpg';
var banana = '../img/banana.jpg';
var bathroom = '../img/bathroom.jpg';
var boots ='../img/boots.jpg';
var breakfast = '../img/breakfast.jpg';
var bubblegum = '../img/bubblegum.jpg';
var chair = '../img/chair.jpg';
var cthulhu = '../img/cthulhu.jpg';
var dogduck = '../img/dog-duck.jpg';
var dragon = '../img/dragon.jpg';
var pen = '../img/pen.jpg';
var petsweep = '../img/petsweep.jpg';
var scissors = '../img/scissors.jpg';
var shark = '../img/shark.jpg';
var sweep = '../img/sweep.jpg';
var tauntaun = '../img/tauntaun.jpg';
var unicorn = '../img/unicorn.jpg';
var usb = '../img/usb.jpg';
var watercan = '../img/usb.jpg';
var wineglass = '../img/wineglass.jpg';

var allProductArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck,dragon, pen,petsweep, scissors,shark,sweep, tauntaun,unicorn,usb,watercan,wineglass];

function makeRandom() {
  var rand1 = Math.floor(Math.random() * allProductArray.length);
  return rand1;
}

inital(makeRandom(), makeRandom(), makeRandom());

function inital(picone, pictwo,picthree) {
  var picOne = `<img src='${allProductArray[picone]}' width='100%' height='auto'>`;
  var picTwo = `<img src='${allProductArray[pictwo]}' width='100%' height='auto'>`;
  var picThree = `<img src='${allProductArray[picthree]}' width='100%' height='auto'>`;

  // HTMl Selectors
  var picLeft = document.getElementById('picLeft');
  var picMiddle= document.getElementById('picMiddle');
  var picLast = document.getElementById('picLast');

  picLeft.innerHTML = picOne;
  picMiddle.innerHTML = picTwo;
  picLast.innerHTML = picThree;
}
 var totalClickGlobal = 0;

function Bus(img, name) {
  this.img = img;
  this.name = name;
  this.totalClick = 0;
  this.totalView = 0;
  this.totalPerentage = 0;
}
    

   
var pic  = new Bus();
// console.log(pic)