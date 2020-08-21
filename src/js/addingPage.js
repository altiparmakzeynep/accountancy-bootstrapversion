document.querySelector("#saveButton").addEventListener("click", postData);
let id = localStorage.getItem("id");
var baseurl = "https://accountancy-app-api.herokuapp.com/api/v1";

// getInfo();


function postData(e) {

    // var id = localStorage.getItem("id", id);
    var Category = document.getElementsByName('customerAndSupplierRadioBtn');

    for (var i = 0; i < Category.length; i++) {
        if (Category[i].checked) {
            console.log('checked:' + Category[i].value);
            var whichCategory = Category[i].value;

        }
    }
    console.log(whichCategory);
    localStorage.setItem("category", whichCategory);
    
    var number=document.getElementById("numberInput").value;
    if (number.length == 13){
        var phoneNumber = number;
    }else{
        alert('Telefon numarası eksik ya da hatalı. Tekrar giriniz.');
    }



    const data = {
        userID: id,
        customerInfo: document.getElementById("companyInput").value,
        customerName: document.getElementById("companyNameInput").value,
        whichCategory: whichCategory,
        phoneNumber: phoneNumber,
        taxNumber: document.getElementById("taxNumberInput").value,
        taxAddress: document.getElementById("taxOfficeInput").value

    }


    var json = JSON.stringify(data);
    var url = `${baseurl}/customers/add`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function () {
        window.location = "suppliersAndCustomers.html";
    }

    xhr.send(json);
    // console.log(data);
    e.preventDefault();
}

// function addCustomer() {
//     window.location = "suppliersAndCustomers.html";


// }


function getInfo() {
    var url = `${baseurl}/customers/${id}`;
    //var url = `http://e3b5dab837cc.ngrok.io/api/v1/customers/${id}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function() {


        var post = JSON.parse(this.response);
        console.log(post);
        console.log(post.data.customers);

        var array = post.data.customers;
        console.log(array);
        // var totalAmount = post.data.userbalance.totalMoney;
        // console.log(post.data);
        // console.log(totalAmount);

        console.log(post.data.fullName);



        

            userName = "";
            userName += `
            ${post.data.fullName}`;
            document.querySelector(".nameSurname").innerHTML = userName;
            console.log(post.data.fullName);

            
            companyName = "";
            companyName += `
            ${post.data.companyName}`;
            document.querySelector(".homePageCompanyName").innerHTML = companyName;
            console.log(post.data.fullName);

            topInfo = "";
            topInfo += `
            <p class="inWithKDV">KDV'li Alınan:  ${post.data.userbalance.inMoneyVAT}</p>
            <p class="amountofKDV">KDV Miktarı: ${post.data.userbalance.amountVAT}</p>
            <p class="inWithoutKDV">KDV'siz Alınan: ${post.data.userbalance.inMoney}</p>
            <p class="out">Ödenen: ${post.data.userbalance.outMoney}</p>`;
            document.querySelector(".topInfo").innerHTML = topInfo;


            totalAmount = "";
            totalAmount += `
            <p class="total">Toplam Bakiye: ${post.data.userbalance.totalMoney}</p>
            `;
            document.querySelector(".leftLittleWhite").innerHTML = totalAmount;


            localStorage.setItem('totalAmount', post.data.userbalance.totalMoney);

        
    }
    xhr.send();
}
getInfo();