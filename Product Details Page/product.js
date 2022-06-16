// pop up
let clickNav= document.getElementById("navbar");
clickNav.addEventListener("click",openPop);

let cartPop= document.getElementById("cartPop");

function openPop(event){
cartPop.style.display="block";
}

let close= document.getElementById("closeBtn");
close.addEventListener("click",closePop)
function closePop(event){
    cartPop.style.display="none";
}

window.addEventListener("click",outsideClick);

function outsideClick(event){
    console.log(event.target);
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

// let detail= JSON.parse(localStorage.getItem("details"));
let detail= [ {
    id: "007",
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_400x.png?v=1636609395",
    name: "boAt Watch Zenit",
    price: "1999",
    main_price: "6990",
    category: "smartwatch",
    review: "232",
    rating: "4.7",
    discount: "71",
    detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_2404e78e-d92d-45f5-a58c-478b80100207_600x.png?v=1636609395",
    detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-black_600x.png?v=1636609395",
    detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_600x.png?v=1636609395",
    detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-black_600x.png?v=1636609395",
    detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_600x.png?v=1636609395",
    colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_2404e78e-d92d-45f5-a58c-478b80100207_600x.png?v=1636609395",
    colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-black_600x.png?v=1636609395",
    colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_600x.png?v=1636609395",
}];

display(detail);

function display(arr){
    // main image
    let bigImage= document.querySelector("#bigImage>img")
    bigImage.src= arr[0].detailimage1;

    // small image
    let smallImage= document.querySelectorAll("#smallImages>div>img");
        smallImage[0].src= arr[0].detailimage1;
        smallImage[1].src= arr[0].detailimage2;
        smallImage[2].src= arr[0].detailimage3;
        smallImage[3].src= arr[0].detailimage4;
        smallImage[4].src= arr[0].detailimage5;
        smallImage[5].src= arr[0].colourimage2;
    
    // title of product
    let title= document.querySelector("#title>h1");
    title.innerText= arr[0].name;

    let price= document.querySelector("#price>h1");
    price.innerText= "₹ "+arr[0].price;

    let strikePrice= document.querySelector("#price>h2>strike");
    strikePrice.innerText= "₹ "+arr[0].main_price;

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
}

// add to cart functionality
// let addToCart= document.querySelector("#pricebox>button");
// addToCart.addEventListener("click", addCart);
// function addingToCart(event){
//     push detail in add to cart Array;
// }

