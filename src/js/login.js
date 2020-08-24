var baseurl ="https://accountancy-app-api.herokuapp.com/api/v1";

document.querySelector("#postData").addEventListener("click", postData);


function postData() {
    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value

    }
    var json = JSON.stringify(data);

    var url = `${baseurl}/users/login`;
    //var url = "http://e3b5dab837cc.ngrok.io/api/v1/users/login";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function() {
        var post = JSON.parse(this.response);
        var user = post.data;
        if (post.status === "success") {
            window.location.assign(`customers.html`);

            //LOCAL STORAGE
            localStorage.setItem("id", post.data.id);

        } else {
            alert("Hatalı Kullanıcı Adı veya Şifre");
            console.log(post);

        }
    }
    xhr.send(json);
}