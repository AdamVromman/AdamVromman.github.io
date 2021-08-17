window.onload = function () {
    console.log("load");    

    let fotoGallery = document.getElementById("foto-gallery");
    let fotoBottom = document.getElementById("bottom");
    let fotoTop = document.getElementById("top");
    let body = document.getElementById("body");
    let topTest = document.getElementById("top-test");
    let bottomTest = document.getElementById("bottom-test");

    if(fotoGallery && bottomTest && topTest && body)
    {
        window.addEventListener("scroll", function(e){
            //let fotoLeft = window.scrollY / window.innerHeight * 100;
            //fotoBottom.style.left = `${fotoLeft}%`;
            //fotoTop.style.right = `${fotoLeft}%`;
            let maxScrollNeededBottom = bottomTest.clientWidth - body.clientWidth;
            let maxScrollNeededTop = topTest.clientWidth - body.clientWidth;
            let alphaBottom = maxScrollNeededBottom / window.innerHeight;
            let alphaTop = maxScrollNeededTop / window.innerHeight
            let scrollAmountBottom = window.scrollY * alphaBottom;
            let scrollAmountTop = window.scrollY * alphaTop
            bottomTest.style.transform = `translateX(-${scrollAmountBottom}px)`;
            topTest.style.transform = `translateX(${scrollAmountTop}px)`;

            
        });
    }
}