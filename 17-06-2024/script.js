document.querySelector(".box").hasAttribute("style")
//true
document.querySelector(".box").getAttribute("style")
//'color:red;'
document.querySelector(".box").setAttribute("style","font-size:30px;")
//undefined
document.designMode="on"
//'on'
document.designMode="off"
//'off'
document.querySelector(".box").dataset

