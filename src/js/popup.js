document.querySelector("#paymentSaveButton").addEventListener("click", postData);
document.querySelector("#getpaidSaveButton").addEventListener("click", postData);


function postData() {

    var id = localStorage.getItem("id", id);
    var cID = sessionStorage.getItem('cID');


    if (paymentSaveButton.clicked == true) {
        const data = {
            userID: id,
            customerID: cID,
            cost: parseInt(document.getElementById("paymentAmount").value),
            infoKDV: false,
            inOrOut: true,
            date: document.getElementById("paymentCalendar").value
        }
    } else {
        const data = {
            userID: id,
            customerID: cID,
            cost: document.getElementById("getpaidAmount").value,
            infoKDV: true,
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

}

getOperation();

function getOperation() {

    var cID = sessionStorage.getItem('cID');
    var url = `http://192.168.1.152:3000/api/v1/customers/${id}/details/${cID}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function() {

        var post = JSON.parse(this.response);

    }
}