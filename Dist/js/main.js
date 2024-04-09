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

//API Slider

const sliders = document.querySelectorAll(".recommMoviesCont");

sliders.forEach((slider, i) => {
  const switchLeft = slider.parentElement.querySelector(".sliderBtnLeft");
  const switchRight = slider.parentElement.querySelector(".sliderBtnRight");
  switchLeft.addEventListener("click", () => {
    const scrollAmount = slider.clientWidth;
    slider.scrollTo({
      left: slider.scrollLeft - scrollAmount - 30
    });
  });
  switchRight.addEventListener("click", () => {
    const scrollAmount = slider.clientWidth;
    slider.scrollTo({
      left: slider.scrollLeft + scrollAmount + 30
    });
  });
})

//API Code

// Define API endpoints and target boxes

const apiEndpoints = [
  "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62"
];


const targetBoxes = [".recommMoviesCont1", ".recommMoviesCont2", ".recommMoviesCont3"];

// Loop through APIs to fetch and display images

apiEndpoints.forEach((endpoint, index) => {
  fetchandDisplay(endpoint, targetBoxes[index]);
});

function fetchandDisplay(apiEndpoint, targetBox) {
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      data.results.map((item) => {
        const box = document.querySelector(targetBox);
        const html = `
        <div class="recommMovies">
            <div>
            <img src="https://image.tmdb.org/t/p/w500/${
              item.poster_path
            }" alt="${item.id}" data-author="${apiEndpoint}" />
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <p>${item.vote_average.toFixed(1)}/10</p>
              <p>${item.vote_count} Votes</p>
            </div>
          </div>
            <p class="movieTitle">${item.title}</p>
            <p class="movieDes">Comedy/Thriller</p>
            
          </div>`;
        box.insertAdjacentHTML("beforeend", html);
      });
    });
}
