async function github()
{
    let gituser=await fetch("https://api.github.com/users")
    let users=await gituser.json()


    let  tbody=document.getElementById("tbody")


    for(let user of users)
    {
        tbody.innerHTML+=`
        <tr>
        <td>${user.id}</td>
        <td>${user.login}</td>
        <td><img src="${user.avatar_url}" width=100 height=80 > </td>
        <td>${user.type}</td>
        <tr>
        `
    }
}
github()