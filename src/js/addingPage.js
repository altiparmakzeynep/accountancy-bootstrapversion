document.querySelector("#saveButton").addEventListener("click", postData);
let id = localStorage.getItem("id");
var baseurl ="https://accountancy-app-api.herokuapp.com/api/v1";

getInfo();


function postData(e) {

    // var id = localStorage.getItem("id", id);
    var Category = document.getElementsByName('customerAndSupplierRadioBtn');

    for(var i = 0; i < Category.length; i++){
        if(Category[i].checked){
            console.log('checked:' + Category[i].value);
            var whichCategory = Category[i].value;

        }}
        console.log(whichCategory);
        localStorage.setItem("category",whichCategory);
        


    const data = {
        userID: id,
        customerInfo: document.getElementById("companyInput").value,
        customerName: document.getElementById("companyNameInput").value,
        whichCategory: whichCategory,
        phoneNumber: document.getElementById("numberInput").value,
        taxNumber: document.getElementById("taxNumberInput").value,
        taxAddress: document.getElementById("taxOfficeInput").value

    }


    var json = JSON.stringify(data);
    var url = `${baseurl}/customers/add`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function() {
        window.location="suppliersAndCustomers.html";

    }

    xhr.send(json);
    console.log(data);
    e.preventDefault();
}

function addCustomer() {
    window.location.href = 'customers.html';


}


