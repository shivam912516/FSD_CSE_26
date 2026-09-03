function addParagraph(){
    const para=document.createElement("p");
    para.innerHTML="<u>This is new paragraph</u>";
    para.style.color="red";
    const parent=document.getElementById("para");
    parent.appendChild(para);
}
function removeParagraph(){
    const parent=document.getElementById("para");
    const child=document.querySelector("p");
    parent.removeChild(child);
}
function removeAllParagraph(){
    const parent=document.getElementById("para")
    const child=document.querySelectorAll("p");
    for(i of child){
    parent.removeChild(1);
    }
   
}