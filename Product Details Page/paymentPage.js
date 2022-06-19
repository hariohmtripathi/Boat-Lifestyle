let countu=0;
let continueButton= document.getElementById("continueBtn");
let continueInnerhtml= continueButton.innerHTML;
continueButton.addEventListener("click", function(){
    countu++;
    if(countu>3){
        countu=0;
    }
   payDisplay();
});

function payDisplay(){
    let mobileNumber= document.getElementById("input");
    let payAddress= document.getElementById("input2");
    let payPay= document.getElementById("input3");
    let verify= document.getElementById("verifyOtp");
    if(countu==1){
        continueButton.innerHTML=""
        mobileNumber.style.position="absolute";
        mobileNumber.style.visibility="hidden";
        payAddress.style.position="absolute";
        payAddress.style.visibility="hidden";
        payPay.style.position="relative";
        payPay.style.visibility="visible";
       
    } else if(countu==2){
   
    mobileNumber.style.position="absolute";
    mobileNumber.style.visibility="hidden";   
    verify.style.position="relative";
    verify.style.visibility="visible";
    let mobileNumberPay= document.getElementById("mblNumber").value;
    let mobileNumberVerify= document.getElementById("verifymblNumber");
    mobileNumberVerify.innerText= "+91 " + mobileNumberPay;
    } else if(countu==3){
        window.location.href="paymentDone.html";
    }
    

};


let otp= document.getElementById("viaupi");
otp.addEventListener("click", function(){
    continueButton.innerHTML= continueInnerhtml;
    let mobileNumber= document.getElementById("input");
    let payAddress= document.getElementById("input2");
    let payPay= document.getElementById("input3");
    payAddress.style.position="absolute";
    payAddress.style.visibility="hidden";
    payPay.style.position="absolute";
    payPay.style.visibility="hidden";
    mobileNumber.style.position="relative";
    mobileNumber.style.visibility="visible";

    
    
})

let closePay= document.getElementById("closeBtnPay");
closePay.addEventListener("click", function(){
    let payPopUp= document.getElementById("popUp");
    payPopUp.style.display="none";
});

let cartu= JSON.parse(localStorage.getItem("addToCart"));
displayPay(cartu);
function displayPay(arr){
    let sumu=0;
    let addingPayProduct= document.getElementById("productFinal");
    addingPayProduct.innerHTML="";
    arr.forEach(function (elem) {
        let card = document.createElement("div");
        card.id="card";
        let imagePay = document.createElement("img");
        imagePay.src = elem.image;
    
        let detailDiv = document.createElement("div");
        let name = document.createElement("p");
        name.innerText = elem.name;
    
        let quantityPay = document.createElement("p");
        quantityPay.innerText = "Quantity : 1";
    
        let pricePay = document.createElement("p");
        pricePay.innerText = "Price : ₹ " + elem.price;
        sumu= sumu+ Number(elem.price);
        console.log(sumu);
    
        detailDiv.append(name, quantityPay, pricePay);
        card.append(imagePay, detailDiv);
        addingPayProduct.append(card);
       
});
let subtotale = document.querySelector("#subtotal");
subtotale.innerText = "Rs. " + sumu;

let saveNamePayment= JSON.parse(localStorage.getItem("loggedin"));
let paymentName= document.getElementById("payName");
paymentName.innerText= saveNamePayment[0];

let paymentProductPrice1= document.getElementById("paymentpayupi1");
let paymentProductPrice2= document.getElementById("paymentpayupi2");
paymentProductPrice1.innerText="Rs. " + sumu;
paymentProductPrice2.innerText= "Rs. " + sumu;


let discountVal = document.querySelector("#coupanCode");
    let totalPay=document.querySelector("#Total");
    totalPay.innerText= "Rs. " + (sumu).toFixed(2);
    let coupanPay=  document.querySelector("#inputDiscount");
    coupanPay.addEventListener("keydown", function(event){
        if(event.key==="Enter"){
            let code = document.querySelector("#inputDiscount").value;
            if(code == "atrangi"){
                discountVal.innerText ="Rs. "  +  (sumu*0.3).toFixed(2);
                totalPay.innerText= "Rs. "  + (sumu- (sumu*0.3)).toFixed(2);
                
paymentProductPrice1.innerText="Rs. "  + (sumu- (sumu*0.3)).toFixed(2);
paymentProductPrice2.innerText="Rs. "  + (sumu- (sumu*0.3)).toFixed(2);
            }else if (code == "hawabazi"){
                discountVal.innerText = "Rs. " + (sumu*0.5).toFixed(2);
                totalPay.innerText= "Rs. " + (sumu- (sumu*0.5)).toFixed(2);
               
paymentProductPrice1.innerText="Rs. " + (sumu- (sumu*0.5)).toFixed(2);
paymentProductPrice2.innerText= "Rs. "  + (sumu- (sumu*0.5)).toFixed(2);
            } else{
                alert("Jeb me piasa hai nahi toh aya kyun idhar!")
            };

            console.log(code);
        }
    })
    
    
};

function clickEvent(first,last)
  {
    if(first.value.length)
    {
       document.getElementById(last).focus();
    }
  }



// document.querySelector("#product").innerHTML = "";

  

    
    
    
// })

