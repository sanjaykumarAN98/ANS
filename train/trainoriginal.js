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
    let arr=trains.data.length;
    console.log(arr);
let data=new Array()



 for(let i=0;i<=arr;i++){
    data[i]
    console.log(data);

 }


     body.innerHTML=`

     <table border class="table">
            <thead>
            <tr>
                <th>Train no:</th>
                
                <th>Train Name:</th>
                <th>Day</th>
                <th>From</th>
                <th>To</th>
                
                <th>Time:</th>
                <th>Class</th>
                
            </tr>
           </thead>
       
             </tbody>
            
             <td>${trains.data[0].train_number}</td>
             <td>${trains.data[0].train_name}</td>
             <td>${trains.data[0].run_days}</td>
             <td>${trains.data[0].train_origin_station}</td>
             <td>${trains.data[0].train_destination_station}</td>
             <td>${trains.data[0].depart_time}</td>
             <td>${trains.data[0].class_type}</td>
            
            
             
             
        </table> 

    
     `
     
     

 }
 