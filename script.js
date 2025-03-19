const images = document.querySelectorAll(".image");
const imageContainer = document.getElementById("imageContainer")
const slideLeftBtn = document.getElementById("slideLeftBtn");
const slideRightBtn = document.getElementById("slideRightBtn");

let count = 1;
slideRightBtn.addEventListener("click", function(){
    if(count < images.length){
        imageContainer.style.transform = `translateX(-${count *316}px )`
        count++;
        console.log(count)
    }
    else{
        imageContainer.style.transform = `translateX(0px)`
        count =1;
    }

});


slideLeftBtn.addEventListener("click", function(){
    if(count>1) {

        
        console.log(count)
        imageContainer.style.transform  = `translateX(-${(count - 2)*316}px)`;
        count--;
        
        
    }
    else{
        imageContainer.style.transform =`translateX(-${(images.length -1) * 316}px)`
        count = images.length;
    }
})



// slider two
