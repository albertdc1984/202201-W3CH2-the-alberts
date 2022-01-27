import SerieCard from "../SerieCard.js";

describe("Given a SeriesCard", () => {
  const parentElement = document.createElement("div");
  parentElement.className = "stars";
  let serie;
  beforeAll(() => {
    serie = {
      id: 1,
      name: "GoT",
      creator: "",
      year: 0,
      poster: "",
      watched: false,
      score: 0,
      emmies: 0,
    };
  });
  describe("When when it's initialized ", () => {
    test("Then it shoul render a li", () => {
      new SerieCard(parentElement, serie);

      expect(parentElement.querySelector("li")).not.toBeNull();
    });
  });
  describe("When it reciebes a serie with title GoT", () => {
    test("Then it should contain the string GoT", () => {
      new SerieCard(parentElement, serie);

      expect(parentElement.querySelector("li").textContent).toMatch("GoT");
    });
  });
});
