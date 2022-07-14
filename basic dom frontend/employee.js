let employees=
[
    {
        empno:001,
        empname:"ans",
        dept:"cs",
        hiredate:"12-03-2015",
        job:"jr.engg",
        salary:800,
        imgurl:"https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg",
    },
    {
        empno:011,
        empname:"kumar",
        dept:"sales",
        hiredate:"19-06-2019",
        job:"salesman",
        salary:1200,
        imgurl:"https://cdn.pixabay.com/photo/2016/11/22/19/33/asian-cuisine-1850233__340.jpg"

    },

    {
        empno:007,
        empname:"andrew",
        dept:"marketing",
        hiredate:"21-09-2018",
        job:"sales",
        salary:500,
        imgurl:"https://cdn.pixabay.com/photo/2018/02/02/21/41/angry-3126438__340.jpg"
    },
    {
        empno:091,
        empname:"sanjay",
        dept:"trainer",
        hiredate:"07-03-2022",
        job:"jr.engg",
        salary:950,
        imgurl:"https://cdn.pixabay.com/photo/2018/05/09/22/40/career-3386334_960_720.jpg"
    }
]
console.log(employees);
let tbody=document.getElementById("tbody");
console.log(tbody);
for( let employee of employees)
{
    // console.log(employee);
    tbody.innerHTML+=`
    
    
    <tr>
        <td>${employee.empno}</td>
        <td>${employee.empname}</td>s
        <td>${employee.dept}</td>
        <td>${employee.hiredate}</td>
        <td>${employee.job}</td>
        <td>${employee.salary}</td>
        <td><img src=${employee.imgurl} width=100 height=90 ></td>
        
    </tr>
    
    `
}
