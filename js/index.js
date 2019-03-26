
 var totalClickGlobal = 0;
var shown = {
  'bag': 0, 'banana': 0, 'bathroom' : 0, 'boots': 0, 'breakfast': 0, 'bubblegum': 0, 'chair': 0, 'cthulhu': 0,' dogduck': 0,'dragon': 0, 'pen': 0,'petsweep': 0, 'scissors': 0,'shark': 0,'sweep': 0, 'tauntaun': 0,'unicorn': 0,'usb': 0,
  'watercan': 0,'wineglass': 0
};
var allImages = ['../img/bag.jpg', '../img/banana.jpg','../img/bathroom.jpg','../img/boots.jpg','../img/breakfast.jpg','../img/bubblegum.jpg', '../img/chair.jpg','../img/cthulhu.jpg', '../img/dogduck.jpg', '../img/dragon.jpg','../img/pen.jpg','../img/petsweep.jpg','../img/scissors.jpg','../img/shark.jpg', '../img/sweep.jpg','../img/tauntaun.jpg', '../img/unicorn.jpg','../img/usb.jpg','../img/watercan.jpg','../img/wineglass.jpg'];
var allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu',' dogduck','dragon', 'pen','petsweep', 'scissors','shark','sweep', 'tauntaun','unicorn','usb','watercan','wineglass'];

function makeRandom() {
  var rand1 = Math.floor(Math.random() * allImages.length);
  return rand1;
}

inital(makeRandom(), makeRandom(), makeRandom());
function inital(picone, pictwo,picthree) {
  var picOne = `<img src='${allImages[picone]}' width='100%' height='auto' data-pic="${allNames[picone]}">`;
  var num = allNames[picone];
  shown[num]++;
  
  var picTwo = `<img src='${allImages[pictwo]}' width='100%' height='auto' data-pic="${allNames[pictwo]}">`;
  var num2 = allNames[pictwo];
  shown[num2]++;

  var picThree = `<img src='${allImages[picthree]}' width='100%' height='auto' data-pic="${allNames[picthree]}">`;
  var num3 = allNames[picthree];
  shown[num3]++;

  // HTMl Selectors
  var picLeft = document.getElementById('picLeft');
  var picMiddle= document.getElementById('picMiddle');
  var picLast = document.getElementById('picLast');

  picLeft.innerHTML = picOne;
  picMiddle.innerHTML = picTwo;
  picLast.innerHTML = picThree;
}

function BusMall(img, name) {
  // this.img = `<img src='${img}' width='100%' height='auto' onclick='pic.count(this)' data-pic-one="${name}">`;
  this.name = name;
  this.totalClick = 0;
  this.totalView = 0;
  this.nameAndTotal = 0;
  this.totalPerentage = 0;
  this.count = function(img) {
    var imgClick = img.getAttribute('data-pic');
    // this.totalClick += 1;
    this.totalView = 0; //this pic has been shown this many times
    this.nameAndTotal += 1; //this pic clickd this many times
    totalClickGlobal += 1;///at 25 show 
    // console.log(totalClickGlobal, ' totalClickGlobal' );
    // experemntal 
    BusMall.all[i].nameAndTotal++;

  };
}
BusMall.all = [];

for (var i = 0; i < allNames.length; i++ ) {
  BusMall.all.push(new BusMall(allImages[i], allNames[i]));
}

var picLeft = document.getElementById('picLeft').addEventListener('click', handleClick);
var picMiddle= document.getElementById('picMiddle').addEventListener('click', handleClick);
var picLast = document.getElementById('picLast').addEventListener('click', handleClick);

function handleClick(event){
  for(var i = 0; i < BusMall.all.length; i++){
    if(event.target.getAttribute('data-pic') === BusMall.all[i].name){
      BusMall.all[i].totalClick++;
      /////exprermental
      BusMall.all[i].totalClick++;

      break;
    }
  }
  inital(makeRandom(), makeRandom(), makeRandom());
}

console.table(BusMall.all, ' buss mall all 112');
//console.log(shown, ' shown');