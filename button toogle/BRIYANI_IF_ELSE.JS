let span=document.getElementById("span")
function briyani()
{
    if(button.innerText=="BRIYANI"){
       
        span.innerText="CHICKEN"
        span.style.color="blue"
        // document.body.style.backgroundImage="url('https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg')"
        // document.body.style.backgroundRepeat = "no-repeat";
        // document.body.style.backgroundSize = "auto";
        
        button.innerText="mutton"
    }
    else{
        span.innerText="MUTTON"
        span.style.color="RED"
        // document.body.style.backgroundImage="url('https://c.ndtvimg.com/2019-02/45dlkeqo_mutton-biryani_625x300_27_February_19.jpg')"
        // document.body.style.backgroundRepeat = "no-repeat";
        // document.body.style.backgroundSize = "auto";
        button.innerText="BRIYANI"
    }
}

