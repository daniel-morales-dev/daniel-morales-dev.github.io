import viewHome from "../views/home.html";

export default () => {
  const divElement = document.createElement("section");
  divElement.innerHTML = viewHome;
  return divElement;
};
