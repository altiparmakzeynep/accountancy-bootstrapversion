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


document.querySelector('.paymentSaveButton').addEventListener('click',odemeYap);


function odemeYap(){
    var cost = parseInt(document.getElementById('paymentAmount').value);
    var date = document.getElementById('paymentCalendar').value;
    // var VAT2 = document.getElementsByName('radio1');
    var inOrOut = "0";
    var infoKDV = "false";
    
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

document.querySelector('.getpaidSaveButton').addEventListener('click',odemeAl);


function odemeAl(){
    var cost = parseInt(document.getElementById('odemetutari-odemeal').value);
    var date = document.getElementById('getpaidCalendar').value;
    var VAT1 = document.getElementsByName('radio2');
    var inOrOut = "1";

    
    
    // console.log(VAT.values());

    for(var i = 0; i < VAT1.length; i++){
        if(VAT1[i].checked){
            console.log('checked:' + VAT1[i].value);
            var infoKDV = VAT1[i].value;

        }}

    console.log(cost);
    console.log(date);
    console.log(infoKDV);

    odemeAlYap(cost,infoKDV,inOrOut,date);

}



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

    var urlpayment = "http://192.168.1.142:3000/api/v1/payments/add";
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


// DELETE PAYMENTS LİST

// if(customerpayments.length != 0){
// document.querySelector('.customerpayments-btn').addEventListener('click',deletePaymentsList);

function deletePaymentsList(item){
    var paymentsid = item.id;
    console.log(paymentsid);
     
    var urldeletep = `http://192.168.1.142:3000/api/v1/payments/${userID}/delete/${paymentsid}`;
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

    console.log(date);

    const data = {
        customerID: customerID,
        notes: notes,
        date: date
    }
    console.log(data);

    var json = JSON.stringify(data);
    console.log(json);

    var urlnotes = "http://192.168.1.142:3000/api/v1/notes/add";
    var xhrnotes = new XMLHttpRequest();

    xhrnotes.open('POST',urlnotes,true);
    xhrnotes.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhrnotes.onload = function(){
        var resultnotes = JSON.parse(xhrnotes.response);
        console.log("resultnotes" , resultnotes);

        window.location.reload();

    }
    xhrnotes.send(json);

}


console.log(customernotes.length);

// DELETE NOTES

// if(customernotes.length != 0){
// document.querySelector('#customernotes-btn').addEventListener('click',deleteNotes);

function deleteNotes(item){
    var noteid = item.id;
    console.log(noteid);
    // var id = document.getElementById('customernotes-btn').value;
    // console.log(id);
     
    var urldeleten = `http://192.168.1.142:3000/api/v1/notes/delete/${noteid}`;
    var xhrdeleten = new XMLHttpRequest();

    xhrdeleten.open('DELETE',urldeleten,true);

    xhrdeleten.onload = function(){
        var result = xhrdeleten.response;
        console.log(result);
        window.location.reload();
    }
    xhrdeleten.send();
}