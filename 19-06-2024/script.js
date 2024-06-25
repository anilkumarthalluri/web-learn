let btn = document.getElementById("btn")

btn.addEventListener("mouseenter",()=>{   //click dblclick
    //alert("click to change content")
    document.querySelector(".box").innerHTML="<b>yes content changed by clicking</b>"    
    
})