document.forms['forms'].addEventListener('submit', function (e) {
    e.preventDefault();
});
function checkEmpty() {
    var name = document.forms['forms'].elements[0].value;
    var email = document.forms['forms'].elements[1].value;
    var message = document.forms['forms'].elements[2].value;

    if (name == "" && email == "") {
        alert('please enter your details');
        return 0;
    }
    else {
        if (name == "") {
            alert("please enter your name!");
        }
        else if (email == "") {
            alert("please enter your email!");
        }
    }
    if ((name !== "" && email != "" && text == "") || (name != "" && email != "" && text != "")) {
        alert("Dear " + name + " your message was received successfully.");
        document.getElementById('results').innerHTML = "Dear " + name + " your message was received successfully you will be contacted soon. Thank you.";
    }
}
    