  async   function githubuser()
{
    let users=await fetch("https://api.github.com/users")
    users=await users.json()
    console.log(users);
    let  section=document.getElementById("user")
    for(let user of users)
    {
        let {avatar_url,login,type}=user
        section.innerHTML+=`
        <div class="user-card">
        <img src=${avatar_url} alt="">
        <div class="user-icons">
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-facebook-square" aria-hidden="true"></i>
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>

        </div>
        <h3>${login}</h3>
        <p>${type}</p>
        </div>
    
        `

    }
}
githubuser()