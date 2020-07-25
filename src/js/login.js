document.querySelector("#postData").addEventListener("click", postData);


function postData() {
    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value

    }


    var json = JSON.stringify(data);

    //var url = "http://192.168.1.152:3000/api/v1/users/login";
    var url = "http://cab0a1ac525b.ngrok.io/api/v1/users/login";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function() {
        var post = JSON.parse(this.response);
        //console.log(post.data);
        var user = post.data;
        //console.log("Umood", post.data.id);
        if (post.status === "success") {
            console.log(post);
            window.location.assign(`customers.html`);
            //LOCAL STORAGE
            const id = localStorage.setItem("id", post.data.id);

        } else {
            alert("Hatalı Kullanıcı Adı veya Şifre");
            console.log(post);

        }
        //console.log(xhr.readyState);
        //console.log(data);


    }

    xhr.send(json);


}