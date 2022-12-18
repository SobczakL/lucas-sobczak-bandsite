const shows = [
    {date: "Tue Sept 21 2021",venue: "Pier 3 East", location: "San Francisco, CA"},
    {date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA"},
    {date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA"},
    {date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA"},
    {date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA"},
    {date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco, CA"},
];

const headers = [
    "DATE",
    "VENUE",
    "LOCATION",
];

const screenWidth = window.screen.width;

//createShow creates html elements and sets element values pull from shows array
function createShow(show){
    const showEl = document.createElement("div");
    const showBtn = document.createElement("button");
    const showInfo = document.createElement("div");
    const showDateContainer = document.createElement("div");
    const showDateHeader = document.createElement("p");
    const showDateInfo = document.createElement("p");
    const showVenueContainer = document.createElement("div");
    const showVenueHeader = document.createElement("p");
    const showVenueInfo = document.createElement("p");
    const showLocationContainer = document.createElement("div");
    const showLocationHeader = document.createElement("p");
    const showLocationInfo = document.createElement("p");
    const showHeaders = document.createElement("div");
    
    showEl.classList.add("show")
    showBtn.classList.add("show__btn");
    showInfo.classList.add("show__info");
    showDateContainer.classList.add("show__date");
    showDateHeader.classList.add("show__date-header");
    showDateInfo.classList.add("show__date-info")
    showVenueContainer.classList.add("show__venue");
    showVenueHeader.classList.add("show__venue-header");
    showVenueInfo.classList.add("show__venue-info");
    showLocationContainer.classList.add("show__location");
    showLocationHeader.classList.add("show__location-header");
    showLocationInfo.classList.add("show__location-info");
    showHeaders.classList.add("show__headers");

    showBtn.innerHTML = "BUY TICKETS";

    showDateHeader.innerText = headers[0];
    showVenueHeader.innerText = headers[1];
    showLocationHeader.innerText = headers[2];
    showDateInfo.innerText = show.date;
    showVenueInfo.innerText = show.venue;
    showLocationInfo.innerText = show.location;
    
    if(screenWidth >= 780){
        showDateContainer.append(showDateInfo);
        showVenueContainer.append(showVenueInfo);
        showLocationContainer.append(showLocationInfo);
        showInfo.append(showDateContainer, showVenueContainer, showLocationContainer);
        showEl.append(showInfo, showBtn)

        return showEl
    } else {
        showDateContainer.append(showDateHeader, showDateInfo);
        showVenueContainer.append(showVenueHeader, showVenueInfo);
        showLocationContainer.append(showLocationHeader, showLocationInfo);
        showInfo.append(showDateContainer, showVenueContainer, showLocationContainer);
        showEl.append(showInfo, showBtn);

        return showEl
    }

}

function renderShow(){
    const newShow = document.querySelector(".show-dates");
    newShow.innerHTML = "";

    if(screenWidth >= 780){
        const showHeaders = document.createElement("div");
        const showDateHeader = document.createElement("p");
        const showVenueHeader = document.createElement("p");
        const showLocationHeader = document.createElement("p");

        showHeaders.classList.add("show__headers");
        showDateHeader.classList.add("show__date-header");
        showVenueHeader.classList.add("show__venue-header");
        showLocationHeader.classList.add("show__location-header");
        
        showDateHeader.innerText = headers[0];
        showVenueHeader.innerText = headers[1];
        showLocationHeader.innerText = headers[2];

        showHeaders.append(showDateHeader, showVenueHeader, showLocationHeader);

        newShow.append(showHeaders);
        console.log(newShow);
    }

    for(let i = shows.length - 1; i >= 0; i--){
        newShow.append(createShow(shows[i]));
    }
}

renderShow();