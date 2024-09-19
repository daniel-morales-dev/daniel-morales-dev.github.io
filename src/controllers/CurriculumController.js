import viewCurriculum from "../views/curriculum.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = viewCurriculum;
  return divElement;
};
