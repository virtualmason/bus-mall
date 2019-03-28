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

if (JSON.parse(localStorage.getItem('imageTotals') !== null) ) {
  var imageTotal = JSON.parse(localStorage.getItem('imageTotals'));
  var imageLabels = JSON.parse(localStorage.getItem('imageLabels'));

  chartJS(imageTotal, imageLabels);


} else {
  makeRandom();
}

//returns  Random number
const makeRandom = () => Math.floor(Math.random() * data.length);

//taks random pic put's it in variable and renders it in html
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
// invokes inital on line 35
inital(makeRandom(), makeRandom(), makeRandom());


///constructor definitaion gets perimiter from line 65, pushed into BusMall array
function BusMall(img) {
  this.name = img.imageName;
  this.path = img.path;
  this.totalClick = 0;
  this.totalViews = 0;
  this.clickPercentage = 0;
}
//array not connected directly to BusMall
BusMall.all = [];
///Instanciates new object and pushed in array
for (var i = 0; i < data.length; i++ ) {
  BusMall.all.push(new BusMall(data[i]));
}

///Add event listner to each pic after rendered on screen by using callback on line 74
var picLeft = document.getElementById('picLeft').addEventListener('click', handleClick);
var picMiddle= document.getElementById('picMiddle').addEventListener('click', handleClick);
var picRight = document.getElementById('picRight').addEventListener('click', handleClick);

// tests if img.name === data-pic becuase it updates totalViews, function ends line 109
function handleClick(event) {

  //grab all 3 of the shown image dat-pic names, not click related
  let shownImages = document.querySelectorAll('[data-pic]').forEach(e => {
    BusMall.all.find(function(img) {
      //checks one by one what is beign shown so we can update totalViews
      if (img.name === e.getAttribute('data-pic')) {
        img.totalViews++;
      }
    });
  });
    ///takes click event and gets data type ="name"
  let img = event.target.getAttribute('data-pic');
  //loops through arry of objects
  for(var i = 0; i < BusMall.all.length; i++) {

    // checks if naame on Object === data attr name
    if (BusMall.all[i].name === img) {
      //increment objects in objects
      BusMall.all[i].totalClick++;
    }

    ///check ib totalClick object === totalVies then it's 100% click rate
    if (BusMall.all[i].totalClick === BusMall.all[i].totalViews && BusMall.all[i].totalViews !== 0) {
      BusMall.all[i].clickPercentage = 100;
    } else {

      ///if not cal actual percentage is cal and set to object property
      BusMall.all[i].clickPercentage = (BusMall.all[i].totalClick / BusMall.all[i].totalViews) * 100;
    }
  }

  if (totalClickGlobal < 25) {
    totalClickGlobal += 1;
    /// renders  images on screen
    inital(makeRandom(), makeRandom(), makeRandom());
  } else {
    chartJS();
    //below shows raw stats
    // document.querySelector('#stats').innerHTML = `<pre>${JSON.stringify(BusMall.all, null, 3)}</pre>`;
  }

}
// chart.js below



///update Chart.js below

function chartJS(iTotals, iLables) {
  var ctx = document.getElementById('myChart').getContext('2d');
  var imageLabels = [];
  var imageTotals = [];

  if(BusMall.all !== undefined){
    BusMall.all.forEach(function(i) {
      imageLabels.push(i.name);
      imageTotals.push(i.totalClick);
    });


  }
 
  //add info to localstorage
  localStorage.setItem('imageLabels', JSON.stringify(imageLabels));
  //get info from ocalstorageimageLabels);
  localStorage.setItem('imageTotals', JSON.stringify(imageTotals));
  //get info from ocalstorage
  var imageTotalsFromLocalStorage = JSON.parse(localStorage.getItem('imageTotals'));
  var imageLabelsFromLocalStorage = JSON.parse(localStorage.getItem('imageLabels'));
  // delete imageTotals from 151 and 146: delete imageLabels

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: iLables !== undefined ? iLables: imageLabelsFromLocalStorage ,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data:  iTotals !== undefined ? iTotals: imageTotalsFromLocalStorage
      }]
    },

    // Configuration options go here
    options: {}
  });

}
