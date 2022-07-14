// function calc()
// {
//     let n1=Number(document.getElementById('n1').value);
//     let n2=Number(document.getElementById('n2').value);
//     let h=document.getElementById('h');
//     h.innerHTML='result is'+ (n1+n2)

// }




function calc(fun,n1,n2){
     n1=Number(document.getElementById('n1').value);
     n2=Number(document.getElementById('n2').value);
    h=document.getElementById('h');
    return fun(n1,n2)
}


function add()
{
    calc((n1,n2)=>h.innerHTML="result is"+(n1+n2),n1,n2)
}
function sub()
{
    calc((n1,n2)=>h.innerHTML="result is"+(n1-n2),n1,n2)
}
function mul()
{
    calc((n1,n2)=>h.innerHTML="result is"+(n1*n2),n1,n2)
}

function div()
{
    calc((n1,n2)=>h.innerHTML="result is"+(n1/n2),n1,n2)
}
