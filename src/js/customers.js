var id = localStorage.getItem("id", id);



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