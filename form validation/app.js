const form=document.getElementById("form")
const user=document.getElementById("user")
const password=document.getElementById("password")
const errorElement=document.getElementById("error")

form.addEventListener("submit",(e)=>{
    let messages=[]
    if(user.value===""){
        messages.push("username is required")
    }
    if(password.value===""){
        messages.push("password cant be null")
    }
    e.preventDefault()
    errorElement.innerText=messages.join(',')
})