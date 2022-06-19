document.querySelector("form").addEventListener("submit", signUp);
let userData = JSON.parse(localStorage.getItem("userData")) || [];
function signUp() {
    event.preventDefault();
    let firstName = document.querySelector("#fname").value
    let lastName = document.querySelector("#lname").value
    //let userName = document.querySelector("#name").value;
    let userEmail = document.querySelector("#email").value;
    let userPwd = document.querySelector("#password").value;
    let obj = {
        fname: firstName,
        lname: lastName,
        //name: userName,
        email: userEmail,
        password: userPwd,
    }
    userData.push(obj);
    localStorage.setItem("userData", JSON.stringify(userData));
    if (firstName != "" && lastName != "" && userPwd != "" && userEmail != "") {
        alert("Sign-Up Successfully !");
        window.location.href = "blogin1.html";
    } //else if (userName == "") alert("Enter Name !");
    else if (firstName == "") alert("Enter First Name !");
    else if (lastName == "") alert("Enter Last Name !");
    else if (userEmail == "") alert("Enter Email !");
    else if (userPwd == "") alert("Enter Password !");
}