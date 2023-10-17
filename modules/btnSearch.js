import requestApi from "../api/requestApi.js";
import domBuilder from "./domBuilder.js";
import loader from "./loader.js";

export default function btnSearch() {
  const btn = document.querySelector("[data-btn]");
  btn.addEventListener("click", addMovie);
  
  async function addMovie() {
    loader()
    domBuilder(await requestApi());
  }
}
