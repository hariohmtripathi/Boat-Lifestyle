document.querySelector("form").addEventListener("submit", checkdata);

let userData = JSON.parse(localStorage.getItem("userData"));
let activeuserlogindata = ["boAthead", "false"];
localStorage.setItem("loggedin", JSON.stringify(activeuserlogindata));
function checkdata(event) {
    event.preventDefault();
    let inEmail = document.querySelector("#email").value;
    let inPass = document.querySelector("#password").value;
    let data = JSON.parse(localStorage.getItem("userData")) || [];
    let flag = false;
    data.forEach(function (elem) {
        if (elem.email == inEmail && elem.password == inPass) {
            flag = true;
            activeuserlogindata = [elem.fname, flag];
            localStorage.setItem("loggedin", JSON.stringify(activeuserlogindata));
            alert("Login Successful");
            window.location.href = "index.html";
        };
    })
    if (flag == false) {
        alert("Invalid Credentials");
    }
}
