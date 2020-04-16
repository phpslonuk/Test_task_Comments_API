
function loadXMLDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            let response = JSON.parse(xhttp.responseText);
            let out = "";
            for (let i = 0; i < response.length; i++) {
                out += `<div class="all_comments_item"> <h4 class="all_comments_title">${response[i].title}</h4>
            <p class="all_comments_text">${response[i].body.slice(0, 250)}</p>
            <button class="all_comments_button" onclick="showSingleComment(${response[i].id})">Read more</button> 
            </div>`
            }

            document.querySelector('.all_comments_list').innerHTML = out;
        }
    };
    xhttp.open("GET", "https://5cbef81d06a6810014c66193.mockapi.io/api/comments", true);
    xhttp.send();
}

function loadSingleComment(id) {
    let url = "https://5cbef81d06a6810014c66193.mockapi.io/api/comments/" + id;
    console.log(url);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            let response = JSON.parse(xhttp.responseText);
            console.log(response.id);
            let out = `<h2 class="single_comment_title">${response.title}</h2>
                        <p class="single_comment_text">${response.body}</p>`;

            document.querySelector('.wrapper_single_comment').innerHTML = out;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function showSingleComment(id) {
    document.querySelector('.all_comments_list').style.display = 'none';
    let out = `<a class="arrow-3 arrow-3-no-border" href="comments.html">
                <svg class="arrow-3-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <g fill="none" stroke="#337AB7" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                        <circle class="arrow-3-iconcircle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-3-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                    </g>
                </svg> Back to comments
            </a>`
    document.querySelector('.header_content').innerHTML = out;
    loadSingleComment(id);
}


loadXMLDoc();
