// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");




// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal.style.display = "block";
}

/*When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//post notes
document.querySelector("#takePayment").addEventListener("click", postData);

function postData() {
    const data = {
        custorID: "1",
        notes: document.getElementById("writeNote").value,
        date: document.getElementById("calendar").value,

    }


    var json = JSON.stringify(data);
    var url = "http://192.168.1.152:3000/notes/add";
    //var url = "https://accountancy-app-api.herokuapp.com//notes/add";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function() {
        //console.log(xhr.status);
        //console.log(xhr.readyState);
        //console.log(data);
    }
    xhr.send(json);

    //LOCAL STORAGE
    const notes = localStorage.setItem("notes", data.notes);
    const date = localStorage.setItem("date", data.date);
}
console.log(localStorage);