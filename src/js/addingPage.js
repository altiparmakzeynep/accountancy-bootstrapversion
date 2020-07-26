document.querySelector("#saveButton").addEventListener("click", postData);




function postData() {

    var id = localStorage.getItem("id", id);
    console.log(id);


    const data = {
        userID: id,
        customerInfo: document.getElementById("companyInput").value,
        customerName: document.getElementById("companyNameInput").value,
        phoneNumber: document.getElementById("numberInput").value,
        taxNumber: document.getElementById("taxNumberInput").value,
        taxAddress: document.getElementById("taxOfficeInput").value

    }


    var json = JSON.stringify(data);
    var url = "http://e3b5dab837cc.ngrok.io/api/v1/customers/add";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function() {

    }

    xhr.send(json);


}