async function movies() 
{
    let movies=await fetch("http://www.omdbapi.com/?s=CONJURING&apikey=88c41eef")
    movies=await movies.json()
    console.log(movies.Search);
    movies=movies.Search//conver array to object
    
    let mymovies=document.getElementById("mymovies")
    for(let movie of movies)
     {
        let{Poster,Title,Year,}=movie

        mymovies.innerHTML+=`
        <div class="user-card">
        <img src=${Poster}>
        <h3>${Title}</h3>
        <p>${Year}</p>
        </div>

                `
    }
}
movies()