var current_page = 1;
var obj_per_page = 3;



function prevPage()
{
    if (current_page > 1) {
        current_page--;
        change(current_page);
    }
}
function nextPage()
{
    if (current_page < 4000) {
        current_page++;
        change(current_page);
    }
}
 async function change(page)
{
    
    //
    let airline=await  fetch(`https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json`)
    airline=await airline.json()
    console.log(airline);
    // // let sections=document.getElementById("air")
   
    
    function totNumPages()
{
    return Math.ceil(airline.length / obj_per_page);
}

console.log(airline.length)
for(let air of airline)
        {
            
            let{Time:{Label,Year},Airport:{Name,Code},Statistics:{Flights:{Cancelled}}}=air

//

    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev"); 
    var listing_table = document.getElementById("TableList");
    var page_span = document.getElementById("page");
    if (page < 1) page = 1;
    if (page > totNumPages()) page = totNumPages();
    listing_table.innerHTML = "";
    for (var i = (page-1) * obj_per_page; i < (page * obj_per_page); i++) 
    
                listing_table.innerHTML+= `<h1>${Name} ${Code}</h1>
        <table border class="table">
            <thead>
            <tr>
                <th>Time Lable</th>
                <th>Total cancelled</th>
                <th>Year</th>
            </tr>
           </thead>
        <thead>
        <tr>
        <th>${Label}</th>
        <th>${Cancelled}</th>
        <th>${Year}</th>
        
        </tr>
        </thead>
             </tbody>
             ` + "<br>";
    }
    
    page_span.innerHTML = page;
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }
    if (page == totNumPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}
window.onload = function() {
    change(1);

};

