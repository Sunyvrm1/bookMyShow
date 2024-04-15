const storedImageId = localStorage.getItem("clickImageId");
const storedImageAPI = localStorage.getItem("clickImageAPI");
console.log(storedImageId);
console.log(storedImageAPI);

function displayMovies(storedID, storedAPI) {
  fetch(storedAPI)
    .then((res) => res.json())
    .then((data) => {
      const matchingId = data.results.find(
        (item) => item.id.toString() === storedID
      );

      if(matchingId) {
        const bannerPoster = document.getElementById("bannerPoster");
        const bannerTitle = document.getElementById("bannerTitle");
        const bannerRating = document.getElementById("bannerRating");
        const bannerVote = document.getElementById("bannerVote");
        const aboutText = document.getElementById("aboutText");
        const bannerMovies = document.querySelector(".bannerMovies");

        bannerPoster.src = "https://image.tmdb.org/t/p/w500/" + matchingId.poster_path;
        bannerTitle.innerHTML = matchingId.name || matchingId.title;
        bannerRating.innerHTML = matchingId.vote_average.toFixed(1);
        bannerVote.innerHTML = matchingId.vote_count;
        aboutText.innerHTML = matchingId.overview;
        bannerMovies.style.backgroundImage = `linear-gradient(
            90deg,
            rgba(26, 26, 26, 1),
            rgba(26, 26, 26, 1),
            rgba(26, 26, 26, 1),
            rgba(26, 26, 26, 0.4),
            rgba(26, 26, 26, 1),
            rgba(26, 26, 26, 1)
          ), url(https://image.tmdb.org/t/p/w500/${matchingId.backdrop_path})`;
      }
    });
}

displayMovies(storedImageId, storedImageAPI);


const ticketBook = document.querySelectorAll(".ticketBook");
ticketBook.forEach((ticket) => {
  ticket.addEventListener("click", () => {
    console.log("Hello");
  })
})