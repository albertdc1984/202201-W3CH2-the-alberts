import StarsComponent from "../StarsComponent.js";

describe("Given a StarsComponent class", () => {
  describe("When we call it ", () => {
    test("Then it should render a li node", () => {
      const parentComponent = document.createElement("div");

      new StarsComponent(parentComponent);
      const htmlUl = parentComponent.querySelector("li");

      expect(htmlUl).not.toBeNull();
    });

    test("Then it should render 5 star icons", () => {
      const parentComponent = document.createElement("div");

      new StarsComponent(parentComponent);
      const htmlUl = parentComponent.querySelectorAll("li").length;

      expect(htmlUl).toBe(5);
    });
  });
});
