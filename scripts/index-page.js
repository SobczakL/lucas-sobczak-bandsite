// comments array holds each form input as an object. 
const comments = [
    {name: "Miles Acosta", date: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
    {name: "Emilie Beach", date: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name: "Connor Walton", date: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."}
];

const commentSectionForm = document.querySelector(".comments__form-container");
const commentSubmit = document.querySelector(".comments__form--submit")

//createComment function creates html elements and sets element values pulled from comments array
function createComment(comment){
    const commentEl = document.createElement("div");
    const commentContent = document.createElement("div");
    const commentBreak = document.createElement("hr");
    const commentContentImg = document.createElement("div");
    const commentContentContainer = document.createElement("div");
    const commentContentSeparator = document.createElement("div");
    const commentContentText = document.createElement("p")
    const commentContentName = document.createElement("span");
    const commentContentDate = document.createElement("span");

    commentEl.classList.add("comment");
    commentContent.classList.add("comment__content");
    commentBreak.classList.add("comment__break");
    commentContentImg.classList.add("comment__content-img");
    commentContentContainer.classList.add("comment__content-container");
    commentContentSeparator.classList.add("comment__content-separator");
    commentContentText.classList.add("comment__content-text");
    commentContentName.classList.add("comment__content-name");
    commentContentDate.classList.add("comment__content-date");
    
    commentContentName.innerText = comment.name;
    commentContentDate.innerText = comment.date;
    commentContentText.innerText = comment.comment;

    commentContentSeparator.append(commentContentName,commentContentDate);
    commentContentContainer.append(commentContentSeparator, commentContentText);
    commentContent.append(commentContentImg, commentContentContainer);
    commentEl.append(commentContent, commentBreak);

    return commentEl;
}

//renderComment outputs a comment for each object in the comments array
function renderComment(){
    const newCommentEl = document.querySelector(".new-comment");
    newCommentEl.innerHTML = "";

//  For loop below begins at the last index of the array in order to output later comments below newer ones.
    
    // for(let i = 0; i < comments.length; i++)
    for(let i = comments.length - 1; i >= 0; i--){
        newCommentEl.append(createComment(comments[i]));
    }
}

//errorState adds an error class and then removes it once user click errored input field
function errorState(input){
    const error = document.querySelector(input);
    error.classList.add("error");
    error.addEventListener("focus", function(){
        error.classList.remove("error")
    });
}

//commentSubmitHandler takes in the submit event and creates a new comments object with stored values
function commentSubmitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    if(name === ""){
        alert("Name is required");
        errorState(".comments__form-name--input");
    } else if(comment === ""){
        alert("You haven't typed a comment")
        errorState(".comments__form-comment--input");
    } else {
        const resetNameBorder = document.querySelector(".comments__form-name--input");
        const resetCommentBorder = document.querySelector(".comments__form-comment--input");
        resetNameBorder.classList.remove("error");
        resetCommentBorder.classList.remove("error");
    }
    const dateStamp = new Date();
    const dateString = dateStamp.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric"
    });
    const date = `${dateString}`;

    const commentData = {
        name: name,
        comment: comment,
        date: date
    };

    //reset form field once values are stored
    commentSectionForm.reset();
    //takes form values and adds a new object into the comments array
    comments.push(commentData);
    renderComment();
}

commentSubmit.addEventListener("click", commentSubmitHandler);
renderComment();