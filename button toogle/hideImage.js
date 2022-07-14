let image=document.getElementById("imageid")
let button=document.getElementById("btnid")


function toogleimage()
{
    if(button.innerText==="HIDE")
    {
        image.style.visibility="hidden"
        button.innerText="SHOW"
    }
    else{
        image.style.visibility="visible"
        button.innerText="HIDE"
    }
}