


 function toogle()
 {
    let body=document.getElementById("body")
    let date=document.getElementById("dobid").value
    let fn=document.getElementById("fnid").value
    let ln=document.getElementById("lnid").value
    let full=fn+ln;
    // console.log(full);
    
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

    body.innerHTML=
    `
    <label >fullname</label><br>
    <input type="text" value=${full}><br>
    <label >age</label><br>
    <input type="number" value=${age}><br>
    `

}