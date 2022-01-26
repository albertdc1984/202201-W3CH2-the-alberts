import series from "../data/series.js";
import Component from "./Component.js";

export default class PageComponent extends Component {
  constructor() {
    const parentElement = document.querySelector(".container");
    const className = "main";
    const tag = "main";
    super(parentElement, tag, className);
    this.series = series;
    this.generateBaseHTML();
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
              <li class="serie">
                
                
              </li>
            </ul>
          </section>
        </section>`;
  }

  renderSeries() {
    const wached = this.element.querySelector("series-watched");
    const pending = this.element.querySelector("series-pending");
    this.series.forEach((serie) => {
      if (serie.watched) {
        wached.append(/* generateserie(serie) */);
      } else {
        pending.append(/* generateserie(serie) */);
      }
    });
  }
}
