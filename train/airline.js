async function airline()
 {
     var usercode=document.getElementById("code").value
 let airline=await  fetch(`https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json`)
    
    airline=await airline.json()
    console.log(airline);
    let sections=document.getElementById("air")
    //

        
       
    
    

// sliced=airline.slice(i,j)
// console.log(sliced)
// //




console.log(air.length)

    //
    
    for(let air of airline)
    {
        
        let{Time:{Label,Year},Airport:{Name,Code},Statistics:{Flights:{Cancelled}}}=air
      {
    
        if(Code==usercode){
    

         sections.innerHTML=`
        
        
        <h1>${Name} ${Code}</h1>
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
             
             
             `
            
      } 
      }
        
      }
    }



    