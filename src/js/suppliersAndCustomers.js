var id = localStorage.getItem("id", id);
var category = localStorage.getItem("category", category);
var baseurl = "https://accountancy-app-api.herokuapp.com/api/v1";

getData();

function getData() {
    var url = `${baseurl}/customers/${id}`;
    //var url = `http://e3b5dab837cc.ngrok.io/api/v1/customers/${id}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function () {

        var post = JSON.parse(this.response);
        console.log(post);
        console.log(post.data.customers);

        var array = post.data.customers;

        var customerFiltered = post.data.customers.filter((item) => item.whichCategory == 1)
        var supplierFiltered = post.data.customers.filter((item) => item.whichCategory == 0)
        console.log("customerFiltered", customerFiltered)

        ul = document.createElement('ul');

        document.getElementById('rightBackground').appendChild(ul);

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

            topInfo = "";
            topInfo += `
            <p class="inWithKDV">KDV'li Alınan:  ${post.data.userbalance.inMoney}₺</p>
            <p class="amountofKDV">KDV Miktarı: ${post.data.userbalance.amountVAT}₺</p>
            <p class="inWithoutKDV">KDV'siz Alınan: ${post.data.userbalance.inMoneyVAT}₺</p>
            <p class="out">Ödenen: ${post.data.userbalance.outMoney}₺</p>`;
            document.querySelector("#topInfo").innerHTML = topInfo;

            totalAmount = "";
            totalAmount += `
            <p class="total">Toplam Bakiye: ${post.data.userbalance.totalMoney}₺</p>
            `;
            document.querySelector("#leftLittleWhite").innerHTML = totalAmount;


            localStorage.setItem('totalAmount', post.data.userbalance.totalMoney);
    }
    xhr.send();
}
function showData(item) {
    var custid = item.id;
    localStorage.setItem("customerid", custid);
    window.location = "detail.html";
}
function deneme(item){
    var customerid = item.id;
    
    localStorage.setItem("customerid", customerid);
    war();
}

//DELETING DATA

function deleteData() {
    //Find customer id
    // var customerid = item.id;

    var customerid = localStorage.getItem("customerid");


    // Delete POST
    var urldelete = `${baseurl}/customers/delete/${customerid}`
    var xhrdelete = new XMLHttpRequest();
    xhrdelete.open('DELETE', urldelete, true);
    xhrdelete.setRequestHeader('Content-type', 'application/json; charset=UTF-8');


    xhrdelete.onload = function () {
        var result = JSON.parse(xhrdelete.response);
        window.location.reload();
    }
    xhrdelete.send();

}
// Get the modal
var modal = document.getElementById("modal");
console.log('modal', modal);


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
 function war() {
    // var modal1 = localStorage.getItem('modal');
    
    console.log(modal);
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.querySelector('.yes').addEventListener('click',deleteData);
document.querySelector('.no').addEventListener('click',function(){window.location.reload();});


