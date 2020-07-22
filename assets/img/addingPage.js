document.querySelector("#saveButton").addEventListener("click", postData);



function postData() {
    const data = {
        userID: "110",
        customerInfo: document.getElementById("companyInput").value,
        customerName: document.getElementById("companyNameInput").value,
        phoneNumber: document.getElementById("numberInput").value,
        taxNumber: document.getElementById("taxNumberInput").value,
        taxAddress: document.getElementById("taxOfficeInput").value

    }


    var json = JSON.stringify(data);
    var url = "http://192.168.1.152:3000/api/v1/customers/add";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


    xhr.onload = function() {
        //console.log(xhr.readyState);
        //console.log(data);
    }

    xhr.send(json);

}

/*function getData() {
    var url = "http://192.168.1.152:3000/api/v1/customers/1";

    //request olusturalim
    fetch(url).then((result) => result.json()).then((result) => {
        var html = "";
        //BU ÖNEMLİ
        //console.log("result", result)
        result.forEach(item => {
            //console.log("item title: ", item.description);
            html += `
            <div class="customers" id="customers">          
      `;
        });
        document.querySelector("#customers").innerHTML = html;
    })
}*/