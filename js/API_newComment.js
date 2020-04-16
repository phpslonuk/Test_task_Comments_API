const newCommentButton = document.querySelector('.comment_input_button');
const newCommentTitle = document.querySelector('.comment_input_text');
const newCommentComment = document.querySelector('.comment_input_textarea');

newCommentButton.addEventListener('click', addComment);

function addComment() {

    let data = {
        created_at: 1556025370,
        title: newCommentTitle.value,
        body: newCommentComment.value
    }

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "https://5cbef81d06a6810014c66193.mockapi.io/api/comments";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data))

    newCommentTitle.value = 'Title';
    newCommentComment.value = 'Your comment';

}