
const filmsDiv = document.querySelector(".films");
const formSearch = document.getElementById("form");

const showfilms = (films) => {
    filmsDiv.innerHTML = "";
    films.forEach((film) => {
        console.log(film)
        filmsDiv.innerHTML += `
        <div class="card col-lg-3 col-xs-12 col-md-6 m-1">
            <div class="film">
            <div class="card-body">
            <h3 class="card-header">${film.title}</h3>
            <h5 class="card-title">${film.overview}</h5>
            <img style="height: 200px; width: 100%; display: block;" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${film.poster_path}"  alt="Card image">
            </div>
            </div>
            </div>
             `;      
    });
}

const searchFilms = async (e) => {
    e.preventDefault();
    try {
      const search = e.target.search.value;
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=942ad2a0cd0e42b4e326e96febbc6d53&language=es-ES&query=${search}&page=1&include_adult=false`);
      const films = res.data.results;
      showfilms(films);
    } catch (error) {
      console.error(error);
    }
  };

 formSearch.addEventListener("submit", searchFilms)