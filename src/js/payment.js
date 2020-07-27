// Get the modal
var modal2 = document.getElementById("paymentModal");

// Get the button that opens the modal2
var btn2 = document.getElementById("payButton");


// Get the <span> element that closes the modal2
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal2 
btn2.onclick = function() {
    modal2.style.display = "block";
}

/*When the user clicks on <span> (x), close the modal2
span.onclick = function() {
    modal2.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal2, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}