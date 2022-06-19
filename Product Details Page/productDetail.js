// pop up


// let cartPop= document.getElementById("cartPop");

// function openPop(event){
// cartPop.style.display="block";
// let cart= JSON.parse(localStorage.getItem("addToCart"));
// displayCart(cart);
// }

// let close= document.getElementById("closeBtn");
// close.addEventListener("click",closePop)
// function closePop(event){
//     cartPop.style.display="none";
// }

window.addEventListener("click",outsideClick);

function outsideClick(event){
    // console.log(event.target);
    if(event.target==cartPop){
        cartPop.style.display="none";
    }
}


// hovering over small images changes big image
function changeImg(smallImg){
    let bigImg= document.querySelector("#bigImage>img");
    // let smallImg= document.querySelector("#smallImages>div>img")
    bigImg.src= smallImg.src;
}



// display of images

let detail= JSON.parse(localStorage.getItem("details"));
display(detail);

function display(arr){
    // main image
    let bigImage= document.querySelector("#bigImage>img")
    bigImage.src= arr[0].colourimage2;

    // small image
    let smallImage= document.querySelectorAll("#smallImages>div>img");
        smallImage[0].src= arr[0].colourimage2;
        smallImage[1].src= arr[0].colourimage1;
        smallImage[2].src= arr[0].colourimage3;
        smallImage[3].src= arr[0].detailimage1;
        smallImage[4].src= arr[0].detailimage2;
        smallImage[5].src= arr[0].detailimage3;
    
    // title of product
    let title= document.querySelector("#title>h1");
    title.innerText= arr[0].name;

    let price= document.querySelector("#price>h1");
    price.innerText= "₹ "+arr[0].price;

    let strikePrice= document.querySelector("#price>h2>strike");
    strikePrice.innerText= "₹ "+arr[0].main_price;

    let stickyimg= document.querySelector("#stickyProduct>div>img");
    stickyimg.src= arr[0].colourimage2;
    let stickyTitle= document.querySelector("#stickyProduct>div>p");
    stickyTitle.innerText= arr[0].name;
    let stickyPrice= document.querySelector("#stickyProduct>div>p+p");
    stickyPrice.innerText= "₹ " + arr[0].price;


}


// increase and decrease the quantity

let count=1;
// for decreasing the quantity
let decrease= document.querySelector("#increase>button");
decrease.addEventListener("click", dec);
function dec(event){
    let quantValue= document.querySelector("#increase>span")
    if(quantValue.innerText==0){
        count=0;
    } else if(quantValue.innerText>0){
        count--;
    }
    quantValue.innerText=count;
}
// for increasing the quantity
let increase= document.querySelector("#increase>span+button");
increase.addEventListener("click", inc);
function inc(event){
    let quantValue= document.querySelector("#increase>span");
    quantValue.innerText=count++;
    // let countArr=[];
    // countArr.push(quantValue)
    // localStorage.setItem("countQuantity",JSON.stringify(countArr));
}

// add to cart functionality
let object= detail[0];
// console.log(object);
let addedCart= document.querySelector("#priceBox>button");
addedCart.addEventListener("click", function(){
    addingToCart(object);
    
});
function addingToCart(obj){
    console.log(obj);
    let cart = JSON.parse(localStorage.getItem("addToCart")) || [];
        cart.push(obj);
        localStorage.setItem("addToCart", JSON.stringify(cart));
        displayCart(cart);
        openPop()
}

 function displayCart(arr){
    let sum= 0;
    let cartQuantity= document.querySelector("#cartHeader>div>h3");
    cartQuantity.innerText="Your Cart(" + arr.length + " items)"
    let carte= document.getElementById("cart");
        carte.innerHTML="";
        let productDetailDiv= document.createElement("div");
    arr.forEach(function(el,i){
       
        let div= document.createElement("div");
        div.id="addedProduct";
        let imageProduct= document.createElement("img");
        imageProduct.src= el.image;
        imageProduct.id="imageProduct";

        let subDiv= document.createElement("div");
        subDiv.id="titleProduct";


        let title= document.createElement("h4")
        title.innerText=el.name;

        let price= document.createElement("div");
        let disPrice= document.createElement("p");
        disPrice.innerText= "Rs. "+ el.price;
        sum= sum+ Number(el.price);
        let realPrice= document.createElement("p");
        realPrice.innerText= "Rs. " + el.main_price;
        price.append(disPrice,realPrice);

        let quantity= document.createElement("div");
        quantity.id="quantityProduct";
        let plusMinus= document.createElement("div");
        plusMinus.id="plusMinus";
        let minbut= document.createElement("button");
        minbut.innerText="-";
        let quant= document.createElement("p");
        quant.innerText= 1;
        let maxbut= document.createElement("button");
        maxbut.innerText="+";
        let catSpan= document.createElement("span");
        catSpan.innerText= el.category;
        plusMinus.append(minbut,quant,maxbut,catSpan);

        let delIcon= document.createElement("div");
        delIcon.addEventListener("click",function(){
            deleteProduct(i);
            console.log(i);
        })
        let delIconImg= document.createElement("img");
        delIconImg.src= "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1_93145e45-8530-46aa-9fb8-6768cc3d80d2.png?v=1633783107";
        delIconImg.id="delete";
        delIcon.append(delIconImg);
        quantity.append(plusMinus,delIcon);

        subDiv.append(title,price,quantity);

        div.append(imageProduct,subDiv);
        productDetailDiv.append(div);
    });
    carte.append(productDetailDiv);
    let secDiv= document.createElement("div");
    secDiv.id="shipDiv";

        let shipDetail= document.createElement("div");
        shipDetail.id="shipDetail"
        let shiptable= document.createElement("table");
        let tr1= document.createElement("tr");
        let td1= document.createElement("td");
        td1.innerText="Shipping:"
        let td2= document.createElement("td");
        td2.innerText="FREE";
        tr1.append(td1,td2);
        let tr2= document.createElement("tr");
        let td3= document.createElement("td");
        td3.innerText="Total:"
        let td4= document.createElement("td");
        td4.innerText= "Rs. " + sum;
        tr2.append(td3,td4);
        shiptable.append(tr1,tr2);
        shipDetail.append(shiptable);

        let zestProduct= document.createElement("div");
        zestProduct.id="zestProduct"
        let interest= document.createElement("p");
        interest.innerText="Or 3 interest-free payments of ₹ 2533 with";
        let zestImage= document.createElement("img");
        zestImage.src="https://assets.zestmoney.in/assets/widget/zest-logo-name-info.svg";
        zestProduct.append(interest,zestImage);

        let continueShop= document.createElement("div");
        continueShop.addEventListener("click",function(){
            closePop();
        });
        continueShop.id="continueShop";
        continueShop.innerText="Continue Shopping >";

        let upi= document.createElement("div");
        upi.id="upi";
        upi.addEventListener("click", function(){
            let payPopUp= document.getElementById("popUp");
            payPopUp.style.display="block";
        });
        let cashDelivey= document.createElement("h4");
        cashDelivey.innerText="CASH ON DELIVERY/UPI";
        let saveRs= document.createElement("p");
        saveRs.innerText="Save Rs 15 on this purchase";
        upi.append(cashDelivey,saveRs);

        let payDelivery= document.createElement("div");
        payDelivery.id="payDelivery";
        payDelivery.innerText="PAY VIA CARD/OTHERS";

        secDiv.append(shipDetail,zestProduct,continueShop,upi,payDelivery);
        carte.append(secDiv);
    
 };

 function deleteProduct(i){
    let cart = JSON.parse(localStorage.getItem("addToCart"));
    console.log(cart);
    cart.splice(i,1);
    localStorage.setItem("addToCart", JSON.stringify(cart));
    displayCart(cart);

 }



