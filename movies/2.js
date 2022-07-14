async function employee() 
{
    let movies=await fetch("https://api.github.com/users")
    movies=await movies.json()
    movies=movies.Search
    console.log(movies);
}
    let mymovies=document.getElementById("mymovies")
    for(let movie of movies)
     {
        let{Poster,Title,Year}=movie

        mymovies.innerHTML+=`
        <div class="user-card">
        <img src=${Poster}>
        <h3>${Title}</h3>
        <p>${Year}</p>
        </div>

                `
    }

employee()