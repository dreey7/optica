var currentImgIndex=1;
var ImgSrcArray = ['img/menu1.png','img/menu2.png' ];

    function clickMenu() {
        if (options.style.display == 'block') {
            options.style.display = 'none'
            barra.style.display = 'block' 
        } else {
            options.style.display = 'block'
            barra.style.display = 'none'
        } 
    }

    function trocar() {
        if(currentImgIndex == ImgSrcArray.length) {
            currentImgIndex=0;
         }
        document.getElementById("menuzin").src=ImgSrcArray[currentImgIndex]; 
        currentImgIndex++;
    }

let time = 5000,
    currentImageIndex = 0,
    images = document.
                querySelectorAll("#slider img")
    max = images.length;

    function nextImg () {
        images[currentImageIndex]
            .classList.remove("selected")
        
        currentImageIndex++

        if(currentImageIndex >= max)
        currentImageIndex = 0

        images[currentImageIndex]
            .classList.add("selected")
    }

    function start() {
        setInterval(() => {
            //troca de imagem 
            nextImg()
        },  time)
    }
    
    window.addEventListener("load", start)