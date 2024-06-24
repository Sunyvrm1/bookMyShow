const bookDateCont = document.querySelector(".bookDateCont");
const storeDimension = localStorage.getItem("movieDimension");
const storeTitle = localStorage.getItem("movieTitle");
console.log(storeDimension, storeTitle);

const bookMovieName = document.querySelector(".bookMovieName");
bookMovieName.innerHTML = storeTitle;

//date show

fetch("date.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.forEach((item) => {
      const html = `
      <button class="bookDate">
                        <p>${item.day}</p>
                        <p class="dateBooking">${item.date}</p>
                        <p>${item.month}</p>
        </button>
      `;
      bookDateCont.insertAdjacentHTML("beforeend", html);
    });

    const bookDate = document.querySelectorAll(".bookDate");
    bookDate[0].classList.add("bookDateActive");
    bookDate.forEach((btn) => {
      btn.addEventListener("click", () => {
        bookDate.forEach((btn) => btn.classList.remove("bookDateActive"));
        btn.classList.add("bookDateActive");
      });
    });
  });

//time and location

const bookCinema = document.querySelector(".bookCinema");

fetch("places.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const html = `<div class="bookCinemaCont">
                <div class="bookCinemaName">
                    <p>${item.name}</p>
                    <img src="./Dist/images/cinema.png" alt="">
                </div>
                <div class="bookCinemaTime">
                    <ul>
  
                    </ul>
                </div>
            </div>`;
      bookCinema.insertAdjacentHTML("beforeend", html);

      const currentCinemaCont = bookCinema.lastElementChild;
      const bookCinemaTime =
        currentCinemaCont.querySelector(".bookCinemaTime ul");
      item.time.forEach((time) => {
        bookCinemaTime.insertAdjacentHTML(
          "beforeend",
          `
          <li>${time}</li>
          `
        );
      });
    });
  });

const input1 = document.getElementById("input1");
const inputDim = document.querySelector(".inputDim");
input1.value = storeDimension;
const list = document.querySelector(".list ul");
const listAll = document.querySelectorAll(".list ul li");
inputDim.addEventListener("click", () => {
  list.classList.toggle("hide");
});

listAll.forEach((item) => {
  item.addEventListener("click", () => {
    input1.value = item.textContent;
    list.classList.add("hide");
  });
});
