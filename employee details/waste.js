trains=await trains.json()
    console.log(trains);
    let train=document.getElementById("body")
    // for(let train of trains){
    let {message,status}=train
 train.innerHTML+=`
 <table border class="table">
            <thead>
            <tr>
                <th>train name</th>
                
                <th>train number</th>
            </tr>
           </thead>
           <tr>
           <td>${message}</td>
           <td>${status}</td>
            
           </tr> 
       </table> 

 `
  //  }

train()