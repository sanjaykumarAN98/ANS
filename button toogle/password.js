let password=document.getElementById("pwd")
let button=document.getElementById("btn")
let label=document.getElementById("label")
function togglepassword()
{
    if(password.type=="password")
    {
        password.type="text"
        label.innerText="hide password"
    }
    else{
        password.type="password"
        label.innerText="show  password"
    }
}