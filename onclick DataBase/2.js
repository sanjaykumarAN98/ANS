 let body=document.getElementById("body")
function database()
{
    let name=document.getElementById("t1").value
    let password=document.getElementById("p1").value
    let mobile=document.getElementById("nu1").value
    body.innerHTML=`
    <table border class="table">
    <thead>
    <tr>
    <th>Name</th>
    <th>Password</th>
    <th>mobile</th>
    </tr>
    </thead>
    </tbody>
    <tr>
    <td>${name}</td>
    <td>${password}</td>
    <td>${mobile}</td>
    </tr>
    </table>
    `

}
