
let btn=document.getElementById("btn")

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0)
                    {
                    clearInterval(downloadTimer);
                    document.getElementById("countdown").innerHTML = "Finished";
                    } 
  else 
  {
    document.getElementById("countdown").innerHTML =  ` please wait link will get generated in ${timeleft} seconds `;
  }
  
  timeleft -= 1;
}, 1000);


let time=function()
{
    

    btn.style.visibility="hidden";
    if( btn.style.visibility==="hidden")
    {
         


        
        btn.style.visibility="visible";
        btn.innerText="sign up";
    }
    

}
setTimeout(time,11000)
