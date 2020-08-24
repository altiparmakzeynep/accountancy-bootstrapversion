// Show Detail
var userID = localStorage.getItem("id");
console.log(userID);
var customerID = localStorage.getItem("customerid");
console.log(customerID);
var baseurl ="https://accountancy-app-api.herokuapp.com/api/v1";
;




//console.log(localStorage);

var id = localStorage.getItem("id", id);

//Call function
getData();


// get data


function getData() {

    //customer ID from another JS page
    // var cID = sessionStorage.getItem('cID');
    //console.log(cID);

    var url = `${baseurl}/customers/${id}/details/${customerID}`;
    //var url = `http://e3b5dab837cc.ngrok.io/api/v1/customers/${id}/details/${cID}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function() {

        var post = JSON.parse(this.response);
        var array = post.customer;
        console.log(array);
        var arrayCost = array.customerbalance;
        console.log(arrayCost);
        var arrayPayment = post.customer.payments;
        console.log(arrayPayment);

        console.log(post);

        let totalAmount = sessionStorage.getItem('totalAmount');


        div = "";
        div += `
                <p class="companyName">${array.customerName} </p>
                <p class="companyInfo">${array.customerInfo}</p>
                <p class="taxNoAndOffice">${array.taxNumber}/${array.taxAddress}</p>
         `;

        document.querySelector("#customers").innerHTML = div;


        payment = "";
        var a = arrayCost.inMoney;
        var b = arrayCost.inMoneyVAT;
        var c = a + b ;
        var d = c + (-arrayCost.outMoney);


        payment += `
         <p class="moneyIn">Alınan Ödeme: ${c}₺ </p> `;
        document.querySelector("#companyDetail").innerHTML = payment;

        payment += `
                <p class="moneyOut">Yapılan Ödeme: ${arrayCost.outMoney}₺</p>
                <p class="inMoneyVAT">KDV Miktarı: ${arrayCost.inMoneyVAT}₺</p>
                <p class="totalMoney">Toplam: ${d}₺</p>  `;
                

        document.querySelector("#companyDetail").innerHTML = payment;

        totalAmount = "";
        totalAmount += `
            <p class="total">Toplam Bakiye: </p>
            `;
        document.querySelector("#leftLittleWhite").innerHTML = totalAmount;


        divpayment = "";
        for (var j = 0; j < arrayPayment.length; j++) {
            if(arrayPayment[j].inOrOut == false){
                var date = arrayPayment[j].date;
                var a = date.slice(0,10);
                divpayment += `
                    <div>
                     <button class="customerpayments-btn" id="${post.customer.payments[j].id}" onClick="getIdP(this)"><img class="crossImage" src=" ./assets/img/delete.png " width="9" height="9"></button>
                     <p class="historyTexts"> - ${arrayPayment[j].cost}₺  -  ${a}</p>
                    </div>
                    `;
            }else{
                var date = arrayPayment[j].date;
                var a = date.slice(0,10);
                divpayment += `
                    <div>
                     <button class="customerpayments-btn" id="${post.customer.payments[j].id}" onClick="getIdP(this)"><img class="crossImage" src=" ./assets/img/delete.png " width="9" height="9"></button>
                     <p class="historyTexts"> + ${arrayPayment[j].cost}₺  -  ${a}</p>
                     </div>
                    `;
            }
            document.querySelector("#history").innerHTML = divpayment;
        }




    }
    xhr.send();
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


        var arrayInfo = post.data.userbalance;
        var inMoney = arrayInfo.inMoney.toFixed(2);
        var amountVAT = arrayInfo.amountVAT.toFixed(2);
        var inMoneyVAT = arrayInfo.inMoneyVAT.toFixed(2);
        var outMoney = arrayInfo.outMoney.toFixed(2);
        var totalMoney = arrayInfo.totalMoney.toFixed(2);



        

            userInfo = "";
            userInfo += `
            <p class="nameSurname">${post.data.fullName}</p>
            <p class="homePageCompanyName">${post.data.companyName}</p>`;
            document.querySelector("#userInfo").innerHTML = userInfo;
            console.log(post.data.fullName);

            topInfo = "";
            topInfo += `
            <p class="inWithKDV">KDV'li Alınan:  ${inMoneyVAT}</p>
            <p class="amountofKDV">KDV Miktarı: ${amountVAT}</p>
            <p class="inWithoutKDV">KDV'siz Alınan: ${inMoney}</p>
            <p class="out">Ödenen: ${outMoney}</p>`;
            document.querySelector("#topInfo").innerHTML = topInfo;


            totalAmount = "";
            totalAmount += `
            <p class="total">Toplam Bakiye: ${totalMoney}</p>
            `;
            document.querySelector("#leftLittleWhite").innerHTML = totalAmount;


            localStorage.setItem('totalAmount', post.data.userbalance.totalMoney);

        
    }
    xhr.send();
}
getInfo();



getNotes();
//GET NOTE
function getNotes() {
    // var cID = sessionStorage.getItem('cID');
    var url = `${baseurl}/customers/${id}/details/${customerID}`;
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
            <button class="customernotes-btn"  id="${arrayNotes[n].id}" onClick="getIdN(this)"><img src=" ./assets/img/delete.png " width="9" height="9"></button>
             <p>${arrayNotes[n].notes}</p>
            `;

            document.querySelector("#notes").innerHTML = div;
        }


    }
    xhr.send();
}