let password=document.getElementById("pwdid")
function togglepassword(){
    if(password.type==="password"){
        password.type="text"
        icon.className="fa-solid fa-eye-slash"

    }
    else{


        password.type="password"
        icon.className="fa-solid fa-eye"
        
    }
}