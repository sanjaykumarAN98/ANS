    
let body = document.getElementById('body')

function login() {
    let username = document.getElementById('username').value
   
    let password = document.getElementById('password').value

    body.innerHTML = `
        <table border class="table">
            <thead>
            <tr>
                <th>Name</th>
                
                <th>password</th>
            </tr>
           </thead>
       
             </tbody>
             <tr>
            <td>${username}</td>
            <td>${password}</td>
             
            </tr> 
        </table> 
         `
}