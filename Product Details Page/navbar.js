document.querySelector("#logoboat").addEventListener("click", function () {
    window.location.href = "index.html";
})

// Data and function for products page*******************************
// let getData = JSON.parse(localStorage.getItem("filtered_data"));
// let getImageTitle = JSON.parse(localStorage.getItem("img_and_title"));



// Search function************************

let searchfun = document.getElementById('searchbar');
searchfun.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        let input = document.getElementById('searchbar').value
        input = input.toLowerCase();

        let temp = JSON.parse(localStorage.getItem("MainData"));

        let filtered_list = temp.filter(function (elem) {
            return (elem.name).toLowerCase().includes(input);
        });

        imgTitleData = ["", ""];
        localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
        localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
        window.location.href = "products.html";

    }
})


//airdopes
document.querySelector("#nav_airdopes").addEventListener("click", airdopes);
function airdopes() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "airdopes";
    });
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734", "Wireless Earbuds"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData))
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";
}

//smartwatch
document.querySelector("#nav_smartwatch").addEventListener("click", smartwatch);
function smartwatch() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "smartwatch";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Smart-Watch_Catgry-web.jpg?v=1634717240", "Smart Watches"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";
}
//wireless
document.querySelector("#nav_wireless").addEventListener("click", wireless);
function wireless() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "wireless";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683", "Wireless Headphones"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";
}
//wired
document.querySelector("#nav_wired").addEventListener("click", wired);
function wired() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "wired";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bassheads-_Catgry_web.jpg?v=1634717143", "Wired Earphones"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//speakers
document.querySelector("#nav_speakers").addEventListener("click", speakers);
function speakers() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "speakers";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone-Speakers_Catgry-web_5ddac427-ef95-4cc3-bcd7-5f08ab93359d.jpg?v=1634903645", "Wireless Speakers"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//homeaudio
document.querySelector("#nav_homeaudio").addEventListener("click", homeaudio);
function homeaudio() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "homeaudio";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Aavante_category_web_1.jpg?v=1634903645", "Home Theatre Systems & Soundbars"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//accessories
document.querySelector("#nav_accessories").addEventListener("click", accessories);
function accessories() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "accessories";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mobile_Accessories_web.jpg?v=1634903645", "Mobile Accessories"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//trebel
document.querySelector("#nav_trebel").addEventListener("click", trebel);
function trebel() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "trebel";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Trebel_Category_Web.jpg?v=1634903645", "TRebel"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//limited
document.querySelector("#nav_limited").addEventListener("click", limited);
function limited() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "limited";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Limited_edition_cat_web.jpg?v=1634903645", "Limited Edition"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";
}
//grooming
document.querySelector("#nav_grooming").addEventListener("click", grooming);
function grooming() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "grooming";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/MISFIT-T200_Catgry_Web.jpg?v=1634806683", "Misfit - Best Trimmer for Men"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//gaming
document.querySelector("#nav_gaming").addEventListener("click", gaming);
function gaming() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "gaming";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal-Catgry_web.jpg?v=1634903645", "Immortal Gaming"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";
}



profilepopdata();
document.querySelector("#proicon").addEventListener("click", function () {
    let box = document.querySelector("#profilepop");

    box.style.visibility = "visible";

})

function profilepopdata() {
    let namediv = document.createElement("div");
    namediv.style.color = "white";
    let proname = document.createElement("p");
    let savedname = JSON.parse(localStorage.getItem("loggedin")) || [];
    if (savedname[0] == undefined) {
        proname.innerText = "Hi boAthead";
    } else {
        proname.innerText = `Hi ${savedname[0]}`;
    }

    let crossbtn = document.createElement("span");
    crossbtn.innerText = "X "
    crossbtn.style.cursor = "pointer";
    crossbtn.addEventListener("click", function () {
        document.querySelector("#profilepop").style.visibility = "hidden";
    })
    namediv.append(proname, crossbtn);
    let logbtn = document.createElement("button");
    if (savedname[1] == true) {
        logbtn.innerText = "Logout";
        logbtn.addEventListener("click", function () {
            savedname[1] = false;
            savedname[0] = undefined;
            localStorage.setItem("loggedin", JSON.stringify(savedname));
            logbtn.innerText = "Login";
            logbtn.addEventListener("click", function () {
                window.location.href = "blogin1.html";
            })
            proname.innerText = "Hi boAthead";

        })
    } else {
        logbtn.innerText = "Login";
        logbtn.addEventListener("click", function () {
            window.location.href = "blogin1.html";
        })
    }
    // logbtn.innerText = "Login";
    document.querySelector("#profilepop").append(namediv, logbtn);
}





// pop up
let clickNav = document.getElementById("navcartpop");
clickNav.addEventListener("click", openPop);

let cartPop = document.getElementById("cartPop");

function openPop(event) {
    cartPop.style.display = "block";
    let cart = JSON.parse(localStorage.getItem("addToCart"));
    displayCart(cart);
}

let close = document.getElementById("closeBtn");
close.addEventListener("click", closePop)
function closePop(event) {
    cartPop.style.display = "none";
}

window.addEventListener("click", outsideClick);

function outsideClick(event) {
    // console.log(event.target);
    if (event.target == cartPop) {
        cartPop.style.display = "none";
    }
}

function displayCart(arr) {
    let sum = 0;
    let cartQuantity = document.querySelector("#cartHeader>div>h3");
    cartQuantity.innerText = "Your Cart(" + arr.length + " items)"
    let carte = document.getElementById("cart");
    carte.innerHTML = "";
    let productDetailDiv = document.createElement("div");
    arr.forEach(function (el, i) {

        let div = document.createElement("div");
        div.id = "addedProduct";
        let imageProduct = document.createElement("img");
        imageProduct.src = el.image;
        imageProduct.id = "imageProduct";

        let subDiv = document.createElement("div");
        subDiv.id = "titleProduct";


        let title = document.createElement("h4")
        title.innerText = el.name;

        let price = document.createElement("div");
        let disPrice = document.createElement("p");
        disPrice.innerText = "Rs. " + el.price;
        sum = sum + Number(el.price);
        let realPrice = document.createElement("p");
        realPrice.innerText = "Rs. " + el.main_price;
        price.append(disPrice, realPrice);

        let quantity = document.createElement("div");
        quantity.id = "quantityProduct";
        let plusMinus = document.createElement("div");
        plusMinus.id = "plusMinus";
        let minbut = document.createElement("button");
        minbut.innerText = "-";
        let quant = document.createElement("p");
        quant.innerText = 1;
        let maxbut = document.createElement("button");
        maxbut.innerText = "+";
        let catSpan = document.createElement("span");
        catSpan.innerText = el.category;
        plusMinus.append(minbut, quant, maxbut, catSpan);

        let delIcon = document.createElement("div");
        delIcon.addEventListener("click", function () {
            deleteProduct(i);
            console.log(i);
        })
        let delIconImg = document.createElement("img");
        delIconImg.src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1_93145e45-8530-46aa-9fb8-6768cc3d80d2.png?v=1633783107";
        delIconImg.id = "delete";
        delIcon.append(delIconImg);
        quantity.append(plusMinus, delIcon);

        subDiv.append(title, price, quantity);

        div.append(imageProduct, subDiv);
        productDetailDiv.append(div);
    });
    carte.append(productDetailDiv);
    let secDiv = document.createElement("div");
    secDiv.id = "shipDiv";

    let shipDetail = document.createElement("div");
    shipDetail.id = "shipDetail"
    let shiptable = document.createElement("table");
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = "Shipping:"
    let td2 = document.createElement("td");
    td2.innerText = "FREE";
    tr1.append(td1, td2);
    let tr2 = document.createElement("tr");
    let td3 = document.createElement("td");
    td3.innerText = "Total:"
    let td4 = document.createElement("td");
    td4.innerText = "Rs. " + sum;
    tr2.append(td3, td4);
    shiptable.append(tr1, tr2);
    shipDetail.append(shiptable);

    let zestProduct = document.createElement("div");
    zestProduct.id = "zestProduct"
    let interest = document.createElement("p");
    interest.innerText = "Or 3 interest-free payments of ₹ 2533 with";
    let zestImage = document.createElement("img");
    zestImage.src = "https://assets.zestmoney.in/assets/widget/zest-logo-name-info.svg";
    zestProduct.append(interest, zestImage);

    let continueShop = document.createElement("div");
    continueShop.addEventListener("click", function () {
        closePop();
    });
    continueShop.id = "continueShop";
    continueShop.innerText = "Continue Shopping >";

    let upi = document.createElement("div");
    upi.id = "upi";
    upi.addEventListener("click", function () {
        let payPopUp = document.getElementById("popUp");
        payPopUp.style.display = "block";
    });
    let cashDelivey = document.createElement("h4");
    cashDelivey.innerText = "CASH ON DELIVERY/UPI";
    let saveRs = document.createElement("p");
    saveRs.innerText = "Save Rs 15 on this purchase";
    upi.append(cashDelivey, saveRs);

    let payDelivery = document.createElement("div");
    payDelivery.id = "payDelivery";
    payDelivery.innerText = "PAY VIA CARD/OTHERS";

    secDiv.append(shipDetail, zestProduct, continueShop, upi, payDelivery);
    carte.append(secDiv);

};

function deleteProduct(i) {
    let cart = JSON.parse(localStorage.getItem("addToCart"));
    console.log(cart);
    cart.splice(i, 1);
    localStorage.setItem("addToCart", JSON.stringify(cart));
    displayCart(cart);

}

