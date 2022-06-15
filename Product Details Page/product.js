function changeImg(smallImg){
    let bigImg= document.querySelector("#bigImage>img");
    // let smallImg= document.querySelector("#smallImages>div>img")
    bigImg.src= smallImg.src;
}