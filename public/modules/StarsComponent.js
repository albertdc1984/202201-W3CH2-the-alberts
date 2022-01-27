import Component from "./Component.js";

export default class StarsComponent extends Component {
  score;

  constructor(parentElement, score) {
    super(parentElement, "ul", "score");
    this.score = score;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <li class="score__star">
        <i class="icon--score ${this.setScore(1)} fa-star" title="1/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score ${this.setScore(2)} fa-star" title="2/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score ${this.setScore(3)} fa-star" title="3/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score ${this.setScore(4)} fa-star" title="4/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score ${this.setScore(5)} fa-star" title="5/5"></i>
      </li>
    `;
  }

  setScore(index) {
    if (this.score >= index) {
      return "fas";
    }
    return "far";
  }
}
