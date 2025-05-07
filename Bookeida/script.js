var popup = document.querySelector(".back")
var popupdata = document.querySelector(".bookdata")
var popupbutton = document.getElementById("add")


popupbutton.addEventListener("click",function(){
    popup.style.display= "block"
    popupdata.style.display = "block"
})

var cancelbutton = document.getElementById("can")
cancelbutton.addEventListener("click",function(event){
 event.preventDefault()
 popup.style.display= "none"
 popupdata.style.display = "none"

})

var container = document.querySelector(".sources")
var booktitle = document.getElementById("booktitle")
var bookauthor = document.getElementById("bookauthor")
var bookdesc = document.getElementById("desc")
var newwadd = document.getElementById("newwadd")
newwadd.addEventListener("click",function(event){
      event.preventDefault()
      var div = document.createElement("div")
      div.setAttribute("class","container")
      div.innerHTML =`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${bookdesc.value}</p>
    <button onclick="delee(event)">Delete</button>`
    container.append(div)
    booktitle.value = "";
    bookauthor.value = "";
    bookdesc.value = "";
    popup.style.display= "none"
    popupdata.style.display = "none"
})

function delee(event){
   event.target.parentElement.remove()
}

