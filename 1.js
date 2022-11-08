


 function toogle()
 {
    let body=document.getElementById("body")
    let date=document.getElementById("dobid").value
    let fn=(document.getElementById("fnid").value)
    let ln=document.getElementById("lnid").value
    console.log( typeof fn);
    console.log(typeof ln);
    // console.log(full);
    //validation
    let reg=/[A-Za-z]/g;
    let firstname=reg.test(fn);
    let lastname=reg.test(ln);
    let inval=/[0-9]/g;
    
    if(firstname&&lastname===true)
    {
        firstname=fn;
        lastname=ln;
       
    }
    else{

        alert("invalid username")
        preventDefault()
          
    }
    if(date===false)
    {
        body.style.display.visibility="hidden";
    }
    
    
// console.log(date);
// let age=2022-date
// console.log(age);
var today=new Date();
var age=today.getFullYear()-date
if(age>=18)
{
    body.style.backgroundColor="green"
}
else{
    body.style.backgroundColor="red"
    
}
document.getElementById("text").innerHTML = fn+" "+ln;
document.getElementById("ageid").innerHTML=age;
    // body.innerHTML=
    // `
    // <br>
    // <label >fullname</label><br>
    // <input type="text" value=${fn}&nbsp;${ln} readonly><br>
    // <label >age</label><br>
    // <input type="text" value=${age} readonly><br>



    // `
//now by using git pull and vim command edited in local repo
}
