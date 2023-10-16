//*selecting popupbox popup overlay,button

var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopbutton=document.getElementById("add-popup-button");

addpopbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block";
})

//! get out of overlay screen by clcking anywhere in overlay
popupoverlay.addEventListener("click",()=>{
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})


//*selecting cancel button to prevent loading onclick
cancelbtn=document.getElementById("cancel-book");
cancelbtn.addEventListener("click",(event)=>{
    event.preventDefault();
})
//* cancel button used to cancel the popup
cancelbtn.addEventListener("click",function(){
    popupoverlay.style.display="none"
    popupbox.style.display="none";
    booktitleinput.value="";
    bookauthorinput.value="";
    bookdescriptioninput.value="";
})


//* selecting add-btn,3 inputs in popupbox

var container=document.querySelector(".container");
var addbtn=document.getElementById("add-book");
var booktitleinput=document.getElementById("book-title-input");
var bookauthorinput=document.getElementById("book-author-input");
var bookdescriptioninput=document.getElementById("book-description-input");

addbtn.addEventListener("click",(event)=>{
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container")
    div.innerHTML=`<h3>${booktitleinput.value}</h3>
    <h4>${bookauthorinput.value}</h4>
    <p>${bookdescriptioninput.value}</p>
       <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none";
    popupbox.style.display="none";
    booktitleinput.value="";
    bookauthorinput.value="";
    bookdescriptioninput.value="";

})
function deletebook(event){
    event.target.parentElement.remove();
}
