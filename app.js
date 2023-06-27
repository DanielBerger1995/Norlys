"use strict";

// ========== GLOBAL VARIABLES ========== //

// const //
const _eventsRef = _db.collection("events");
let _events;

// Order by Date //
_eventsRef.orderBy("start").onSnapshot(snapshotData => {
    _events = [];
    snapshotData.forEach(doc => {
        let event = doc.data();
        event.id = doc.id;
        _events.push(event);
    });
    appendEvents(_events);

});

// Append events to the DOM //
function appendEvents(events) {
    let htmlTemplate = "";
    for (let event of events) {
        htmlTemplate += `
     <a href="#select-event" onclick="appendEventDetails('${event.id}');openDetails()"> <article>
      <img class="image_wrap" src="${event.image}">
     
   <div class="event_info">
        <h1 class="event_name">${event.name}</h1>
        
        <div class="icon_wrapper"><img src="images/Calendar.png" alt="" srcset="" class="event_icon"><h2 class="icon_text">${moment(event.start.toDate()).format("DD MMMM YYYY")} - ${moment(event.end.toDate()).format("DD MMMM YYYY")}</h2></div>
        <div class="icon_wrapper">  <img src="images/Location.png" alt="" srcset="" class="event_icon"> <h2 class="icon_text">${event.location}</h2></div>
          
        </div>
      </article></a>
    `;
    }
    document.querySelector('#upcomingEvents').innerHTML = htmlTemplate;
}








//ARROWS//
let nextBtn = document.querySelector('#slideNext');
let prevBtn = document.querySelector('#slidePrev');
let slider = document.querySelector('#upcomingEvents');


// Slider initial margin
slider.style.marginLeft = "0vw";

function check() {
    if (slider.style.marginLeft >= "0vw") {
        prevBtn.style.display = "none";
    } else if (slider.style.marginLeft <= "-200vw") {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "inline-block";
        prevBtn.style.display = "inline-block";
    }
}

window.onload = check(); // Check the margins when the page is loaded

nextBtn.onclick = function () {
    slider.style.marginLeft = (parseInt(slider.style.marginLeft) - 88) + 'vw';
    check();
}

prevBtn.onclick = function () {
    slider.style.marginLeft = (parseInt(slider.style.marginLeft) + 88) + 'vw';
    check();
}









//OPEN SPECIFIC BOARDGAME DETAILS//

function openDetails() {
    let bodyid = document.getElementById('bodyid')
    let openedDetails = document.getElementById('select-event')
    let opacity = document.getElementById('opacityCover')
    openedDetails.classList.add('opendetails');
    opacity.classList.add('opacitycover');
    bodyid.classList.add('bodystopscroll')
   
}

function closeDetails() {
    let bodyid = document.getElementById('bodyid')
    let openedDetails = document.getElementById('select-event')
    let opacity = document.getElementById('opacityCover')
    openedDetails.classList.remove('opendetails');
    opacity.classList.remove('opacitycover');
    bodyid.classList.remove('bodystopscroll')
}



//SPECIFIC EVENT//

function appendEventDetails(id) {
    console.log(id);
    // references to the input fields
    let specificEvent = "";
    for (let event of _events) {
        if (event.id == id) {
            specificEvent = event;
        }
    }

    let htmlTemplate = "";
    console.log();
    htmlTemplate += `
        <article>
        <div class="closebutton" onclick="closeDetails()"></div>
    <img class="specificimage" src="${specificEvent.image}" alt="Event Photo">
         
            
            
    <div class="specific_event_info">
    <h1 class="event_name spec_name">${specificEvent.name}</h1>
        
          <div class="icon_wrapper"><img src="images/Calendar.png" alt="" srcset="" class="event_icon"><h2 class="icon_text spec_text">${moment(specificEvent.start.toDate()).format("DD MMMM YYYY")} - ${moment(specificEvent.end.toDate()).format("DD MMMM YYYY")}</h2></div>
        
        <div class="icon_wrapper">  <img src="images/Location.png" alt="" srcset="" class="event_icon"> <h2 class="icon_text spec_text">${specificEvent.location}</h2>
      </div>
       

      <br>
       <br>
       <h2>Description</h2>
       <br>
        <p class="description">${specificEvent.description}</p>
        <br>
        <br>
        <h2>Download</h2>
        <br>
        
        <div class="download">

        <div class="appstore">
        <p>App Store</p>
        <img class="qr" src="${specificEvent.appstore}" alt="">
        </div>

        <div class="googleplay">
        <p>Google Play</p>
        <img class="qr" src="${specificEvent.googleplay}" alt="">
        </div>
    </div>

        </div>
       
        </article>
        
        `;

    document.querySelector('#select-event').innerHTML = htmlTemplate;
}





























//VIDEO SECTION//



//ARROWS//
let nextB = document.querySelector('#sslideNext');
let prevB = document.querySelector('#sslidePrev');
let sslider = document.querySelector('#allVideos');


// Slider initial margin
sslider.style.marginLeft = "0vw";

function chek() {
    if (sslider.style.marginLeft >= "0vw") {
        prevB.style.display = "none";
    } else if (sslider.style.marginLeft <= "-200vw") {
        nextB.style.display = "none";
    } else {
        nextB.style.display = "inline-block";
        prevB.style.display = "inline-block";
    }
}

window.onload = chek(); // Check the margins when the page is loaded

nextB.onclick = function () {
    sslider.style.marginLeft = (parseInt(sslider.style.marginLeft) - 80) + 'vw';
    chek();
}

prevB.onclick = function () {
    sslider.style.marginLeft = (parseInt(sslider.style.marginLeft) + 80) + 'vw';
    chek();
}


//OPEN SPECIFIC BOARDGAME DETAILS//

function openD() {
    let bodyid = document.getElementById('bodyid')
    let openedD = document.getElementById('test')
    let opacity = document.getElementById('opacityCover')
    let vid = document.getElementById("test");
    vid.muted = false;
    openedD.classList.add('opendetails');
    opacity.classList.add('opacitycover');
    bodyid.classList.add('bodystopscroll')
   
}

function closeD() {
    let bodyid = document.getElementById('bodyid')
    let openedD = document.getElementById('test')
    let opacity = document.getElementById('opacityCover')
    let vid = document.getElementById("test");
vid.muted = true;
vid.currentTime = 0;
    openedD.classList.remove('opendetails');
    opacity.classList.remove('opacitycover');
    bodyid.classList.remove('bodystopscroll')
}
















/* 



// Order by Date //
_eventsRef.orderBy("start").limit(1).onSnapshot(snapshotData => {
    _events = [];
    snapshotData.forEach(doc => {
        let event = doc.data();
        event.id = doc.id;
        _events.push(event);
    });
    appendBig(_events);

});




// Append BIG to the DOM //
function appendBig(events) {
    let htmlTemplate = "";
    for (let event of events) {
        htmlTemplate += `
     <a href="#select-event" onclick="appendEventDetails('${event.id}');openDetails()"> <article>
      <img class="image_wrap" src="${event.image}">
     
   <div class="event_info">
        <h1 class="event_name">${event.name}</h1>
        
        <div class="icon_wrapper"><img src="images/Calendar.png" alt="" srcset="" class="event_icon"><h2 class="icon_text">${moment(event.start.toDate()).format("DD MMMM YYYY")} - ${moment(event.end.toDate()).format("DD MMMM YYYY")}</h2></div>
        <div class="icon_wrapper">  <img src="images/Location.png" alt="" srcset="" class="event_icon"> <h2 class="icon_text">${event.location}</h2></div>
          
        </div>
      </article></a>
    `;
    }
    document.querySelector('#big').innerHTML = htmlTemplate;
}
*/