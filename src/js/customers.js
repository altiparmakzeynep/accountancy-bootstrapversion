var id = localStorage.getItem("id", id);
var baseurl ="https://accountancy-app-api.herokuapp.com/api/v1";



document.querySelector('.customersDetailButton').addEventListener('click',Customers);

document.querySelector('.suppliersDetailButton').addEventListener('click',Suppliers);

function Customers(){
    var category = "1";
    localStorage.setItem("category",category);
    // window.location ="suppliersAndCustomersDetail.html"
}

function Suppliers(){
    var category = "0";
    localStorage.setItem("category",category);
    // window.location = "suppliersAndCustomersDetail.html"
}

getData();

function getData() {
    var url = `${baseurl}/customers/${id}`;
    //var url = `http://e3b5dab837cc.ngrok.io/api/v1/customers/${id}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function() {


        var post = JSON.parse(this.response);
        console.log(post);
        console.log(post.data.customers);

        
        console.log(array);
        // var totalAmount = post.data.userbalance.totalMoney;
        // console.log(post.data);
        // console.log(totalAmount);
        var array = post.data.userbalance;
        var inMoney = array.inMoney.toFixed(2);
        var amountVAT = array.amountVAT.toFixed(2);
        var inMoneyVAT = array.inMoneyVAT.toFixed(2);
        var outMoney = array.outMoney.toFixed(2);
        var totalMoney = array.totalMoney.toFixed(2);



            

            userInfo = "";
            userInfo += `
            <p class="nameSurname">${post.data.fullName}</p>
            <p class="homePageCompanyName">${post.data.companyName}</p>`;
            document.querySelector("#userInfo").innerHTML = userInfo;

            topInfo = "";
            topInfo += `
            <p class="inWithKDV">KDV'li Alınan:  ${inMoney}</p>
            <p class="amountofKDV">KDV Miktarı: ${amountVAT}</p>
            <p class="inWithoutKDV">KDV'siz Alınan: ${inMoneyVAT}</p>
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