import domBuilder from "./utilities/domBuilder.js";
export default function btnSearch() {
  const btn = document.querySelector("[data-btn]");
  btn.addEventListener("click", domBuilder);
}
