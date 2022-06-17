  document.querySelector("form").addEventListener("submit",checkdata);
  let userData = JSON.parse(localStorage.getItem("userData"));
  let activeuserlogindata = [];
  localStorage.setItem("loggedin","false");
  function checkdata(event){
      event.preventDefault();
      let inEmail = document.querySelector("#email").value;
      let inPass = document.querySelector("#password").value;
      let data = JSON.parse(localStorage.getItem("userData"));
      let flag=false;
     data.forEach(function(elem) {
         if(elem.email==inEmail && elem.password==inPass){
              flag=true;
              activeuserlogindata=[elem.fname,flag];
              localStorage.setItem("loggedin",JSON.stringify(activeuserlogindata));
              // window.location.href="navbar.html";
             return alert("Login Successful");
         };
  })
  if(flag==false){
      alert("Invalid Credentials");
  }
  }
