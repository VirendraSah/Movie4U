let moviecardwrapper=document.querySelector(".MovieCardsWrapper")


let getMovie= async(searchText)=>{
    console.log(searchText)
    let apiurl;
    if(searchText==undefined || searchText==''){
        apiurl='https://api.themoviedb.org/3/movie/popular?api_key=3a93de461a54464d43876e0a8721e63e&language=hi-IN&page=2'
    }else{
        apiurl=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&page=1&query=${searchText}`
    }
    let movieData=await fetch(apiurl)
    let finalData=await movieData.json()
    let {results}=finalData
    let movieItems=''
    results.forEach((items,index) => {
        let{original_title,poster_path,release_date}=items
    movieItems+=(`
        <div class="moviecard">
                <figure>
                    <img src="https://image.tmdb.org/t/p/w500${poster_path}" 
                    alt="${original_title}">
                </figure>
                <div class="MovieDetails">
                    <h2>${original_title}</h2>
                    <p>${release_date}</p>
                </div>
            </div>
        `)
    });
    moviecardwrapper.innerHTML=(movieItems)
}
getMovie()

//Search Functionality

let SearchBar=document.querySelector(".searchBarWrapper input")

SearchBar.addEventListener("keyup",(event)=>{
    let searchInput=event.target.value
    getMovie(searchInput)
})