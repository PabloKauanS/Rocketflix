export default function domBuilder(movie) {
  let image_movie, title_movie, desc_movie;
  
  image_movie = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  title_movie = movie.title;
  desc_movie = movie.overview;

  if (movie["status_code"] === 34) {
    image_movie = "./icons/favico/poster.png";
    title_movie = "Ops, hoje não é dia de assistir filme. Bora codar! 🚀";
    desc_movie = "";
  }
  document.querySelector(".movie").innerHTML = strMovie(
    image_movie,
    title_movie,
    desc_movie
  );
}

function strMovie(image, title, desc) {
  return `<img class="movie-image" src="${image}" width="171" height="243.773" alt="">
            <div class="movie-info">
              <h2 class="font-4 movie-title">${title}</h2>
              <p class="font-5 movie-description">${desc}</p>
            </div>`;
}
