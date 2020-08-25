var userID = localStorage.getItem("id");
console.log(userID);
var customerID = localStorage.getItem("customerid");
console.log(customerID);
var baseurl ="https://accountancy-app-api.herokuapp.com/api/v1";

// Popup Al
var modal1 = document.getElementById('paymentModal');
// Kipi açan düğmeyi al
var btn1 = document.getElementById("payButton");
// Kipi kapatan <span> öğesini edinin
var span1 = document.getElementsByClassName("close1")[0];
// Kullanıcı düğmeyi tıklattığında
btn1.onclick = function() {
    modal1.style.display = "block";
}
// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span1.onclick = function() {
    modal1.style.display = "none";
}
// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


document.querySelector('.paymentSaveButton').addEventListener('click',deneme);

function deneme(){
    var cost1 = document.getElementById('paymentAmount').value;
    var date = document.getElementById('paymentCalendar').value;

    if(cost1 == ("" || null) || date ==""){
        alert('gecerli bişe gir')
    }else{
        odemeYap();
        function odemeYap(){
            var cost1 = document.getElementById('paymentAmount').value;
            var date = document.getElementById('paymentCalendar').value;
            var cost =  parseFloat(cost1);
            // var VAT2 = document.getElementsByName('radio1');
            var inOrOut = "0";
            var infoKDV = "false";
            // if(cost1 == ""){
            //     alert('Lütfen geçerli bir tutar girin')
            // }else{
            //  var cost =  parseFloat(cost1);
        
            // }
            
            // if(date == ""){
            //     alert('Lütfen geçerli bir tarih girin')
            // }
           
            // console.log(VAT.values());
        
            // for(var i = 0; i < VAT2.length; i++){
            //     if(VAT2[i].checked){
            //         // console.log('checked:' + VAT2[i].value);
            //         var infoKDV = VAT2[i].value;
        
            //     }}
        
            console.log(cost);
            console.log(date);
            console.log(infoKDV);
        
            odemeAlYap(cost,infoKDV,inOrOut,date);
        
        }
        
    }
}




//2.popup

// Popup Al
var modal2 = document.getElementById('getpaidModal');
// Kipi açan düğmeyi al
var btn2 = document.getElementById("getPaidButton");
// Kipi kapatan <span> öğesini edinin
var span2 = document.getElementsByClassName("close2")[0];
// Kullanıcı düğmeyi tıklattığında
btn2.onclick = function() {
    modal2.style.display = "block";
}
// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span2.onclick = function() {
    modal2.style.display = "none";
}
// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

document.querySelector('.getpaidSaveButton').addEventListener('click',deneme2);

function deneme2(){
    var VAT1 = document.getElementsByName('customerAndSupplierRadioBtn');
    var cost1 = document.getElementById('odemetutari-odemeal').value;
    var date = document.getElementById('getpaidCalendar').value;

    for(var i = 0; i < VAT1.length; i++){
        if(VAT1[i].checked){
            console.log('checked:' + VAT1[i].value);
            var infoKDV = VAT1[i].value;

        }}

    if(cost1 == ("" || null)  || date =="" || infoKDV == null){
        alert('gecerli bişe gir')
    }else{
        console.log('else girdi mi ')
        odemeAl();

    function odemeAl(e){
    // if(cost == ""){
    //     alert('Lütfen geçerli bir tutar girin')
    // }else if(date == ""){
    //     alert('Lütfen geçerli bir tutar girin')
    // }
    var cost = document.getElementById('odemetutari-odemeal').value;
    var cost =  parseFloat(cost1);
    var date = document.getElementById('getpaidCalendar').value;
   
    var inOrOut = "1";

    
    // if(cost1 == ""){
    //     alert('Lütfen geçerli bir tutar girin')
    // }else{
    //  var cost =  parseFloat(cost1);

    // }
    
    
    // if(date == ""){
    //     alert('Lütfen geçerli bir tarih girin')
    // }
    
    
    // console.log(VAT.values());

  
// if(infoKDV==null){
//     alert('KDV bilgisi giriniz')
// }
    console.log(cost);
    console.log(date);
    console.log(infoKDV);

    odemeAlYap(cost,infoKDV,inOrOut,date);

e.preventDefault();

}
}}


//Ödeme Al Yap
function odemeAlYap(cost,infoKDV,inOrOut,date){
    console.log(cost); 
    console.log(infoKDV); 
    console.log(inOrOut); 
    console.log(date); 
    console.log(userID);
    console.log(customerID);

   const data = { 
        userID: userID, 
        customerID: customerID, 
        cost: cost, 
        infoKDV: infoKDV, 
        inOrOut: inOrOut, 
        date: date 
                }

    console.log(data);

    var json = JSON.stringify(data);
    console.log(json);

    var urlpayment = `${baseurl}/payments/add`;
    var xhrpayment = new XMLHttpRequest();

    xhrpayment.open('POST',urlpayment,true);
    xhrpayment.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhrpayment.onload = function(){
        // var resultpayment = JSON.parse(xhrpayment.response);
        // console.log("resultnotes" , resultpayment);

        window.location.reload();

    }
    xhrpayment.send(json);
}


// Get the modal delete payment
var modalP = document.getElementById("DeletePmodal");
console.log('modal', modalP);


// Get the <span> element that closes the modal
var spanP = document.getElementsByClassName("closeP")[0];


// When the user clicks on the button, open the modal
function getIdP(item){
    var paymentsid = item.id;
    
    localStorage.setItem("paymentsid", paymentsid);
    PayDelPopup();
}

 function PayDelPopup() {
    // var modal1 = localStorage.getItem('modal');
    
    console.log(modalP);
    modalP.style.display = 'block';
}

// When the user clicks on <spanP> (x), close the modalP
spanP.onclick = function () {
    modalP.style.display = "none";
}

// When the user clicks anywhere outside of the modalP, close it
window.onclick = function (event) {
    if (event.target == modalP) {
        modalP.style.display = "none";
    }
}

document.querySelector('.yesPay').addEventListener('click',deletePaymentsList);
document.querySelector('.noP').addEventListener('click',function(){window.location.reload();});


// DELETE PAYMENTS LİST

// if(customerpayments.length != 0){
// document.querySelector('.customerpayments-btn').addEventListener('click',deletePaymentsList);

function deletePaymentsList(){
    var paymentsid = localStorage.getItem("paymentsid");;
    console.log("paymentsid:",paymentsid);
     
    var urldeletep = `${baseurl}/payments/${userID}/delete/${paymentsid}`;
    var xhrdeletep = new XMLHttpRequest();

    xhrdeletep.open('DELETE',urldeletep,true);

    xhrdeletep.onload = function(){
        var result = xhrdeletep.response;
        console.log(result);
        window.location.reload();
    }
    xhrdeletep.send();
}
// }






//3.popup

// Popup Al
var modal3 = document.getElementById('myModal');
// Kipi açan düğmeyi al
var btn3 = document.getElementById("notesButton");
// Kipi kapatan <span> öğesini edinin
var span3 = document.getElementsByClassName("close3")[0];
// Kullanıcı düğmeyi tıklattığında
btn3.onclick = function() {
    modal3.style.display = "block";
}
// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span3.onclick = function() {
    modal3.style.display = "none";
}
// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

// ADD NOTES

var notes = document.getElementsByClassName('writeNote').value;
var date = document.getElementsByClassName('calendar').value;

document.querySelector('.addNoteSaveButton').addEventListener('click',notEkle);


function notEkle(){
    console.log(customerID);
    var notes = document.getElementById('writeNote').value;

    console.log(notes);
    var date = document.getElementById('calendar').value;
    if(notes =="" || date==""){
        alert('not veya tarih alanı boş bırakılamaz')
    }
   else{

    const data = {
        customerID: customerID,
        notes: notes,
        date: date
    }
    console.log(data);

    var json = JSON.stringify(data);
    console.log(json);

    var urlnotes = `${baseurl}/notes/add`;
    var xhrnotes = new XMLHttpRequest();

    xhrnotes.open('POST',urlnotes,true);
    xhrnotes.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhrnotes.onload = function(){
        var resultnotes = JSON.parse(xhrnotes.response);
        console.log("resultnotes" , resultnotes);

        window.location.reload();

    }
    xhrnotes.send(json);
   
    
}}


// console.log(customernotes.length);

// Get the modal delete note
var modalN = document.getElementById("DeleteNmodal");
console.log('modalN', modalN);


// Get the <span> element that closes the modal
var spanN = document.getElementsByClassName("closeN")[0];


// When the user clicks on the button, open the modal
function getIdN(item){
    var noteid = item.id;
    console.log("noteid1",noteid);

    
    localStorage.setItem("noteid", noteid);
    NoteDelPopup();
}

 function NoteDelPopup() {
    // var modal1 = localStorage.getItem('modal');
    
    console.log(modalN);
    modalN.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
spanN.onclick = function () {
    modalN.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalN) {
        modalN.style.display = "none";
    }
}

document.querySelector('.yesNote').addEventListener('click',deleteN);
document.querySelector('.noN').addEventListener('click',function(){window.location.reload();});


// DELETE NOTES



function deleteN(){
    
    var noteid = localStorage.getItem("noteid");
    console.log("noteid:",noteid);
    // var id = document.getElementById('customernotes-btn').value;
    // console.log(id);
     
    var urldeleten = `${baseurl}/notes/delete/${noteid}`;
    var xhrdeleten = new XMLHttpRequest();

    xhrdeleten.open('DELETE',urldeleten,true);

    xhrdeleten.onload = function(){
        var result = xhrdeleten.response;
        console.log(result);
        window.location.reload();
    }
    xhrdeleten.send();
}