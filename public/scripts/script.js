const btnSalvar = document.getElementById("btn-salvar");

document.addEventListener("DOMContentLoaded", () => updatePosts());

btnSalvar.addEventListener("click", newPost);

function updatePosts() {
    fetch("http://localhost:3005/api/all")
        .then((res) => res.json())
        .then((json) => {
            let postElements = "";

            let posts = JSON.parse(json);
            posts.forEach((post) => {
                let postElement = `<div class="card mb-4" id=${post.id}>
                    <div class="card-header">
                        <h5 class="card-title">${post.title}</h5>
                    </div>
                    <div class="card-body">
                        <div class="card-text">${post.description}</div>
                    </div>
                </div>`;
                postElements += postElement;
            });
            document.getElementById("posts").innerHTML = postElements;
        });
}

function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    let post = { title: title, description: description };

    const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post),
    };

    fetch("http://localhost:3005/api/new", options).then((res) => {
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    });
}

function deletePost() {}
