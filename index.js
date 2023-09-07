var openButton = document.querySelector('button.subInputForm');
var closeButton = document.querySelector('button.dismissButton');
var overlay = document.getElementById('overlay');
var container = document.querySelector('div.messageContainer');
openButton.addEventListener("click",function() {
    var emailId = document.getElementById("email").value;
    document.getElementById("email_info").innerHTML = emailId;
    overlay.classList.add("active");
    container.classList.add("activeMessageContainer");
});
closeButton.addEventListener("click",function(){
    overlay.classList.remove("active");
    container.classList.remove("activeMessageContainer");
});