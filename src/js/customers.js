var id = localStorage.getItem("id", id);


getData();




function getData() {
    var url = `http://192.168.1.152:3000/api/v1/customers/${id}`;
    //var url = `http://e3b5dab837cc.ngrok.io/api/v1/customers/${id}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function() {


        var post = JSON.parse(this.response);
        console.log(post.data.customers);

        var array = post.data.customers;



        ul = document.createElement('ul');


        document.getElementById('rightBackground').appendChild(ul);

        array.forEach(function(item) {
            let div = document.createElement('div');
            div.classList = "customers";

            ul.appendChild(div);
            div = "";


            //FOR LOOP
            for (var i = 0; i < array.length; i++) {


                //Every buttons have own id from customers array
                div += `
                <button class="customers" id = "${array[i].id}" onclick="showData(this)">
                    <p class="companyName">Şirket adı: ${array[i].customerName}</p>
                    <p class="companyName">Şirket ünvanı: ${array[i].customerInfo}</p>
                  
                    <div class="deleteCustomer">
                        <button class="deleteButton" ><img src=" ./assets/img/delete.png " width="9" height="9"></button>
                    </div>
                </button>`;

                //div.innerHTML += array[i].customerName;
                document.querySelector("#rightBackground").innerHTML = div;
            }
        });








    }
    xhr.send();
}


function showData(item) {
    var cID = item.id;
    sessionStorage.setItem("cID", cID);
    console.log(cID);
    window.location = "detail.html";


}


// getUser();

// function getUser() {
//     var cID = sessionStorage.getItem('cID');
//     var url = `http://192.168.1.152:3000/api/v1/customers/${id}/details/${cID}`;
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