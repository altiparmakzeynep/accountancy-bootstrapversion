document.querySelector("#postData").addEventListener("click", postData);

function postData() {
    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value

    }


    var json = JSON.stringify(data);
    var url = "https://16b1c0cfae48.ngrok.io/users/login";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.onload = function() {


            var post = JSON.parse(this.response);
            if (post.status === "success") {
                console.log(post.status);
            } else {
                console.log(post.status + post.description);

            }
            //console.log(xhr.readyState);
            //console.log(data);


        }
        //console.log(xhr);
    xhr.send(json);

}