let button=document.getElementById("i")
function toogle()
{
    if(button.innerText=="dark"){
        document.body.style.backgroundColor="orange"
        button.innerText="light"
    }
    else{
        document.body.style.backgroundColor="pink"
        button.innerText="dark"
    }

    
}