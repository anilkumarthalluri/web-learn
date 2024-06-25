let cont = document.body.childNodes[5].childNodes
//undefined
//cont
//NodeList(13) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text, script, text]
cont[1].style.color = "blue"
//'blue'
cont[1].style.backgroundColor = "orange"
//'orange'
cont[3].style.backgroundColor="green"
//'green'
cont[5].style.backgroundColor="yellow"
//'yellow'
cont[7].style.backgroundColor="blue"
//'blue'
cont[7].style.color="red"
//'red'
cont[9].style.color="black"
//'black'
cont[9].style.backgroundColor="black"
//'black'
cont[9].style.color="white"
//'white'
cont[5].style.color="purple"
//'purple'