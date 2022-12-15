let comments = [
    {name: "Miles Acosta", date: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
];

const commentSectionForm = document.querySelector(".comments__form-container");
const commentSubmit = document.querySelector(".comments__form--submit")

function createComment(comment){
    const commentEl = document.createElement("article");
    commentEl.classList.add("comment");

    // const photoEl = document.createElement("img");

    const nameEl = document.createElement("span");
    nameEl.innerText = comment.name;

    const dateEl = document.createElement("span");
    dateEl.innerText = comment.date;

    const textEl = document.createElement("span");
    textEl.innerText = comment.comment;

    commentEl.append(nameEl, dateEl, textEl);
    return commentEl;
}

function renderComment(){
    const newCommentEl = document.querySelector(".comments__new");

    newCommentEl.innerHTML = "";

    for(let i = comments.length - 1; i >= 0; i--){
        newCommentEl.appendChild(createComment(comments[i]));
    }
}

function commentSubmitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
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

    commentSectionForm.reset();
    comments.push(commentData);
    console.table(commentData);
    renderComment();
}

commentSubmit.addEventListener("click", commentSubmitHandler);
renderComment();