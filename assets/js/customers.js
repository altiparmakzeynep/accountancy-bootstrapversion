var id = localStorage.getItem("id", id);

console.log("id:", id);

getData();

function getData() {
    var url = `http://192.168.1.152:3000/api/v1/customers/${id}`;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function() {

        //console.log(this.response);
        var post = JSON.parse(this.response);
        console.log(post.data.customers);
        var array = post.data.customers;
        console.log(post.data);

        console.log(post.data.companyName);
        console.log(post.data.companyInfo);
        console.log(post.data.fullName);



        var html = "";
        for (var i = 0; i < array.length; i++) {
            //console.log(array[i].customerName);
            html += ` 
            
            <div class="customers" id="customers">
            <p class="companyName">Şirket adı:${array[1].customerName}</p>
            <p class="companyInfo">Şirket ünvanı:${array[1].customerInfo}</p>
            <div class="deleteCustomer">
            <button class="deleteButton"><img src=" ./assets/img/delete.png " width="9" height="9"></button>
            </div>
            </div>`;

            document.querySelector("#customers").innerHTML = html;




        }





    }

    xhr.send();
}