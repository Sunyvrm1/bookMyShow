//Banner Slider

const bannerCarousel = document.querySelector(".bannerCarousel");
const bannerWidth = document.querySelector(".imageBanner").clientWidth;
const bannerBtn = document.querySelectorAll(".bannerBtn");
bannerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.id);
    console.log(bannerWidth);
    bannerCarousel.scrollLeft +=
      btn.id === "left" ? -bannerWidth - 10 : bannerWidth + 10;
  });
});

//Recommended Movies

fetch(
  "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62"
)
  .then((res) => res.json())
  .then((data) => {
    const recommMoviesCont = document.querySelector(".recommMoviesCont");
    data.results.map((movie) => {
      recommMoviesCont.insertAdjacentHTML(
        "beforeend",
        `
        <div class="recommMovies">
            <div>
            <img src="https://image.tmdb.org/t/p/w500/${
              movie.poster_path
            }" alt="">
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <p>${movie.vote_average.toFixed(1)}/10</p>
              <p>${movie.vote_count} Votes</p>
            </div>
          </div>
            <p class="movieTitle">${movie.title}</p>
            <p class="movieDes">Comedy/Thriller</p>
          </div>
        `
      );
    });

    const movieContWidth = recommMoviesCont.clientWidth;
    const sliderBtn = document.querySelectorAll(".sliderBtn");
    sliderBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        recommMoviesCont.scrollLeft +=
          btn.id === "left" ? -movieContWidth - 30 : movieContWidth + 30;
      });
    });
  });

//Event section

const eventMoviesList = document.querySelector(".eventMoviesList");
const movieContWidth1 = eventMoviesList.clientWidth;
const sliderBtn1 = document.querySelectorAll(".sliderBtn1");
sliderBtn1.forEach((btn) => {
  btn.addEventListener("click", () => {
    eventMoviesList.scrollLeft +=
      btn.id === "left" ? -movieContWidth1 - 30 : movieContWidth1 + 30;
  });
});
