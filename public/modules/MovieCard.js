import Component from "./Component.js";
import MoviePoster from "./MoviePoster.js";
import series from "../data/series.js";

class MovieCard extends Component {

  movies = series;

  movie;

  constructor(parentElement, seriesId) {

    super(parentElement, "li", "serie");


    this.generateHTML();

    this.seriesId = seriesId;
    this.movie = this.movies.filter(() => this.movies.id === this.seriesId);
  }

  generateHTML() {
     this.element.innerHTML = `
      
                <img
                  class="serie__poster"
                  src=${this.movie.poster}
                  alt="${this.movie.name} poster"
                  />
                <h4 class="serie__title">${this.movie.name}</h4>
                <p class="serie__info">${this.movie.creator} (${this.movie.year})</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              
    `;
  }
}

export default MovieCard;
