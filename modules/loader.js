export default function loader() {
  const movie_dom = document.querySelector(".movie");
  movie_dom.innerHTML = strLoader();
}
function strLoader() {
  return `<span class="loader"></span>`;
}
