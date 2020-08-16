var id = localStorage.getItem("id", id);
var category = localStorage.getItem("category", category);


getData();



function getData() {
    var url = `http://192.168.1.142:3000/api/v1/customers/${id}`;
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



        ul = document.createElement('ul');


        document.getElementById('rightBackground').appendChild(ul);

        array.forEach(function(item) {
            let div = document.createElement('div');
            div.classList = "customers";

            ul.appendChild(div);
            div = "";
            console.log("category", category);


            // FOR LOOP
            for (var i = 0; i < post.data.customers.length; i++) {
                // console.log(array[i].whichCategory);
                // var category = localStorage.getItem("category", category);
                console.log("category", category);


                if(post.data.customers[i].whichCategory ==  category  ){
                    //Every buttons have own id from customers array
                    console.log(post.data.customers[i].whichCategory);
                div += `
                <button class="customers" id = "${array[i].id}" onclick="showData(this)">
                    <p class="companyName">Şirket adı: ${array[i].customerName}</p>
                    <p class="companyName">Şirket ünvanı: ${array[i].customerInfo}</p>
                  
                    <div class="deleteCustomer">
                        <button class="deleteButton" ><img src=" ./assets/img/delete.png " width="9" height="9"></button>
                    </div>
                </button>`;

                //div.innerHTML += array[i].customerName;
                }
                
                document.querySelector("#rightBackground").innerHTML = div;
            }

        //     userInfo = "";
        //     userInfo += `
        //     <p class="nameSurname">${post.data.fullName}</p>
        //     <p class="homePageCompanyName">${post.data.companyName}</p>`;
        //     document.querySelector("#userInfo").innerHTML = userInfo;

        //     topInfo = "";
        //     topInfo += `
        //     <p class="inWithKDV">KDV'li Alınan:  ${post.data.userbalance.inMoney}</p>
        //     <p class="amountofKDV">KDV Miktarı: ${post.data.userbalance.amountVAT}</p>
        //     <p class="inWithoutKDV">KDV'siz Alınan: ${post.data.userbalance.inMoneyVAT}</p>
        //     <p class="out">Ödenen: ${post.data.userbalance.outMoney}</p>`;
        //     document.querySelector("#topInfo").innerHTML = topInfo;


        //     totalAmount = "";
        //     totalAmount += `
        //     <p class="total">Toplam Bakiye: ${post.data.userbalance.totalMoney}</p>
        //     `;
        //     document.querySelector("#leftLittleWhite").innerHTML = totalAmount;


        //     sessionStorage.setItem('totalAmount', post.data.userbalance.totalMoney);

        });








    }
    xhr.send();
}


// function showData(item) {
//     var cID = item.id;
//     sessionStorage.setItem("cID", cID);
//     console.log(cID);
//     window.location = "detail.html";


// }


// getUser();

// function getUser() {
//     var cID = sessionStorage.getItem('cID');
//     var url = `http://192.168.1.108:3000/api/v1/customers/${id}/details/${cID}`;
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onload = function() {
//         var post = JSON.parse(this.response);
//         console.log(post.customer);

//         div = "";
//         div += `
//         <p class="nameSurname"></p>
//         <p class="homePageCompanyName"></p>`;
//         document.querySelector("#leftInBackground").innerHTML = div;

//     }
//     xhr.send();


// }