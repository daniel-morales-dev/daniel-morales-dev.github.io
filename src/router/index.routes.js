import { pages } from "../controllers/index";
let content = document.querySelector(".container-root");

const router = (nameRoute) => {
  content.innerHTML = "";
  switch (nameRoute) {
    case "": {
      return content.appendChild(pages.Home());
    }
    case "#/curriculum":
      return content.appendChild(pages.Curriculum());
    case "#/skills":
      return content.appendChild(pages.Skills());
    case "#/portfolio":
      return content.appendChild(pages.Portfolio());
    case "#/contact":
      return content.appendChild(pages.Contact());
    default:
      return content.appendChild(pages.NotFound());
  }
};

export { router };
