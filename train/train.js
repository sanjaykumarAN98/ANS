const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c7c338e32mshb1b6f56fec40f06p13a43fjsn49a5f452efe2',
		'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
	}
};
 async function traintime(){
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

 let trains=await  fetch(`https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=${from}&toStationCode=${to}`, options)
	
    
    trains=await trains.json()
    console.log(trains);
    
    // console.log(trains);

    // finding the length of array
    let arr=trains.data.length;
    // console.log(arr);
let data=new Array()



 for(let i=0;i<=arr;){
    data[i]
    
     body.innerHTML+=`

     <table border class="table">
            <thead>
            <tr>
                <th>Train no:</th>
                
                <th>Train Name:</th>
                <th>Day</th>
                <th>From</th>
                <th>To</th>
                
                <th>Time:</th>
                
                
            </tr>
           </thead>
       
             </tbody>
            
             <td>${trains.data[i].train_number}</td>
             <td>${trains.data[i].train_name}</td>
             <td>${trains.data[i].run_days}</td>
             <td>${trains.data[i].train_origin_station}</td>
             <td>${trains.data[i].train_destination_station}</td>
             <td>${trains.data[i].depart_time}</td><br>
            
            
            
             
             
        </table> 

    
     `
     
     i++;

 }
}
 


//successfully created this program on14/july/2022 @4.40 pm