$(document).ready(function () {
var btn = document.getElementById("send-message");
btn.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    //control structure//
    if (name == "" || email == "" || subject=="" || message == "") {
        $("#pop-message").append(person + ", We are processing your order and it will be delivered to you at " + location + ". Prepare sh. " + deliveryAmount + ". It is inclusive the delivery fee and your order bill");
        $("#pop-message").slideDown(1200);
        $("#pop-message").delay(3000).slideUp(1200);
    } else {
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/contacts",
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            },
            success: function (data) {
                $("#pop-message").append(person + ", We are processing your order and it will be delivered to you at " + location + ". Prepare sh. " + deliveryAmount + ". It is inclusive the delivery fee and your order bill");
                $("#pop-message").slideDown(1200);
                $("#pop-message").delay(3000).slideUp(1200);
            }
        });
    }
});
});

        // alert("Please fill all the fields");
//     }
//     else
//         alert(name + "" + "" + ",we have received your message,Thank you for reaching out to us😎")
// });
// });

