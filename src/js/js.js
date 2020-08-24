if( category == "1"){if (customerFiltered.length != 0){
    customerFiltered.filter((customerItem) => customerItem.customerInfo.includes(value) 
                       || customerItem.customerName.toLowerCase().includes(value))
                       .map((item, index) =>{
                        div += `
                        <div class="customers">
                          <button class="yeterButton" id = "${item.id}" onclick="showData(this)"><img src=" ./assets/img/info.png " width="15" height="15"></button>
                          <p class="companyName">Şirket adı: ${item.customerName}</p>
                          <p class="companyInfo">Şirket ünvanı: ${item.customerInfo}</p>
                          <p class="phoneNumber">${item.phoneNumber}</p>
                          <button class="deleteButton" id = "${item.id}"  onClick="deneme(this)"><img src=" ./assets/img/delete.png " width="9" height="9"></button>
                        </div>`;

        
                        div.innerHTML += item.customerName;
                         })
                       document.querySelector("#rightBackground").innerHTML = div;
}else{
  customernoti += `<p>Müşteriniz yoktur.</p>`;
  document.querySelector("#rightBackground").innerHTML = customernoti;
}}


else if(category == "0"){
    if( supplierFiltered.length != 0){
  supplierFiltered.filter((supplierItem) => supplierItem.customerInfo.includes(value) 
                     || supplierItem.customerName.toLowerCase().includes(value))
                     .map((item, index) =>{
                      div += `
                      <div class="customers">
                        <button class="yeterButton" id = "${item.id}" onclick="showData(this)"><img src=" ./assets/img/info.png " width="15" height="15"></button>
                        <p class="companyName">Şirket adı: ${item.customerName}</p>
                        <p class="companyInfo">Şirket ünvanı: ${item.customerInfo}</p>
                        <p class="phoneNumber">${item.phoneNumber}</p>
                        <button class="deleteButton" id = "${item.id}"  onClick="deneme(this)"><img src=" ./assets/img/delete.png " width="9" height="9"></button>
                      </div>
                      `;

      
                      div.innerHTML += item.customerName;
                       })
                     document.querySelector("#rightBackground").innerHTML = div;
}else{
suppliernoti += `<p>Tedarikçiniz  yoktur.</p>`;
  document.querySelector("#rightBackground").innerHTML = suppliernoti;
}
 }