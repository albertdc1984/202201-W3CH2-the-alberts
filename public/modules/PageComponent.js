import series from "../data/series.js";
import Component from "./Component.js";
import MovieCard from "./MovieCard.js";

export default class PageComponent extends Component {
  series;

  constructor() {
    const parentElement = document.querySelector(".container");
    const className = "main";
    const tag = "main";
    super(parentElement, tag, className);
    this.series = series;
    this.generateBaseHTML();
    this.renderSeries();
  }

  generateBaseHTML() {
    this.element.innerHTML = `<section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
             
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
             
                
            </ul>
          </section>
        </section>`;
  }

  renderSeries() {
    const wached = document.querySelector(".series-watched .series-list");
    const pending = document.querySelector(".series-pending .series-list");

    this.series.forEach((serie) => {
      if (serie.watched) {
        new MovieCard(wached, serie);
      } else {
        new MovieCard(pending, serie);
      }
    });
  }

  removeCard(serieToDelete) {
    this.series = this.series.filter((serie) => serie !== serieToDelete);
    this.generateBaseHTML();
    this.renderSeries();
  }
}
