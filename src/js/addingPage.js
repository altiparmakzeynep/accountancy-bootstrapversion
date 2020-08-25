document.querySelector("#saveButton").addEventListener("click", postData);
let id = localStorage.getItem("id");
var baseurl = "https://accountancy-app-api.herokuapp.com/api/v1";

getInfo();


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
    
    var taxNumber2 = document.getElementById("taxNumberInput").value;
    var number=document.getElementById("numberInput").value;
    var companyName2 = document.getElementById("companyNameInput").value;

    if (number.length == 11 || number.length ==10 || number.length == 7){
        var phoneNumber = number;
    }else{
        alert('telefon numarası hatalı')
        window.location.reload();
    }
    if(taxNumber2.length ==10 ){
        var taxNumber= taxNumber2;
    }else{
        alert('vergi numarsı eksik girilemez')
        window.location.reload();
    }   
    if(companyName2.length !=0){
        var customerName = companyName2;
    }else{
        alert('şirket adı alanı bos bırakılamaz')
        window.location.reload();
    }
       



    const data = {
        userID: id,
        customerInfo: document.getElementById("companyInput").value,
        customerName: customerName,
        whichCategory: whichCategory,
        phoneNumber: phoneNumber,
        taxNumber: taxNumber,
        taxAddress: document.getElementById("taxOfficeInput").value

    }
    


    var json = JSON.stringify(data);
    var url = `${baseurl}/customers/add`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function () {
        console.log("response", this.response);
        window.location = "suppliersAndCustomers.html";
    }

    xhr.send(json);
    console.log(data);
    e.preventDefault();

}


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
           <p> ${post.data.companyName}${post.data.companyInfo}</p>`;
            document.querySelector(".homePageCompanyName").innerHTML = companyName;
            console.log(post.data.fullName);

            var arrayInfo = post.data.userbalance;
            var inMoney = arrayInfo.inMoney.toFixed(2);
            var amountVAT = arrayInfo.amountVAT.toFixed(2);
            var inMoneyVAT = arrayInfo.inMoneyVAT.toFixed(2);
            var outMoney = arrayInfo.outMoney.toFixed(2);
            var totalMoney = arrayInfo.totalMoney.toFixed(2);
           
            
           topInfo = "";
            topInfo += `
            <p class="inWithKDV">KDV'li Alınan:  ${inMoneyVAT}</p>
            <p class="amountofKDV">KDV Miktarı: ${amountVAT}</p>
            <p class="inWithoutKDV">KDV'siz Alınan: ${inMoney}</p>
            <p class="out">Ödenen: ${outMoney}</p>`;
            document.querySelector(".topInfo").innerHTML = topInfo;


            totalAmount = "";
            totalAmount += `
            <p class="total">Toplam Bakiye: ${totalMoney}</p>
            `;
            document.querySelector(".leftLittleWhite").innerHTML = totalAmount;


            localStorage.setItem('totalAmount', post.data.userbalance.totalMoney);

        
    }
    xhr.send();
}
getInfo();