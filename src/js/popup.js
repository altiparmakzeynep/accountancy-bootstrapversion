document.querySelector("#paymentSaveButton").addEventListener("click", postPayment);
document.querySelector("#getpaidSaveButton").addEventListener("click", postGetpaid);




function postPayment() {

    var id = localStorage.getItem("id", id);
    var cID = sessionStorage.getItem('cID');

    const data = {
        userID: id,
        customerID: cID,
        cost: parseInt(document.getElementById("paymentAmount").value),
        infoKDV: false,
        inOrOut: false,
        date: document.getElementById("paymentCalendar").value
    }
    var json = JSON.stringify(data);
    var url = "http://192.168.1.152:3000/api/v1/payments/add";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.onload = function() {

    }

    xhr.send(json);

}


function postGetpaid() {

    var id = localStorage.getItem("id", id);
    var cID = sessionStorage.getItem('cID');

    const data = {
        userID: id,
        customerID: cID,
        cost: parseInt(document.getElementById("getpaidAmount").value),
        infoKDV: false,
        inOrOut: true,
        date: document.getElementById("getpaidCalendar").value
    }
    var json = JSON.stringify(data);
    var url = "http://192.168.1.152:3000/api/v1/payments/add";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.onload = function() {

    }

    xhr.send(json);

}




getOperation();

function getOperation() {

    var cID = sessionStorage.getItem('cID');
    var url = `http://192.168.1.152:3000/api/v1/customers/${id}/details/${cID}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function() {
        var post = JSON.parse(this.response);
        console.log(post.customer.payments);
        var arrayPayment = post.customer.payments;
        console.log(arrayPayment);

        div = "";
        for (var j = 0; j < arrayPayment.length; j++) {
            div += `<p class="historyTexts">${arrayPayment[j].cost}£- ${arrayPayment[j].date}</p>`;
            document.querySelector("#history").innerHTML = div;
        }
    }
    xhr.send();
}