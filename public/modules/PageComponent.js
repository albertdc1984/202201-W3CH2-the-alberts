import series from "../data/series.js";
import Component from "./Component.js";
import SerieCard from "./SerieCard.js";

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
            <p class="info">You have ${this.calculatePending()} series pending to watch</p>
            ${this.allSeries()}
            <ul class="series-list">
             
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched ${this.calculateWatched()} series</p>
            ${this.anySerie()}
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
        new SerieCard(wached, serie);
      } else {
        new SerieCard(pending, serie);
      }
    });
  }

  removeCard(serieToDelete) {
    this.series = this.series.filter((serie) => serie !== serieToDelete);
    this.generateBaseHTML();
    this.renderSeries();
  }

  calculateWatched() {
    const numberWatched = this.series.filter((serie) => serie.watched).length;

    return numberWatched;
  }

  calculatePending() {
    return this.series.length - this.calculateWatched();
  }

  allSeries() {
    if (!this.calculatePending()) {
      return `<p class="info">Congrats! You've watched all your series</p>`;
    }
    return "";
  }

  anySerie() {
    if (!this.calculateWatched()) {
      return `<p class="info"> You already have not watched any serie </p>`;
    }
    return "";
  }
}
