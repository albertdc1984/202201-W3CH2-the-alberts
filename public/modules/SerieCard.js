import Component from "./Component.js";
import StarsComponent from "./StarsComponent.js";

class SerieCard extends Component {
  serie;

  constructor(parentElement, serie) {
    super(parentElement, "li", "serie");
    this.serie = serie;
    this.generateHTML();
    const starsParent = this.element.querySelector(".stars");
    new StarsComponent(starsParent, serie.score);
  }

  generateHTML() {
    this.element.innerHTML = `
      
                <img
                  class="serie__poster"
                  src=${this.serie.poster}
                  alt="${this.serie.name} poster"
                  />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
                <div class="stars"></div>
                <i class="fas fa-times-circle icon--delete"></i>
              
    `;
  }
}

export default SerieCard;
