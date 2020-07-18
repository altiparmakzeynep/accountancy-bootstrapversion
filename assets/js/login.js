/*document.querySelector("#postData").addEventListener("click", postData);

function postData() {
    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value

    }


    var json = JSON.stringify(data);
    var url = "http://192.168.1.152:3000/users/login";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function() {


        var post = JSON.parse(this.response);
        if (post.status === "success") {
            //window.location.href = 'customers.html';
            window.location.assign("customers.html");
            console.log(post.status);
        } else {
            alert("Kullanıcı adı veya şifre hatalı!");

        }
        //console.log(xhr.readyState);
        //console.log(data);



        xhr.send(json);

    }
}*/
document.querySelector("#postData").addEventListener("click", postData);

function postData() {
    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value

    }


    var json = JSON.stringify(data);
    //var url = "https://16b1c0cfae48.ngrok.io/users/login";
    //var url = "http://192.168.1.152:3000/users/login";
    var url = "https://accountancy-app-api.herokuapp.com/users/login";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function() {


        var post = JSON.parse(this.response);
        console.log(post);
        if (post.status === "success") {
            console.log(post);
            window.location.assign("customers.html");
        } else {
            console.log(post);

        }
        //console.log(xhr.readyState);
        //console.log(data);


    }

    xhr.send(json);

}