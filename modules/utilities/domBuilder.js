import requestApi from "./requestApi.js";
export default async function domBuilder() {
  const dom_movie = document.querySelector(".movie");
  const data_movie = await requestApi();
  const image_movie = data_movie["poster_path"]
    ? `https://image.tmdb.org/t/p/original${data_movie["poster_path"]}`
    : "../icons/favico/poster.png";
  const title_movie = data_movie["title"]
    ? data_movie["title"]
    : "Ops, hoje não é dia de assistir filme. Bora codar! 🚀";
  const data_description = data_movie["overview"]
    ? data_movie["overview"]
    : "";
  const str_movie = `<img class="movie-image" src="${image_movie}" width="171" height="243.773" alt="">
        <div class="movie-info">
          <h2 class="font-4 movie-title">${title_movie}</h2>
          <p class="font-5 movie-description">${data_description}</p>
        </div>`;
  console.log(data_movie);
  dom_movie.innerHTML = str_movie;
}
