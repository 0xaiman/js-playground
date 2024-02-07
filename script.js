const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const toastElement = document.getElementById("liveToast");

form.addEventListener("submit", (e) => {
    let msgs = [];

    if (password.value.includes("password")) {
        msgs.push("Password cannot be 'password'");    
    }
    
    if (msgs.length > 0) {
        e.preventDefault();
        errorElement.innerText = msgs.join(",");
        
        // Use Bootstrap's Toast method to create a new toast object
        var toast = new bootstrap.Toast(toastElement);
        
        // Show the toast
        toast.show();
    }
});
