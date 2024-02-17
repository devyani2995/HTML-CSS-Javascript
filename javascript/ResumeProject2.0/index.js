/*========= smooth scroll =========*/
var navMenueAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<navMenueAnchorTags.length;i++){
    navMenueAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault(); //to prevent the default behaviour of an anchor tag ie when tag is clicked it will not take to the specified section which is mentioned in href attributes
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);    
        interval = setInterval(scrollVertically,20,targetSection);

        //or we can also line 12 by :-
        // interval = setInterval(function(){
        //     scrollVertically(targetSection);
        // },20);
    });
}
function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window,scrollBy(0,50);
}

/*========= Auto fill skill bar  ========= */
// var progressBar = document.querySelectorAll('.skill-progress > div');
// var skillContainer = document.getElementById('skill-container');
// window.addEventListener('scroll',checkScroll);
// var animationDone = false;

// function initialiseBars(){

//     //set width of bars of every progress bar to 0
//     for(let bar of progressBar){
//          bar.style.width = 0 + '%';
//     }
// }
// initialiseBars();
// function fillBars(){
//   for(let bar of progressBar){
//     let targetWidth = bar.getAttribute('data-bar-width');
//     let currentWidth = 0;
//     let interval = setInterval(function(){
//         if(currentWidth > targetWidth){
//             clearInterval(interval);
//             return;
//         }
//         currentWidth++;
//         bar.style.width = currentWidth + '%';
//     },5);
//   }
// }

// function checkScroll(){
//     //you have to check whether skill conatiner is visible
//      var coordinates = skillContainer.getBoundingClientRect();

//      //check coordinates top less than viewport height
//      if(!animationDone && coordinates.top <= window.innerHeight){
//         animationDone = true;
//          console.log("visible..");
//          fillBars();
//      }else if(coordinates.top > window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//      }
// }

/*=====auto fill skill bars improved animation======*/

var progressBars = document.querySelectorAll(".skill-progress > div");
// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
window.addEventListener("scroll", checkScroll);
function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}
