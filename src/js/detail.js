// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");


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
var id = localStorage.getItem("id", id);

document.querySelector("#addNoteButton").addEventListener("click", postData);
document.querySelector("#addNoteButton").addEventListener("click", getData);




function postData() {
    const data = {
        customerID: "",
        notes: document.getElementById("writeNote").value,
        date: document.getElementById("calendar").value,

    }

    //sending notes
    var json = JSON.stringify(data);
    var url = "http://192.168.1.152:3000/api/v1/notes/add";
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
    console.log(data.notes);
    console.log(data.date);

}
//console.log(localStorage);

var id = localStorage.getItem("id", id);

//writing note to page
getData();

function getData() {
    var url = `http://192.168.1.152:3000/api/v1/customers/${id}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function() {

        //console.log(this.response);
        var post = JSON.parse(this.response);
        // console.log(post.data.customers);
        var array = post.data.customers;
        // console.log(post.data);

        // console.log(post.data.companyName);
        // console.log(post.data.companyInfo);
        // console.log(post.data.fullName);




        ul = document.createElement('ul');
        document.getElementById('customers').appendChild(ul);

        array.forEach(function(item) {
            let li = document.createElement('li');
            //div.classList = "customers";

            ul.appendChild(li);
            div = "";
            for (var i = 0; i < array.length; i++) {
                div += `
                <p class="companyName">${array[i].customerName}</p>
                <p class="companyInfo">${array[i].customerInfo}</p>`;
                //div.innerHTML += array[i].customerName;
                document.querySelector("#customers").innerHTML = div;
            }
        });







    }
    xhr.send();
}