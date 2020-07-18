document.querySelector("#saveButton").addEventListener("click", postData);

function postData() {
    const data = {
        userID: "9",
        customerInfo: document.getElementById("item1").value,
        customerName: document.getElementById("item2").value,
        phoneNumber: document.getElementById("item3").value,
        taxNumber: document.getElementById("item4").value,
        taxAddress: document.getElementById("item5").value

    }


    var json = JSON.stringify(data);
    //var url = "https://16b1c0cfae48.ngrok.io/users/login";
    //var url = "http://192.168.1.152:3000/customers/add";
    var url = "https://accountancy-app-api.herokuapp.com/customers/add";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function() {


        var post = JSON.parse(this.response);
        if (post.status === "success") {
            console.log(post);
        } else {
            console.log(post);

        }
        console.log(xhr.readyState);
        console.log(data);


    }

    xhr.send(json);

}