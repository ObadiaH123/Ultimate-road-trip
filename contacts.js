$(document).ready(function () {
var btn = document.getElementById("send-message");
btn.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    //control structure//
    if (name == "" || email == "" || subject=="" || message == "") {
        alert("Please fill all the fields");
    }
    else
        alert(name + "" + "" + ",we have received your message,Thank you for reaching out to us😎")
});
});

