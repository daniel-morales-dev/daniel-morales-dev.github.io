import "../styles/styles.css";
import "../scripts/menu.js";
import "animate.css";
import "../assets/docs/HV_DM.pdf";
import { router } from "../router/index.routes";

router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
