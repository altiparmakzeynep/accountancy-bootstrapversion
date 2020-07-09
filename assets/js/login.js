document.querySelector("#postData").addEventListener("click", postData);

function postData() {
    const data = {
        username: "seyithanerdogan",
        password: "12345"

    }
    var json = JSON.stringify(data);
    var url = "http://192.168.1.112:3000/todos";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.onload = function() {
        console.log(xhr.status);
        console.log(xhr.readyState);
        console.log(data);
    }
    xhr.send(json);
}