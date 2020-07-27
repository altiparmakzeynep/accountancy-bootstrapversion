document.querySelector("#paymentSaveButton").addEventListener("click", postData);
document.querySelector("#getpaidSaveButton").addEventListener("click", postData);


function postData() {

    var id = localStorage.getItem("id", id);
    var cID = sessionStorage.getItem('cID');

    if (paymentSaveButton.clicked == true) {
        const data = {
            userID: id,
            customerID: cID,
            cost: document.getElementById("paymentAmount").value,
            // infoKDV: false,
            inOrOut: true,
            date: ""
        }
    }
    // if (getPaidSaveButton.clicked == true) {
    //     const data = {
    //         userID: id,
    //         customerID: cID,
    //         cost: document.getElementById("paymentAmount").value,
    //         inOrOut: "0",
    //         date: ""
    //     }
    // }

}