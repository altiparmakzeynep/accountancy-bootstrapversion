// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("notesButton");


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

document.querySelector("#addNoteSaveButton").addEventListener("click", postData);
//document.querySelector("#addNoteButton").addEventListener("click", getNotes);





//ADD NOTE
function postData() {
    //customer ID from another JS page
    var cID = sessionStorage.getItem('cID');
    // console.log(cID);

    const data = {
        customerID: cID,
        notes: document.getElementById("writeNote").value,
        date: document.getElementById("calendar").value,

    }

    //sending notes
    var json = JSON.stringify(data);
    var url = "http://192.168.1.108:3000/api/v1/notes/add";
    //var url = `http://e3b5dab837cc.ngrok.io/api/v1/notes/add`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function() {

    }
    xhr.send(json);

    //LOCAL STORAGE
    // const deneme = localStorage.setItem("cıd", data.customerID);
    // const notes = localStorage.setItem("notes", data.notes);
    // const date = localStorage.setItem("date", data.date);
    // console.log(data.notes);
    // console.log(data.date);
    // console.log(deneme);

}
//console.log(localStorage);

var id = localStorage.getItem("id", id);

//Call function
getData();


//get data


function getData() {

    //customer ID from another JS page
    var cID = sessionStorage.getItem('cID');
    //console.log(cID);

    var url = `http://192.168.1.142:3000/api/v1/customers/${id}/details/${cID}`;
    //var url = `http://e3b5dab837cc.ngrok.io/api/v1/customers/${id}/details/${cID}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function() {

        var post = JSON.parse(this.response);
        var array = post.customer;
        console.log(array);
        var arrayCost = array.customerbalance;
        console.log(arrayCost);

        console.log(post);

        let totalAmount = sessionStorage.getItem('totalAmount');


        div = "";
        div += `
                <p class="companyName">${array.customerName} </p>
                <p class="companyInfo">${array.customerInfo}</p>
         `;

        document.querySelector("#customers").innerHTML = div;


        payment = "";


        payment += `
         <p class="moneyIn">Alınan Ödeme: ${arrayCost.inMoney} </p> `;
        document.querySelector("#companyDetail").innerHTML = payment;

        payment += `
                <p class="moneyOut">Yapılan Ödeme: ${arrayCost.outMoney}</p> `;

        document.querySelector("#companyDetail").innerHTML = payment;

        totalAmount = "";
        totalAmount += `
            <p class="total">Toplam Bakiye: </p>
            `;
        document.querySelector("#leftLittleWhite").innerHTML = totalAmount;




    }
    xhr.send();
}

getNotes();
//GET NOTE
function getNotes() {
    var cID = sessionStorage.getItem('cID');
    var url = `http://192.168.1.142:3000/api/v1/customers/${id}/details/${cID}`;
    //var url = `http: //e3b5dab837cc.ngrok.io/api/v1/customers/${id}/details/${cID}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function() {
        var post = JSON.parse(this.response);
        var array = post.customer;
        //console.log(array);
        var arrayNotes = array.notes;


        div = "";

        for (var n = 0; n < arrayNotes.length; n++) {
            console.log(array.notes[n].notes);
            div += `
        <p>${arrayNotes[n].notes}</p>
       `;

            document.querySelector("#notes").innerHTML = div;
        }


    }
    xhr.send();
}