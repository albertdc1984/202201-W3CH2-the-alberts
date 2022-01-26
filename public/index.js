import MovieCard from "./modules/MovieCard.js";
import series from "./data/series.js";

import PageComponent from "./modules/PageComponent.js";

const cardPending = document.querySelector(".series-list");
const cardWatched = document.querySelector(".series-list--watched");

const sopranosPending = new MovieCard(cardPending, 1);
const gameOfThronesPending = new MovieCard(cardPending, 2);
const madMenPending = new MovieCard(cardPending, 3);
const sixFeetUnderPending = new MovieCard(cardPending, 4);

const sopranosWatched = new MovieCard(cardWatched);
const gameOfThronesWatched = new MovieCard(cardWatched);
const madMenWatched = new MovieCard(cardWatched);
const sixFeetUnderWatched = new MovieCard(cardWatched);

new PageComponent();
