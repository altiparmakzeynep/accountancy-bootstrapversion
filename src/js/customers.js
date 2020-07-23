var id = localStorage.getItem("id", id);


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




        ul = document.createElement('ul');


        document.getElementById('rightBackground').appendChild(ul);

        array.forEach(function(item) {
            let div = document.createElement('div');
            div.classList = "customers";

            ul.appendChild(div);
            div = "";
            for (var i = 0; i < array.length; i++) {
                div += `
                <div class="customers" id="customers">
                    <p class="companyName">Şirket adı: ${array[i].customerName}</p>
                    <p class="companyName">Şirket ünvanı: ${array[i].customerInfo}</p>
                  
                    <div class="deleteCustomer">
                        <button class="deleteButton"><img src=" ./assets/img/delete.png " width="9" height="9"></button>
                    </div>
                </div>`;
                //div.innerHTML += array[i].customerName;
                document.querySelector("#rightBackground").innerHTML = div;
            }
        });







    }
    xhr.send();
}