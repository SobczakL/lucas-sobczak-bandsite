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
    const showBtnContainer = document.createElement("div");
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
    showBtnContainer.classList.add("show__btnContainer")
    showBtn.classList.add("show__btn");
    showInfo.classList.add("show__info");
    showDateContainer.classList.add("show__date", "show__date-item");
    showDateHeader.classList.add("show__date-header");
    showDateInfo.classList.add("show__date-info")
    showVenueContainer.classList.add("show__venue", "show__date-item");
    showVenueHeader.classList.add("show__venue-header");
    showVenueInfo.classList.add("show__venue-info");
    showLocationContainer.classList.add("show__location", "show__date-item");
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
        showBtnContainer.append(showBtn);
        showEl.append(showDateContainer, showVenueContainer, showLocationContainer, showBtnContainer);

        return showEl;
    } else {
        showDateContainer.append(showDateHeader, showDateInfo);
        showVenueContainer.append(showVenueHeader, showVenueInfo);
        showLocationContainer.append(showLocationHeader, showLocationInfo);
        showInfo.append(showDateContainer, showVenueContainer, showLocationContainer);
        showEl.append(showInfo, showBtn);

        return showEl;
    };

}

function renderShow(){
    const newShow = document.querySelector(".show-dates");
    newShow.innerHTML = "";

    if(screenWidth > 779){
        const showHeaders = document.createElement("div");
        const showDateHeader = document.createElement("p");
        const showVenueHeader = document.createElement("p");
        const showLocationHeader = document.createElement("p");
        const showHeaderPlaceholder = document.createElement("p");


        showHeaders.classList.add("show__headers");
        showDateHeader.classList.add("show__date-header", "show__headers-item");
        showVenueHeader.classList.add("show__venue-header", "show__headers-item");
        showLocationHeader.classList.add("show__location-header", "show__headers-item");
        showHeaderPlaceholder.classList.add("show__header-placeholder", "show__headers-item")
        
        showDateHeader.innerText = headers[0];
        showVenueHeader.innerText = headers[1];
        showLocationHeader.innerText = headers[2];

        showHeaders.append(showDateHeader, showVenueHeader, showLocationHeader, showHeaderPlaceholder);
        newShow.append(showHeaders);

        console.log(newShow);
    }

    for (show of shows){
        const showEl = createShow(show);
        newShow.append(showEl);

        const showDivider = document.createElement("hr");
        showDivider.classList.add("show__divider");
        newShow.append(showDivider);
    }
}

renderShow();