function pickImage(){
    options = ["https://i.ibb.co/0FQjtdV/descarga-10.png", "https://i.ibb.co/kGStWZp/descarga-8.png","https://i.ibb.co/SRQrfc0/descarga-7.png", "https://i.ibb.co/dQThbkY/descarga-6.png", "https://i.ibb.co/1JX0WDn/descarga-5.png"]
    randomImg = options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#imagennav")
    img.setAttribute("src",randomImg)
    img.setAttribute("alt","")

}


function setImages(){
    options = ["bacon_in_the_woods.png", "bacon_near_the_fort.png", "hollow_tree.png", "lake_view.JPG", "bend_in_the_road.png","BaconGallupPark.jpg"]
    currentImages = document.querySelectorAll(".flex img")
    for (var i = 0; i < xs.length; i++) { 
        randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
        i.setAttribute("src",randomImg)
        i.setAttribute("alt","")    
    }

}
