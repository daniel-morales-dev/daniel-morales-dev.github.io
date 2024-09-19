import viewServices from "../views/notFound.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = viewServices;
  return divElement;
};
