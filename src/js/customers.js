var id = localStorage.getItem("id", id);



document.querySelector('.customersDetailButton').addEventListener('click',Customers);

document.querySelector('.suppliersDetailButton').addEventListener('click',Suppliers);

function Customers(){
    var category = "true";
    localStorage.setItem("category",category);
    // window.location ="suppliersAndCustomersDetail.html"
}

function Suppliers(){
    var category = "false";
    localStorage.setItem("category",category);
    // window.location = "suppliersAndCustomersDetail.html"
}