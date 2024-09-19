import viewPortfolio from "../views/portfolio.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = viewPortfolio;
  return divElement;
};
